"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Briefcase,
  Award,
  Rocket,
  Server,
  Brain,
  Target,
} from "lucide-react";
import { journeyMilestones } from "@/data";
import { cn, fadeUpVariant, staggerContainer } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-4 h-4" />,
  Code2: <Code2 className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
  Award: <Award className="w-4 h-4" />,
  Rocket: <Rocket className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Brain: <Brain className="w-4 h-4" />,
  Target: <Target className="w-4 h-4" />,
};

export function Journey() {
  return (
    <section id="journey" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Journey
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            From Student to <span className="gradient-text">Engineer</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Every step from IIIT Sonepat to building production systems for government platforms.
          </motion.p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line hidden md:block" />

          <div className="space-y-6">
            {journeyMilestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const isFuture = milestone.year === "Future";

              return (
                <motion.div
                  key={milestone.year + milestone.title}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.08}
                  className={cn(
                    "relative flex items-center gap-4",
                    "md:gap-0 md:justify-between",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "flex-1 md:flex-none md:w-5/12",
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left",
                      "pl-10 md:pl-0"
                    )}
                  >
                    <div
                      className={cn(
                        "p-4 rounded-[var(--radius)] border bg-card transition-colors duration-300",
                        isFuture ? "border-dashed border-border opacity-70" : "border-border card-hover"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-2 mb-1",
                          isLeft ? "md:justify-end" : "md:justify-start"
                        )}
                      >
                        <span
                          className={cn(
                            "text-xs font-mono font-medium px-2 py-0.5 rounded",
                            isFuture ? "bg-copper/15 text-copper-foreground" : "bg-primary/10 text-primary"
                          )}
                        >
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-medium text-sm mb-1">{milestone.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-background bg-background z-10 items-center justify-center">
                    <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                      {iconMap[milestone.icon]}
                    </div>
                  </div>

                  <div className="absolute left-0 top-4 w-8 h-8 rounded-full flex items-center justify-center md:hidden bg-primary/10 text-primary">
                    {iconMap[milestone.icon]}
                  </div>

                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
