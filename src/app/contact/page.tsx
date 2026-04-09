import type { Metadata } from "next";
import { Suspense } from "react";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — AArtechus",
  description: "Get in touch with AArtechus. Request a callback, start an IT project, or visit our skill centres.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactClient />
    </Suspense>
  );
}