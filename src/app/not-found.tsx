import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-16">
      <div className="section-container text-center py-20">
        <p className="section-label mb-4">404</p>
        <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-3">
          This page doesn&apos;t exist
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you&apos;re looking for was moved, renamed, or never existed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
