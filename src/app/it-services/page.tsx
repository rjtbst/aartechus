import type { Metadata } from "next";
import ITServicesClient from "./ITServicesClient";

export const metadata: Metadata = {
  title: "IT Services — Web, Mobile, Cloud, AI & Cybersecurity",
  description: "Premium IT services from AArtechus: Web Development, Mobile Apps, Cloud & DevOps, AI/ML Solutions, Cybersecurity. 500+ projects delivered globally.",
};

export default function ITServicesPage() {
  return <ITServicesClient />;
}
