import { Activity, Award, Bell, Heart } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/navigation";

export function RecentActivityCard({
  activity,
}: {
  activity: { id: string; eventType: string; description: string; createdAt: Date }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Activity className="size-4.5 text-gold" /> Actividad reciente
        </CardTitle>
      </CardHeader>
      <CardContent>
        {activity.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Todavía no hay actividad registrada.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {activity.map((item) => (
              <li key={item.id} className="text-sm">
                <span className="text-foreground">{item.description}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                    item.createdAt
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export function NotificationsPreviewCard({
  notifications,
}: {
  notifications: { id: string; title: string; isRead: boolean; createdAt: Date }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Bell className="size-4.5 text-gold" /> Últimas notificaciones
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2.5">
        {notifications.length === 0 ? (
          <p className="text-sm text-muted-foreground">Sin notificaciones todavía.</p>
        ) : (
          notifications.map((n) => (
            <div key={n.id} className="flex items-center justify-between gap-2 text-sm">
              <span className={n.isRead ? "text-muted-foreground" : "font-medium"}>
                {n.title}
              </span>
              {!n.isRead && <span className="size-1.5 shrink-0 rounded-full bg-gold" />}
            </div>
          ))
        )}
        <Link
          href="/notificaciones"
          className="mt-1 text-xs font-medium text-gold-foreground underline dark:text-gold"
        >
          Ver todas
        </Link>
      </CardContent>
    </Card>
  );
}

export function FavoriteCoursesCard({
  courses,
}: {
  courses: { id: string; slug: string; title: string; category: { name: string } }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Heart className="size-4.5 text-gold" /> Favoritos
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {courses.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Todavía no has marcado favoritos.
          </p>
        ) : (
          courses.map((c) => (
            <Link
              key={c.id}
              href={`/cursos/${c.slug}`}
              className="text-sm hover:text-gold-foreground"
            >
              {c.title}
            </Link>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export function CompletedCoursesCard({
  courses,
}: {
  courses: { id: string; course: { slug: string; title: string } }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Award className="size-4.5 text-gold" /> Cursos finalizados
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2.5">
        {courses.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Todavía no has terminado ningún curso.
          </p>
        ) : (
          courses.map((c) => (
            <div key={c.id} className="flex items-center justify-between text-sm">
              <Link
                href={`/cursos/${c.course.slug}`}
                className="hover:text-gold-foreground"
              >
                {c.course.title}
              </Link>
              <Progress value={100} className="w-20" />
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
