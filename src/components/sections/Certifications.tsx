"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Certifications
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
Certifications &amp; <span className="gradient-text">Credentials</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-md mx-auto">
            Credentials in cloud, AI, and software development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {certifications.map((cert, index) => {
            const CardTag = cert.url ? motion.a : motion.div;
            const linkProps = cert.url
              ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardTag
                key={cert.id}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.1}
                className="p-5 rounded-[var(--radius)] border border-border bg-card card-hover transition-colors block"
                {...linkProps}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-md border border-primary/30 bg-primary/10 text-primary font-mono text-xs font-medium shrink-0">
                    {cert.badge}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Award className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono">{cert.year}</span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-medium text-sm leading-snug">{cert.title}</h3>
                  {cert.url && (
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  )}
                </div>
                <div className="text-xs text-muted-foreground mb-3">{cert.issuer}</div>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardTag>
            );
          })}
        </div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Certifications marked with a link icon are verifiable — the rest are available on request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
