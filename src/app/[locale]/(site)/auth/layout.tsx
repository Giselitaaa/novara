import { Container } from "@/components/layout/container";
import { SealMark } from "@/components/layout/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex min-h-[calc(100vh-88px)] items-center justify-center py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <SealMark className="size-8 text-gold" />
        </div>
        <div className="rounded-xl border border-border bg-card p-8 shadow-lifted sm:p-10">
          {children}
        </div>
      </div>
    </Container>
  );
}
