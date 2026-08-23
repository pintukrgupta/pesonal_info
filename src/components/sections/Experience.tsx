"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronDown, ChevronUp, ArrowUpRight, Briefcase } from "lucide-react";
import { experience } from "@/data";
import { cn, fadeUpVariant, staggerContainer } from "@/lib/utils";

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>("vassarlabs-sde");

  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            Work History &amp; <span className="gradient-text">Impact</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-xl">
            From intern to full-time engineer — building systems that handle real government data at scale.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-3 bottom-3 w-px timeline-line hidden md:block" />

          <div className="space-y-4">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.1}
              >
                <div className="md:pl-14 relative">
                  <div className="absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 border-background bg-primary hidden md:block z-10" />

                  <div className="rounded-[var(--radius)] border border-border bg-card card-hover transition-colors overflow-hidden">
                    <button
                      className="w-full text-left p-5 md:p-6"
                      onClick={() => setExpanded((prev) => (prev === job.id ? null : job.id))}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-md border border-primary/30 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-medium text-base leading-tight">{job.role}</h3>
                              {job.current && (
                                <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-copper/15 text-copper-foreground border border-copper/30">
                                  Current
                                </span>
                              )}
                              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground border border-border">
                                {job.type}
                              </span>
                            </div>
                            <div className="text-sm font-medium text-muted-foreground mt-0.5">
                              {job.company}
                            </div>
                            <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {job.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="shrink-0 text-muted-foreground mt-1">
                          {expanded === job.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                    </button>

                    {expanded === job.id && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border pt-4">
                        <div className="flex items-center gap-2 mb-4 p-3 rounded-md bg-secondary border border-border">
                          <ArrowUpRight className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-xs text-muted-foreground">
                            <span className="text-primary font-medium">Impact: </span>
                            {job.impact}
                          </span>
                        </div>

                        <div className="space-y-2 mb-5">
                          {job.highlights.map((point, i) => (
                            <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span className="leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                            Technologies
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {job.technologies.map((tech) => (
                              <span
                                key={tech}
                                className={cn(
                                  "px-2 py-0.5 text-xs font-mono rounded border",
                                  "bg-primary/10 text-primary border-primary/20"
                                )}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
