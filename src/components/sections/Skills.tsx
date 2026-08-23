"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Zap, Database, Settings, Cloud, Code2 } from "lucide-react";
import { skillCategories } from "@/data";
import { cn, fadeUpVariant, staggerContainer } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Settings: <Settings className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Code2: <Code2 className="w-4 h-4" />,
};

const fullStack = Array.from(
  new Set(skillCategories.flatMap((cat) => cat.skills.map((skill) => skill.name)))
);

function SkillBar({ name, level, years }: { name: string; level: number; years: string }) {
  return (
    <motion.div variants={fadeUpVariant} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">{years}</span>
          <span className="text-xs font-mono text-primary tabular-nums">{level}%</span>
        </div>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === activeTab) ?? skillCategories[0];

  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            Technical <span className="gradient-text">Proficiency</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-xl">
            3+ years across the full backend stack — from REST APIs to distributed streaming systems.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-1.5"
          >
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.id}
                variants={fadeUpVariant}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-[var(--radius)] border text-left transition-colors duration-200",
                  activeTab === cat.id
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                )}
              >
                <div
                  className={cn(
                    "p-1.5 rounded-md",
                    activeTab === cat.id ? "bg-primary-foreground/15" : "bg-secondary"
                  )}
                >
                  {iconMap[cat.icon]}
                </div>
                <div>
                  <div className="font-medium text-sm">{cat.category}</div>
                  <div
                    className={cn(
                      "text-xs",
                      activeTab === cat.id ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    {cat.description}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 p-6 rounded-[var(--radius)] border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-md bg-primary/10 text-primary">
                {iconMap[activeCategory.icon]}
              </div>
              <div>
                <h3 className="font-medium">{activeCategory.category}</h3>
                <p className="text-xs text-muted-foreground">{activeCategory.description}</p>
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-5"
            >
              {activeCategory.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} years={skill.years} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 p-5 rounded-[var(--radius)] border border-border bg-card"
        >
          <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">
            Full Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {fullStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono bg-secondary text-secondary-foreground border border-border rounded-md hover:border-primary/30 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
