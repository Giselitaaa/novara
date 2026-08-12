import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { authConfig } from "@/lib/auth.config";
import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";

/**
 * Instancia completa de Auth.js (Node.js runtime): añade a la config
 * edge-safe los proveedores reales y los callbacks que necesitan
 * Prisma/bcrypt. La usan el route handler (`/api/auth/[...nextauth]`)
 * y las server actions — nunca el middleware (ver `auth.config.ts`
 * y `middleware.ts`).
 *
 * Vinculación de cuentas OAuth: NO se usa `@auth/prisma-adapter` (ver
 * nota extensa en `auth.config.ts`/README) — se vincula a mano en el
 * callback `signIn`, usando la tabla `AuthProvider` del modelo de
 * datos aprobado.
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        const email = (credentials.email as string).toLowerCase().trim();
        const rateLimit = checkRateLimit(`login:${email}`, 10, 15 * 60);
        if (!rateLimit.allowed) return null;

        const user = await db.user.findUnique({
          where: { email },
          include: { profile: true },
        });

        if (!user?.passwordHash) return null;

        const isValidPassword = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        );
        if (!isValidPassword) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.profile
            ? `${user.profile.firstName} ${user.profile.lastName}`
            : user.email,
          image: user.profile?.avatarUrl ?? null,
        };
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,

    signIn: async ({ user, account }) => {
      if (account?.provider !== "google" || !user.email) return true;

      const existingAuthProvider = await db.authProvider.findUnique({
        where: {
          provider_providerUserId: {
            provider: "google",
            providerUserId: account.providerAccountId,
          },
        },
      });

      if (existingAuthProvider) {
        user.id = existingAuthProvider.userId;
        return true;
      }

      const activeStatus = await db.userStatus.findUnique({ where: { key: "activo" } });
      const alumnoRole = await db.role.findUnique({ where: { name: "alumno" } });
      const existingUser = await db.user.findUnique({ where: { email: user.email } });

      if (existingUser) {
        await db.authProvider.create({
          data: {
            userId: existingUser.id,
            provider: "google",
            providerUserId: account.providerAccountId,
          },
        });
        user.id = existingUser.id;
        return true;
      }

      if (!activeStatus || !alumnoRole) {
        return "/auth/error?error=Configuration";
      }

      const [firstName, ...rest] = (user.name ?? user.email).split(" ");

      const createdUser = await db.user.create({
        data: {
          email: user.email,
          emailVerifiedAt: new Date(),
          statusId: activeStatus.id,
          profile: {
            create: {
              firstName: firstName || "Alumno",
              lastName: rest.join(" ") || "",
              avatarUrl: user.image ?? null,
            },
          },
          roles: { create: { roleId: alumnoRole.id } },
          authProviders: {
            create: { provider: "google", providerUserId: account.providerAccountId },
          },
        },
      });

      user.id = createdUser.id;
      return true;
    },

    jwt: async ({ token, user }) => {
      if (user?.id) {
        token.id = user.id;
        const roles = await db.userRole.findMany({
          where: { userId: user.id },
          include: { role: true },
        });
        token.roles = roles.map((r) => r.role.name);
      }
      return token;
    },
  },
});
