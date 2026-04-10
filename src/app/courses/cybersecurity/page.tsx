import type { Metadata } from "next";
import CourseDetailPage from "@/components/ui/CourseDetailPage";
import type { CourseDetail } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Cybersecurity Course — Ethical Hacking & Defense",
  description: "Learn ethical hacking, VAPT, network security, and SOC operations. 6-month program with CEH & CompTIA exam prep and placement support.",
};

const course: CourseDetail = {
  title: "Cybersecurity",
  subtitle: "Ethical Hacking & Defense",
  badge: "HIGH DEMAND",
  badgeColor: "badge-green",
  color: "from-green-600 to-emerald-500",
  emoji: "🛡️",
  duration: "6 Months",
  students: "2,500+",
  rating: 4.8,
  reviews: 720,
  fee: "₹64,999",
  emi: "₹3,400/mo",
  level: "Beginner to Advanced",
  nextBatch: "May 12, 2026",
  overview:
    "Cybersecurity is the fastest-growing field in tech with a global talent shortage of 3.5 million professionals. This program takes you from networking fundamentals to advanced penetration testing, VAPT, network defense, and SOC operations. You'll work in real lab environments, build a hacking portfolio, and prepare for globally recognized certifications like CEH and CompTIA Security+.",
  whatYouLearn: [
    "Networking fundamentals: TCP/IP, DNS, HTTP",
    "Linux & command line for security",
    "Ethical hacking methodology & phases",
    "Reconnaissance & OSINT techniques",
    "Vulnerability assessment & penetration testing (VAPT)",
    "Web application security (OWASP Top 10)",
    "Network security & firewall configuration",
    "SOC operations & incident response",
    "Malware analysis basics",
    "CEH & CompTIA Security+ exam preparation",
  ],
  curriculum: [
    { module: "Networking & Linux Foundations", topics: ["OSI & TCP/IP model", "IP addressing & subnetting", "DNS, HTTP, FTP protocols", "Linux terminal basics", "Bash scripting for security", "Wireshark packet analysis"], weeks: "Weeks 1–4" },
    { module: "Ethical Hacking Fundamentals", topics: ["Hacking methodology (5 phases)", "Footprinting & reconnaissance", "OSINT tools (Maltego, Shodan)", "Scanning with Nmap", "Enumeration techniques", "Vulnerability scanning (Nessus)"], weeks: "Weeks 5–8" },
    { module: "Exploitation & Post-Exploitation", topics: ["Metasploit framework", "Exploiting CVEs", "Password attacks (Hashcat, John)", "Privilege escalation", "Maintaining access", "Covering tracks"], weeks: "Weeks 9–12" },
    { module: "Web Application Security", topics: ["OWASP Top 10", "SQL injection", "XSS & CSRF", "Burp Suite usage", "Authentication attacks", "IDOR & broken access control"], weeks: "Weeks 13–16" },
    { module: "Network Defense & SOC", topics: ["Firewall & IDS/IPS setup", "SIEM with Splunk", "Log analysis & threat hunting", "Incident response playbook", "Digital forensics basics", "Blue team operations"], weeks: "Weeks 17–20" },
    { module: "VAPT & Certifications", topics: ["VAPT methodology", "Report writing", "CEH exam prep", "CompTIA Security+ prep", "Capture The Flag (CTF)", "Career roadmap"], weeks: "Weeks 21–24" },
  ],
  projects: [
    { title: "Full Penetration Test Report", desc: "Complete VAPT engagement on a vulnerable VM (HackTheBox/TryHackMe) with professional report.", tech: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite", "Nessus"] },
    { title: "Web App Security Audit", desc: "OWASP Top 10 assessment of a deliberately vulnerable web app (DVWA) with remediation guide.", tech: ["Burp Suite", "OWASP ZAP", "SQLmap", "DVWA"] },
    { title: "SOC Incident Response", desc: "Simulated incident: detect, contain, and remediate a ransomware attack using Splunk SIEM.", tech: ["Splunk", "Wireshark", "Volatility", "MITRE ATT&CK"] },
    { title: "Network Defense Lab", desc: "Configure a firewall, IDS, and VPN on a virtualized network and document the security architecture.", tech: ["pfSense", "Snort", "OpenVPN", "VirtualBox"] },
  ],
  mentors: [
    { name: "Vikram Singh", company: "CERT-In", role: "Senior Security Analyst", exp: "10 years" },
    { name: "Ananya Roy", company: "Deloitte", role: "Penetration Tester", exp: "7 years" },
    { name: "Nikhil Bhatia", company: "IBM Security", role: "SOC Lead", exp: "8 years" },
    { name: "Pooja Malhotra", company: "PwC", role: "Cybersecurity Consultant", exp: "6 years" },
  ],
  placementStats: [
    { label: "Placement Rate", value: "88%", color: "text-green-400" },
    { label: "Average Package", value: "₹10 LPA", color: "text-purple-400" },
    { label: "Highest Package", value: "₹22 LPA", color: "text-orange-400" },
    { label: "Students Placed", value: "2K+", color: "text-blue-400" },
  ],
  faqs: [
    { q: "Is ethical hacking legal?", a: "Yes — ethical hacking (also called penetration testing) is legal when done with written permission. Our labs use controlled, virtualized environments specifically built for practice." },
    { q: "Do I need a technical background?", a: "Basic computer knowledge is sufficient. We start from networking fundamentals and build up progressively. Many of our students come from non-CS backgrounds." },
    { q: "Which certifications will I be prepared for?", a: "CEH (Certified Ethical Hacker) and CompTIA Security+ — two of the most recognized certifications in the cybersecurity industry globally." },
    { q: "What jobs can I get after this course?", a: "Ethical Hacker, Penetration Tester, Security Analyst, SOC Analyst, Vulnerability Analyst, Cybersecurity Consultant, and Information Security Engineer." },
  ],
};

export default function CybersecurityPage() {
  return <CourseDetailPage course={course} />;
}