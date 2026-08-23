import type { Metadata } from "next";
import { Blog } from "@/components/sections/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on Java, Spring Boot, Kafka, Flink, and backend system design — from Pintu Kumar Gupta.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <Blog />
    </div>
  );
}
