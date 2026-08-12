import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function CourseDetailLoading() {
  return (
    <div>
      <div className="border-b border-border bg-muted/40 py-10">
        <Container>
          <Skeleton className="mb-4 h-4 w-48" />
          <Skeleton className="mb-3 h-10 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
        </Container>
      </div>
      <Container className="grid grid-cols-1 gap-12 py-10 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-6">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
        <Skeleton className="h-80 w-full rounded-lg" />
      </Container>
    </div>
  );
}
