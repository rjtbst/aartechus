"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

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
            Aartechus is a career-focused platform providing end-to-end employment solutions — technical training, career development, staffing, and recruitment — connecting talent with real opportunities.
          </p>
        </div>

        {/* Courses — updated with all training domains */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-background/60 mb-4">
            Training Programs
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/courses/full-stack-development" className="text-background/70 hover:text-background text-sm transition-colors">
                Full Stack Development
              </Link>
            </li>
            <li>
              <Link href="/courses/data-science-ai" className="text-background/70 hover:text-background text-sm transition-colors">
                Data Science & AI
              </Link>
            </li>
            <li>
              <Link href="/courses/data-analytics" className="text-background/70 hover:text-background text-sm transition-colors">
                Data Analytics
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-background/70 hover:text-background text-sm transition-colors">
                Python Programming
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-background/70 hover:text-background text-sm transition-colors">
                Cybersecurity
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-background/70 hover:text-background text-sm transition-colors">
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
              contact@Aartechus.com
            </li>
            <li className="flex items-center gap-3 text-sm text-background/70">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              +91 85955 63221
            </li>
            <li className="flex items-start gap-3 text-sm text-background/70">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              Corporate Office - Sector 44, Gurugram
            </li>
          </ul>
        </div>
      </div>

      {/* ── NEW: Compliance disclaimer ── */}
      <div className="border-t border-background/10 mt-10 pt-6">
        <p className="text-background/25 text-xs leading-relaxed max-w-4xl">
          <strong className="text-background/35 font-medium">Important Disclosures:</strong>{" "}
          Income-based payment option is not a loan. Payments apply only when income exceeds the defined threshold.
          Not all applicants qualify for all payment options. No job placement is guaranteed.
          Employer partnerships provide access to opportunities, not guaranteed placement.
          Terms vary by program and agreement. Available for qualified applicants only.
        </p>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-background/30 text-sm">
          © Copyright 2026, All Rights Reserved
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