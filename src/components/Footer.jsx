"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">

    {/* Main footer */}
    <div className="container-main py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <path d="M8 6L16 2L24 6L24 18L16 22L8 18Z" fill="hsl(221, 83%, 53%)" />
                <path d="M8 14L16 10L24 14L24 26L16 30L8 26Z" fill="hsl(221, 83%, 70%)" opacity="0.7" />
              </svg>
            </div>
            <span className="text-lg font-display font-bold text-background">
              Aartechus
            </span>
          </div>
          <p className="text-background/50 text-sm leading-relaxed max-w-xs">
            Aartechus is a US-based career platform providing end-to-end employment solutions — technical bootcamps, career development, staffing, and recruitment — connecting talent with real opportunities since 2013.
          </p>
        </div>

        {/* Training Programs */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-background/60 mb-4">
            Bootcamps
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/courses/java-developer-ai" className="text-background/70 hover:text-background text-sm transition-colors">
                Java Developer + AI Bootcamp
              </Link>
            </li>
            <li>
              <Link href="/courses/data-engineer-ai" className="text-background/70 hover:text-background text-sm transition-colors">
                Data Engineer + AI Bootcamp
              </Link>
            </li>
            <li>
              <Link href="/courses/ai-developer-bootcamp" className="text-background/70 hover:text-background text-sm transition-colors">
                AI Developer Bootcamp
              </Link>
            </li>
            <li>
              <Link href="/courses/data-scientist-ai" className="text-background/70 hover:text-background text-sm transition-colors">
                Data Scientist + AI Bootcamp
              </Link>
            </li>
            <li>
              <Link href="/courses/python-programming" className="text-background/70 hover:text-background text-sm transition-colors">
                Python Programming
              </Link>
            </li>
            <li>
              <Link href="/courses/quality-assurance" className="text-background/70 hover:text-background text-sm transition-colors">
                Quality Assurance (QA)
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-background/60 mb-4">
            Company
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/about" className="text-background/70 hover:text-background text-sm transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/it-services" className="text-background/70 hover:text-background text-sm transition-colors">
                IT Services
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="text-background/70 hover:text-background text-sm transition-colors">
                Hiring Drives
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-background/70 hover:text-background text-sm transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-background/70 hover:text-background text-sm transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-background/60 mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-background/70">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              hello@aartechus.com
            </li>
            <li className="flex items-center gap-3 text-sm text-background/70">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              +1 307 998 3803
            </li>
            <li className="flex items-center gap-3 text-sm text-background/70">
              <span className="text-lg leading-none">💬</span>
              <a href="https://wa.me/13079983803" className="hover:text-background transition-colors">
                WhatsApp Us
              </a>
            </li>
          </ul>

          {/* Social / trust badges */}
          <div className="mt-6">
            <p className="text-background/40 text-xs mb-2 uppercase tracking-wider">Follow Us</p>
            <div className="flex gap-3">
              {[
                { label: "LI", href: "#", title: "LinkedIn" },
                { label: "TW", href: "#", title: "Twitter / X" },
                { label: "YT", href: "#", title: "YouTube" },
              ].map((s) => (
                <a key={s.label} href={s.href} title={s.title}
                  className="w-8 h-8 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/60 hover:text-background text-xs font-bold transition-all">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance disclaimer */}
      <div className="border-t border-background/10 mt-10 pt-6">
        <p className="text-background/25 text-xs leading-relaxed max-w-4xl">
          <strong className="text-background/35 font-medium">Important Disclosures:</strong>{" "}
          Income-based payment option is not a loan. Payments apply only when income exceeds the defined threshold.
          Not all applicants qualify for all payment options. Career outcomes are not guaranteed.
          Employer partnerships provide access to opportunities, not guaranteed placement.
          Salary figures represent average US market ranges and are not guarantees of individual earnings.
          Terms vary by program and agreement. Available for qualified applicants only.
        </p>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-background/30 text-sm">
          © 2013–2026 Aartechus. All Rights Reserved. United States.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-background/30 hover:text-background/60 text-sm transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="text-background/30 hover:text-background/60 text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-background/30 hover:text-background/60 text-sm transition-colors">
            Refund Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;