import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — AArtechus",
  description: "Learn about AArtechus — US's next-gen tech education and IT services company. Our mission, team, values, and journey.",
};

export default function AboutPage() {
  return <AboutClient />;
}
