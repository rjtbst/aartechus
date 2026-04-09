import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — AArtechus",
  description: "Get in touch with AArtechus. Request a callback, start an IT project, or visit our skill centres.",
};

export default function ContactPage() {
  return <ContactClient />;
}
