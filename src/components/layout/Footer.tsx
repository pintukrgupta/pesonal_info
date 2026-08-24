import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/data";

const footerLinks = {
  Work: [
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Certifications", href: "/#certifications" },
  ],
  Services: [
    { label: "Freelancing", href: "/services" },
    { label: "Backend Development", href: "/services" },
    { label: "System Design", href: "/services" },
  ],
  Connect: [
    { label: "About Me", href: "/#about" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/#contact" },
    { label: "Resume", href: "/resume.pdf" },
  ],
};

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-12 md:py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/#home" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-9 h-9 rounded-md border border-primary/40 flex items-center justify-center font-mono text-sm font-medium text-primary">
                PK
              </div>
              <span className="font-medium text-sm">Pintu Kumar Gupta</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Backend Software Engineer building real-time data systems and microservices with Java &amp; Spring Boot.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Pintu Kumar Gupta. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Built with</span>
            <span className="code-text">Next.js</span>
            <span>+</span>
            <span className="code-text">TypeScript</span>
            <span>+</span>
            <span className="code-text">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
