"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Mail as MailOpen, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data";
import { cn, fadeUpVariant, staggerContainer } from "@/lib/utils";

type FormState = "idle" | "opened";

const contactDetails = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  { icon: Github, label: "GitHub", value: "github.com/pintukrgupta", href: personalInfo.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/pintu-k-gupta", href: personalInfo.linkedin },
];

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setFormState("opened");
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-2">
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            custom={0.1}
            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
          >
            Let&apos;s Build <span className="gradient-text">Something Together</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} custom={0.2} className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and technical conversations. Let&apos;s talk.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-2 space-y-4"
          >
            <motion.div variants={fadeUpVariant} className="p-5 rounded-[var(--radius)] border border-primary/25 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">Available Now</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to Backend SDE roles, Spring Boot consulting projects, and system design discussions.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              custom={0.1}
              className="p-5 rounded-[var(--radius)] border border-border bg-card space-y-4"
            >
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-secondary text-muted-foreground shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              custom={0.2}
              className="p-5 rounded-[var(--radius)] border border-border bg-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Good reasons to reach out</span>
              </div>
              <ul className="space-y-1.5">
                {[
                  "You're hiring a Java/Spring Boot backend engineer",
                  "You need a freelance backend developer",
                  "You want to discuss distributed systems",
                  "You want to collaborate on a project",
                  "You have a technical question or want to connect",
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.2}
            className="lg:col-span-3"
          >
            <div className="p-6 md:p-8 rounded-[var(--radius)] border border-border bg-card">
              {formState === "opened" ? (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <MailOpen className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Your email client is opening</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      This form doesn&apos;t send messages directly yet — it opens a pre-filled email in
                      your default mail app. Just hit send from there to reach me.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Start over
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={cn(
                          "w-full px-3.5 py-2.5 text-sm rounded-md border bg-background placeholder:text-muted-foreground/60",
                          "border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30",
                          "transition-colors"
                        )}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className={cn(
                          "w-full px-3.5 py-2.5 text-sm rounded-md border bg-background placeholder:text-muted-foreground/60",
                          "border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30",
                          "transition-colors"
                        )}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-3.5 py-2.5 text-sm rounded-md border bg-background",
                        "border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30",
                        "transition-colors",
                        !form.subject && "text-muted-foreground/60"
                      )}
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="Full-time Role Opportunity">Full-time Role Opportunity</option>
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Technical Consultation">Technical Consultation</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, role, or question..."
                      className={cn(
                        "w-full px-3.5 py-2.5 text-sm rounded-md border bg-background placeholder:text-muted-foreground/60 resize-none",
                        "border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30",
                        "transition-colors"
                      )}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium text-sm bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Open Email to Send
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Or email directly:{" "}
                    <a href={`mailto:${personalInfo.email}`} className="text-primary hover:text-primary/80 transition-colors">
                      {personalInfo.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
