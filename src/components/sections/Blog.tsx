"use client";

import { motion } from "framer-motion";
import { Coffee, Layout, Zap, Brain, TrendingUp, Cloud, ArrowRight, Rss } from "lucide-react";
import { blogCategories } from "@/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Brain: <Brain className="w-4 h-4" />,
  TrendingUp: <TrendingUp className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
};

const upcomingTopics = [
  "Building a Kafka + Flink real-time pipeline from scratch",
  "Spring Boot microservices: lessons from production",
  "Cassandra schema design for time-series data",
  "How I use Claude Code to accelerate backend architecture",
  "IIIT Sonepat to SDE: what I wish I knew earlier",
  "Docker on Ubuntu: production deployment checklist",
];

export function Blog() {
  return (
    <section id="blog" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Blog
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            Writing About <span className="gradient-text">Backend Engineering</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-xl">
            Articles on Java, distributed systems, AI tools for developers, and real lessons from building production software.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex items-center gap-3 p-4 rounded-[var(--radius)] border border-primary/25 bg-primary/5 mb-10"
        >
          <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
            <Rss className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-medium">Blog launching soon</span>
            <span className="text-xs text-muted-foreground ml-2">
              — first articles are in progress. Topics listed below.
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <motion.h3
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
            >
              Categories
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {blogCategories.map((cat, index) => (
                <motion.div
                  key={cat.slug}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.08}
                  className="p-4 rounded-[var(--radius)] border border-border bg-card card-hover transition-colors cursor-default"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-secondary text-muted-foreground">
                      {iconMap[cat.icon]}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                      0 posts
                    </span>
                  </div>
                  <div className="font-medium text-sm">{cat.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{cat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
            >
              Upcoming Articles
            </motion.h3>
            <div className="space-y-2.5">
              {upcomingTopics.map((topic, index) => (
                <motion.div
                  key={topic}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.06}
                  className="flex items-start gap-3 p-3.5 rounded-md border border-border bg-card"
                >
                  <span className="text-xs font-mono text-primary font-medium shrink-0 mt-0.5">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground">{topic}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              custom={0.6}
              className="mt-5"
            >
              <a
                href="mailto:pintukrgupta7@gmail.com?subject=Blog%20Notification"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border hover:border-primary/40 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Rss className="w-3.5 h-3.5" />
                Notify me when articles go live
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
