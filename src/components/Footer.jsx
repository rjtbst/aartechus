"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* Centres */}
    {/* <div className="border-b border-background/10">
      <div className="container-main py-12 grid md:grid-cols-3 gap-8">
        {[
          {
            city: "Pune Skill Centre",
            courses: ["Full Stack Development", "Data Analytics"],
            address: "5th Floor, Aria Tower, Baner, Pune 411045",
          },
          {
            city: "Noida Skill Centre",
            courses: ["Full Stack Development", "Data Analytics"],
            address: "2nd Floor, D69, Sector 2, Noida, UP",
          },
          {
            city: "Hyderabad Skill Centre",
            courses: ["Full Stack Development", "Data Analytics"],
            address: "23-25, 2nd Floor, Gachibowli, Hyderabad 500032",
          },
        ].map((c) => (
          <div key={c.city}>
            <h4 className="font-display font-semibold text-sm text-background/60 mb-2">
              {c.city}
            </h4>
            <p className="text-xs font-semibold text-background/40 uppercase tracking-wider mb-1">
              Courses Offered
            </p>
            {c.courses.map((co) => (
              <p key={co} className="text-sm text-background/70">
                {co}
              </p>
            ))}
            <p className="text-xs text-background/40 mt-2">{c.address}</p>
          </div>
        ))}
      </div>
    </div> */}

    {/* Main footer */}
    <div className="container-main py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <path
                  d="M8 6L16 2L24 6L24 18L16 22L8 18Z"
                  fill="hsl(221, 83%, 53%)"
                />
                <path
                  d="M8 14L16 10L24 14L24 26L16 30L8 26Z"
                  fill="hsl(221, 83%, 70%)"
                  opacity="0.7"
                />
              </svg>
            </div>
            <span className="text-lg font-display font-bold text-background">
              Aartechus
            </span>
          </div>

          <p className="text-background/50 text-sm leading-relaxed max-w-xs">
            Aartechus is an ed-tech platform that provides comprehensive tech
            training with industry-relevant curriculum and placement support.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-background/60 mb-4">
            Certified Courses
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/courses" className="text-background/70 hover:text-background text-sm transition-colors">
                Full Stack Development
              </Link>
            </li>
            <li>
              <Link href="/courses/data-science" className="text-background/70 hover:text-background text-sm transition-colors">
                Data Science & AI
              </Link>
            </li>
            <li>
              <Link href="/courses/backend" className="text-background/70 hover:text-background text-sm transition-colors">
                Backend Development
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

      {/* Bottom */}
      <div className="border-t border-background/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
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