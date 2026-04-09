import type { Metadata } from "next";
import JobsClient from "./JobsClient";

export const metadata: Metadata = {
  title: "Jobs & Hiring Drives — AArtechus",
  description: "Attend free hiring drives and find tech jobs at top companies. 60+ drives monthly. Completely free for all candidates.",
};

export default function JobsPage() {
  return <JobsClient />;
}
