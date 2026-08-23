"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Server,
  Layers,
  Zap,
  Database,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { freelancingServices } from "@/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
};

const processSteps = [
  { step: "01", title: "Discovery Call", description: "Understand your requirements, constraints, and goals" },
  { step: "02", title: "Proposal & Scope", description: "Clear timeline, deliverables, and pricing — no surprises" },
  { step: "03", title: "Build & Iterate", description: "Agile delivery with regular updates and demo sessions" },
  { step: "04", title: "Deploy & Handoff", description: "Clean code, documentation, and knowledge transfer" },
];

export function Freelancing() {
  return (
    <section id="freelancing" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Services
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            Freelance Backend <span className="gradient-text">Consulting</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-xl">
            Need a backend built right? I bring 3+ years of production-grade Java engineering to your project.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {freelancingServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={index * 0.08}
              className="p-5 rounded-[var(--radius)] border border-border bg-card card-hover transition-colors"
            >
              <div className="p-2.5 rounded-md bg-primary/10 text-primary w-fit mb-4">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-medium text-sm mb-2">{service.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono bg-secondary text-secondary-foreground border border-border rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="p-6 rounded-[var(--radius)] border border-border bg-card"
          >
            <h3 className="font-medium mb-4">What You Get</h3>
            <div className="space-y-3">
              {[
                "Production-quality code with tests",
                "Clear documentation and API specs",
                "Deployable and containerized (Docker)",
                "Performance-conscious architecture",
                "Regular progress updates",
                "Post-delivery support window",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0.1}
            className="p-6 rounded-[var(--radius)] border border-border bg-card"
          >
            <h3 className="font-medium mb-4">How It Works</h3>
            <div className="space-y-4">
              {processSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-3">
                  <span className="text-xs font-mono font-medium text-primary shrink-0 mt-0.5 w-6">
                    {step.step}
                  </span>
                  <div>
                    <div className="text-sm font-medium leading-tight">{step.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="rounded-[var(--radius)] border border-primary/25 bg-primary/5 p-8 md:p-10 text-center"
        >
          <h3 className="font-display text-2xl font-medium mb-2">Have a project in mind? Let&apos;s talk.</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6 text-sm">
            Tell me about your backend challenge — I&apos;ll help you scope it and build something reliable.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-medium transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:pintukrgupta7@gmail.com?subject=Freelance%20Project%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/40 rounded-md font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Email Directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
