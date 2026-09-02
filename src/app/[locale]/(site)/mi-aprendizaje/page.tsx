import {
  Award,
  BookOpen,
  ClipboardCheck,
  Clock,
  GraduationCap,
  History,
  Trophy,
} from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { BadgesCard } from "@/components/dashboard/badges-card";
import { ContinueLearningCard } from "@/components/dashboard/continue-learning-card";
import {
  CompletedCoursesCard,
  FavoriteCoursesCard,
  NotificationsPreviewCard,
  RecentActivityCard,
} from "@/components/dashboard/dashboard-lists";
import { NextObjectivesCard } from "@/components/dashboard/next-objectives-card";
import { ReadinessCard } from "@/components/dashboard/readiness-card";
import { StatStrip } from "@/components/dashboard/stat-strip";
import { StreakXPCard } from "@/components/dashboard/streak-xp-card";
import { StudyCalendar } from "@/components/dashboard/study-calendar";
import { WeeklyGoalCard } from "@/components/dashboard/weekly-goal-card";
import { WeeklySummaryCard } from "@/components/dashboard/weekly-summary-card";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { Container } from "@/components/layout/container";
import { CourseCard } from "@/components/marketing/course-card";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { requireSession } from "@/lib/require-session";
import { getRecommendedCourses } from "@/modules/courses/server/recommendation-queries";
import { getCurrentLevel, getUserBadges } from "@/modules/gamification/server/actions";
import { getCourseReadinessBySlug } from "@/modules/readiness/server/queries";
import { getNextObjectives } from "@/modules/users/server/objectives-queries";
import { getProfileByUserId, getStudentOverview } from "@/modules/users/server/queries";
import { getWeeklySummary } from "@/modules/users/server/weekly-summary-queries";

export const metadata: Metadata = { title: "Mi aprendizaje" };

export default async function StudentDashboardPage() {
  const session = await requireSession();
  if (!session?.user?.id) redirect("/auth/iniciar-sesion?callbackUrl=/mi-aprendizaje");

  const [profile, overview, level, recommended, badges, objectives, weeklySummary] =
    await Promise.all([
      getProfileByUserId(session.user.id),
      getStudentOverview(session.user.id),
      getCurrentLevel(session.user.id),
      getRecommendedCourses(session.user.id, 3),
      getUserBadges(session.user.id),
      getNextObjectives(session.user.id),
      getWeeklySummary(session.user.id),
    ]);

  if (!profile?.profile) redirect("/auth/iniciar-sesion");

  // Readiness real de la preparación en curso (rendimiento vs progreso).
  const continueSlug = overview.continueCourse?.course.slug;
  const readiness = continueSlug
    ? await getCourseReadinessBySlug(session.user.id, continueSlug)
    : null;

  return (
    <Container className="flex flex-col gap-8 py-10 sm:py-14">
      <WelcomeBanner firstName={profile.profile.firstName} />

      <StatStrip
        items={[
          {
            icon: Clock,
            label: "Tiempo total estudiado",
            value: `${Math.round(overview.totalMinutesStudied / 60)} h`,
          },
          {
            icon: BookOpen,
            label: "Cursos en curso",
            value: String(overview.inProgressCourses.length),
          },
          {
            icon: GraduationCap,
            label: "Cursos finalizados",
            value: String(overview.completedCourses.length),
          },
          {
            icon: Award,
            label: "Certificados",
            value: String(overview.certificates.length),
          },
          {
            icon: ClipboardCheck,
            label: "Exámenes realizados",
            value: String(overview.examsTaken),
          },
          {
            icon: ClipboardCheck,
            label: "Nota media",
            value:
              overview.averageScore !== null
                ? `${overview.averageScore.toFixed(0)}%`
                : "—",
          },
        ]}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <NextObjectivesCard objectives={objectives} />
        <WeeklySummaryCard summary={weeklySummary} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContinueLearningCard course={overview.continueCourse} />
        </div>
        <StreakXPCard
          currentStreak={overview.streak.current}
          xp={level.xp}
          levelName={level.current?.name ?? "Novato"}
          nextLevelXp={level.next?.minXp ?? null}
        />
      </div>

      {readiness && (
        <div className="grid grid-cols-1 gap-6">
          <ReadinessCard data={readiness} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <WeeklyGoalCard
          weekMinutes={overview.weekMinutesStudied}
          goalMinutes={profile.profile.weeklyGoalMinutes}
        />
        <Card className="lg:col-span-2">
          <CardContent className="pt-6">
            <StudyCalendar days={overview.studyCalendar} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <RecentActivityCard activity={overview.recentActivity} />
        <NotificationsPreviewCard notifications={overview.recentNotifications} />
        <FavoriteCoursesCard courses={overview.favoriteCourses} />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link
          href="/mi-aprendizaje/historial"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-foreground hover:underline dark:text-gold"
        >
          <History className="size-4" /> Ver historial completo de aprendizaje
        </Link>
        <Link
          href="/ranking"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-foreground hover:underline dark:text-gold"
        >
          <Trophy className="size-4" /> Ver ranking
        </Link>
      </div>

      <CompletedCoursesCard courses={overview.completedCourses} />

      <BadgesCard
        badges={badges.map((item) => ({
          id: item.badgeId,
          awardedAt: item.awardedAt,
          badge: {
            name: item.badge.name,
            criteriaDescription: item.badge.criteriaDescription,
          },
        }))}
      />

      {recommended.length > 0 && (
        <section>
          <h2 className="mb-4 font-display text-xl tracking-tighter">
            Recomendado para ti
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {recommended.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
