import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blogs — AArtechus",
  description: "Blogs — US's next-gen tech education and IT services company. Our mission, team, values, and journey.",
};

export default function BlogPage() {
  return <BlogClient />;
}
