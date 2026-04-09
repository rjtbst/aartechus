import type { Metadata } from "next";
import CentersClient from "./CentersClient";

export const metadata: Metadata = {
  title: "Skill Centres — Noida, Hyderabad & Pune",
  description: "Visit AArtechus skill centres in Noida, Hyderabad and Pune. State-of-the-art labs, live classes, and exclusive hiring drives. Learn face-to-face with top industry experts and jumpstart your tech career.",
};

export default function CentersPage() {
  return <CentersClient />;
}
