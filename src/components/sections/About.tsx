"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, MapPin, Mail, Github, Linkedin, BookOpen, Code2 } from "lucide-react";
import { personalInfo, education } from "@/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const highlights = [
  { label: "Current Role", value: "Software Engineer", sub: "VassarLabs IT Solutions" },
  { label: "Education", value: "B.Tech CSE", sub: "IIIT Sonepat — 8.34 CGPA" },
  { label: "Location", value: "Hyderabad", sub: "India" },
  { label: "Focus", value: "Backend & Streaming", sub: "Java · Spring Boot · Kafka" },
];

export function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            About
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            A Backend Engineer Who Builds
            <br />
            <span className="gradient-text">Things That Matter</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5"
          >
            <motion.p variants={fadeUpVariant} className="text-muted-foreground leading-relaxed">
              I&apos;m a backend software engineer at{" "}
              <span className="text-foreground font-medium">VassarLabs IT Solutions</span>, where I
              build real-time data processing systems for state government platforms across India.
              My daily work involves Kafka event streams, Apache Flink pipelines, Apache Storm
              topologies, and Spring Boot microservices running on production Ubuntu servers.
            </motion.p>

            <motion.p
              variants={fadeUpVariant}
              custom={0.1}
              className="text-muted-foreground leading-relaxed"
            >
              I graduated from{" "}
              <span className="text-foreground font-medium">IIIT Sonepat</span> in 2023 with a
              B.Tech in Computer Science (CGPA: 8.34/10). I joined VassarLabs as an intern and was
              promoted to Software Engineer after six months — building User Management systems and
              contributing to Forest Fire simulation modules.
            </motion.p>

            <motion.p
              variants={fadeUpVariant}
              custom={0.2}
              className="text-muted-foreground leading-relaxed"
            >
              What drives me is building systems that{" "}
              <span className="text-foreground font-medium">process data at scale</span> — not just
              making things work, but making them reliable. I hold Oracle Cloud certifications in AI
              Foundations and Generative AI Professional (2025), and I actively use AI tools to
              accelerate engineering decisions, debugging, and documentation.
            </motion.p>

            <motion.p
              variants={fadeUpVariant}
              custom={0.3}
              className="text-muted-foreground leading-relaxed"
            >
              Outside work, I&apos;m interested in system design, distributed architectures, and how
              AI is reshaping the way engineers build software. I&apos;m expanding into freelance
              consulting for startups needing scalable backend systems.
            </motion.p>

            <motion.div variants={fadeUpVariant} custom={0.4} className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            <motion.div
              variants={fadeUpVariant}
              className="flex items-center gap-4 p-4 rounded-[var(--radius)] border border-border bg-card"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border shrink-0">
                <Image src="/pintu.png" alt="Pintu Kumar Gupta" fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <div className="font-medium text-sm">{personalInfo.name}</div>
                <div className="text-xs text-muted-foreground">{personalInfo.role}</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs text-primary">Available for work</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUpVariant}
                  custom={i * 0.08}
                  className="p-4 rounded-[var(--radius)] border border-border bg-card card-hover"
                >
                  <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-medium text-sm leading-tight">{item.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUpVariant}
              custom={0.4}
              className="p-5 rounded-[var(--radius)] border border-primary/25 bg-primary/5"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-sm mb-0.5">{education.degree}</div>
                  <div className="text-xs text-muted-foreground mb-2">{education.institution}</div>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-primary">
                      <BookOpen className="w-3.5 h-3.5" />
                      CGPA: {education.cgpa}
                    </span>
                    <span className="text-muted-foreground">{education.period}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {education.coursework.slice(0, 4).map((course) => (
                      <span
                        key={course}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary text-secondary-foreground border border-border"
                      >
                        {course}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary text-muted-foreground border border-border">
                      +{education.coursework.length - 4} more
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              custom={0.5}
              className="p-4 rounded-[var(--radius)] border border-border bg-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Currently Focused On</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Distributed Systems",
                  "Event-Driven Architecture",
                  "Cloud-Native Apps",
                  "AI-Assisted Dev",
                  "Freelance Consulting",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 text-xs rounded-full border border-border text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
