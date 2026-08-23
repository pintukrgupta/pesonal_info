"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Services", href: "/services", id: null },
  { label: "Blog", href: "/blog", id: null },
  { label: "Contact", href: "/#contact", id: "contact" },
];

// Every section on the homepage, in document order — used so the scroll-spy
// never goes blank while passing through a section that has no direct nav link.
const PAGE_SECTION_ORDER = [
  "home",
  "about",
  "journey",
  "experience",
  "skills",
  "projects",
  "ai-productivity",
  "blog",
  "certifications",
  "freelancing",
  "contact",
];

const navSectionIds = new Set(navItems.map((item) => item.id).filter(Boolean));

// Maps every section id to the nearest preceding nav item's id, so scrolling
// through e.g. "skills" (no nav link) keeps "experience" highlighted instead
// of leaving the indicator stuck or blank.
const sectionToNavId = (() => {
  let lastNavId: string | null = null;
  const map: Record<string, string | null> = {};
  for (const id of PAGE_SECTION_ORDER) {
    if (navSectionIds.has(id)) lastNavId = id;
    map[id] = lastNavId;
  }
  return map;
})();

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = PAGE_SECTION_ORDER
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSection(sectionToNavId[visible[0].target.id] ?? null);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/#home"
            className="flex items-center gap-2.5"
            onClick={closeMobile}
          >
            <div className="w-9 h-9 rounded-md border border-primary/40 flex items-center justify-center font-mono text-sm font-medium text-primary">
              PK
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-medium tracking-tight">Pintu Kumar Gupta</div>
              <div className="text-xs text-muted-foreground font-mono">Backend Engineer</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm transition-colors rounded-md font-medium",
                  item.id && activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}

            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-md transition-colors font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm rounded-md font-medium transition-colors"
            >
              Let&apos;s Connect
            </Link>

            <button
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="section-container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={cn(
                  "px-3 py-2.5 text-sm rounded-md transition-colors font-medium",
                  item.id && activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-2 pt-2 border-t border-border">
              <a
                href="/resume.pdf"
                download
                onClick={closeMobile}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm border border-border rounded-md font-medium text-muted-foreground"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
              <Link
                href="/#contact"
                onClick={closeMobile}
                className="flex-1 py-2.5 bg-primary text-primary-foreground text-sm rounded-md font-medium text-center"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
