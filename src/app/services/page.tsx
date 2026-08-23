import type { Metadata } from "next";
import { Freelancing } from "@/components/sections/Freelancing";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Backend architecture, API development, and systems consulting from Pintu Kumar Gupta — Java, Spring Boot, Kafka, Flink, and microservices.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Freelancing />
    </div>
  );
}
