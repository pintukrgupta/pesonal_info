"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Server, Zap, Layers, Settings, Globe, BarChart2, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/data";
import { cn, fadeUpVariant, staggerContainer } from "@/lib/utils";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

const categoryIcons: Record<string, React.ReactNode> = {
  "Backend Systems": <Server className="w-4 h-4" />,
  "Streaming Systems": <Zap className="w-4 h-4" />,
  "Microservices": <Layers className="w-4 h-4" />,
  "DevOps Tools": <Settings className="w-4 h-4" />,
  "Web Apps": <Globe className="w-4 h-4" />,
  "Data Analysis": <BarChart2 className="w-4 h-4" />,
};

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const { featuredProjects, otherProjects } = useMemo(() => {
    const filtered = projects.filter((p) => activeFilter === "All" || p.category === activeFilter);
    return {
      featuredProjects: filtered.filter((p) => p.featured),
      otherProjects: filtered.filter((p) => !p.featured),
    };
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Projects
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            Production Systems &amp; <span className="gradient-text">Side Projects</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-xl">
            From government-scale data platforms to personal experiments — each one solving a real problem.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-md text-sm font-medium border transition-colors duration-200",
                activeFilter === cat
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {featuredProjects.length > 0 && (
          <div className="space-y-4 mb-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.1}
                className="rounded-[var(--radius)] border border-border bg-card card-hover transition-colors overflow-hidden"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-md bg-primary/10 text-primary shrink-0">
                        {categoryIcons[project.category] ?? <Server className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-medium text-base">{project.title}</h3>
                          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-border text-muted-foreground">
                            {project.status}
                          </span>
                          {project.highlight && (
                            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-copper/15 text-copper-foreground border border-copper/30">
                              {project.highlight}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md border border-border text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => setExpanded((p) => (p === project.id ? null : project.id))}
                        className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {expanded === project.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {project.tech.length >= 3 && (
                    <div className="mt-4 max-w-sm">
                      <ArchitectureDiagram nodes={project.tech.slice(0, 3)} />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground border border-border rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {expanded === project.id && (
                  <div className="border-t border-border p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-secondary/40">
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                        Problem
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.08}
                className="rounded-[var(--radius)] border border-border bg-card p-5 card-hover transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-md bg-secondary text-muted-foreground">
                    {categoryIcons[project.category] ?? <Server className="w-4 h-4" />}
                  </div>
                  <div className="flex gap-1.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-medium text-sm mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono bg-secondary text-secondary-foreground border border-border rounded"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
