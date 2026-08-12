import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function CoursesLoading() {
  return (
    <Container className="py-10 sm:py-14">
      <Skeleton className="mb-2 h-9 w-64" />
      <Skeleton className="mb-8 h-5 w-40" />
      <Skeleton className="mb-8 h-11 w-full" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-lg border border-border p-4"
          >
            <Skeleton className="h-40 w-full rounded-md" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </Container>
  );
}
