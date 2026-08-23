"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";
import { aiTools } from "@/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

export function AIProductivity() {
  return (
    <section id="ai-productivity" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Engineering &amp; AI
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            Engineering with <span className="gradient-text">AI Tools</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-xl">
            AI helps me move faster, but engineering decisions remain mine. Here&apos;s how these tools
            fit into my daily development workflow.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={index * 0.1}
              className="p-6 rounded-[var(--radius)] border border-border bg-card card-hover transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-mono text-sm font-medium shrink-0">
                  {tool.logo}
                </div>
                <div>
                  <h3 className="font-medium text-sm">{tool.name}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Zap className="w-3 h-3 text-primary" />
                    <span className="text-[10px] text-primary font-medium">Active in workflow</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.description}</p>

              <div className="mt-auto space-y-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Use cases
                </div>
                {tool.uses.map((use) => (
                  <div key={use} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{use}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 p-5 rounded-[var(--radius)] border border-border bg-secondary/40"
        >
          <div className="font-medium text-sm mb-1">AI-enabled development is a skill, not just a shortcut</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            I treat AI tools as senior pair programmers — asking them to challenge assumptions, review
            architecture decisions, and catch edge cases I might miss. This makes me a better engineer,
            not a dependent one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
