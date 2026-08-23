"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data";
import { fadeUpVariant } from "@/lib/utils";

const techStack = [
  "Java",
  "Spring Boot",
  "Kafka",
  "Apache Flink",
  "PostgreSQL",
  "Cassandra",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = personalInfo.roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % personalInfo.roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting ? prev.slice(0, -1) : role.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 40 : 65
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />

      <div className="section-container w-full relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Open to new opportunities
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-3 text-balance"
            >
              Pintu Kumar
              <br />
              <span className="gradient-text">Gupta</span>
            </motion.h1>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="h-7 mb-5"
            >
              <span className="text-lg sm:text-xl text-primary font-mono font-medium typewriter-cursor">
                {displayText}
              </span>
            </motion.div>

            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium transition-colors"
              >
                View My Work
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-primary/40 rounded-md text-sm font-medium transition-colors"
              >
                Let&apos;s Connect
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="flex flex-wrap gap-1.5 mb-10"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-secondary text-secondary-foreground border border-border rounded-md"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-border"
            >
              {personalInfo.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display font-medium tabular-nums text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </div>
              ))}
              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile photo — above content on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-first lg:order-none mb-8 lg:mb-0 max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 w-full"
          >
            <div className="relative rounded-[var(--radius)] border border-border bg-card overflow-hidden">
              <Image
                src="/pintu.png"
                alt="Pintu Kumar Gupta"
                width={480}
                height={560}
                className="object-cover w-full h-auto"
                priority
              />
              <div className="flex items-center justify-between px-4 py-3 border-t border-border font-mono text-xs text-muted-foreground">
                <span>{personalInfo.location}</span>
                <span>VassarLabs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
