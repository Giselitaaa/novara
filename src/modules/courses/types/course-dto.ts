/**
 * Forma de datos que consume la tarjeta de curso. Refleja los campos
 * de `Course` (+ relaciones resueltas: nivel, categoría) relevantes
 * para una vista de catálogo, no el curso completo.
 */
export type CourseCardDTO = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  categoryName: string;
  categorySlug: string;
  levelLabel: string;
  durationMinutes: number | null;
  accessType: "gratis" | "premium";
  price: number | null;
};

export type CourseLessonDTO = {
  id: string;
  title: string;
  contentTypeKey: string;
  durationSeconds: number | null;
  isPreview: boolean;
};

export type CourseModuleDTO = {
  id: string;
  title: string;
  description: string | null;
  lessons: CourseLessonDTO[];
};

export type CourseResourceDTO = {
  id: string;
  title: string;
  resourceTypeLabel: string;
};

export type CourseQuestionDTO = {
  id: string;
  body: string;
  createdAt: Date;
  authorName: string;
  answers: { id: string; body: string; authorName: string; createdAt: Date }[];
};

export type CourseDetailDTO = CourseCardDTO & {
  description: string;
  bannerImageUrl: string | null;
  authorName: string;
  languageName: string;
  statusKey: string;
  ratingAverage: number;
  ratingCount: number;
  updatedContentAt: Date | null;
  objectives: string[];
  requirements: string[];
  modules: CourseModuleDTO[];
  resources: CourseResourceDTO[];
  questions: CourseQuestionDTO[];
  totalLessons: number;
};
