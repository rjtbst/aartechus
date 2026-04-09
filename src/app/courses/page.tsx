import type { Metadata } from "next";
import CoursesPageClient from "./CoursesPageClient";

export const metadata: Metadata = {
  title: "All Courses — Full Stack, Data Science & Analytics",
  description: "Explore AArtechus's job-ready tech courses. Full Stack Development, Data Science & AI, and Data Analytics. Live, and Self-Paced options.",
};

export default function CoursesPage() {
  return <CoursesPageClient />;
}
