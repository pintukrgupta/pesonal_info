import type { Metadata } from "next";
import { BookOpen, FileText, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Notes, eBooks, and study material on Java, Spring Boot, and backend engineering from Pintu Kumar Gupta — coming soon.",
  alternates: { canonical: "/resources" },
};

const upcoming = [
  { icon: FileText, label: "Java & Spring Boot notes" },
  { icon: BookOpen, label: "Backend engineering eBooks" },
  { icon: GraduationCap, label: "System design study guides" },
];

export default function ResourcesPage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="section-container">
          <p className="section-label mb-2">Resources</p>
          <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-3">
            Notes &amp; <span className="gradient-text">Study Material</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mb-10">
            A place for the notes, eBooks, and study material I put together while learning and
            teaching backend engineering. Nothing published yet — here&apos;s what&apos;s planned.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {upcoming.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-[var(--radius)] border border-border bg-card"
              >
                <item.icon className="w-4 h-4 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href="mailto:pintukrgupta7@gmail.com?subject=Resources%20Notification"
            className="inline-flex items-center gap-2 px-4 py-2.5 mt-8 border border-border hover:border-primary/40 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Notify me when resources are published
          </a>
        </div>
      </section>
    </div>
  );
}
