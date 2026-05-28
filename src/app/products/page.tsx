"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const products = [
  {
    title: "Grove Insights",
    logo: "/logos/grove-insights.svg",
    type: "Web Platform",
    tags: ["Web app", "Next.js", "Full-Stack", "Enterprise", "AI"],
    description:
      "AI-moderated user interviews that help uncover customer pain points and opportunities. Grove conducts, transcribes, and analyzes qualitative research at scale — so product teams can make better decisions faster.",
    iteration: "v3.0",
    status: "live",
    link: "https://groveinsights.ai",
  },
  {
    title: "Thrive Habits",
    logo: "/logos/thrive-habits.png",
    type: "Mobile App",
    tags: ["iOS app", "Consumer", "Wellness"],
    description:
      "A habit-building app designed to help users create and maintain positive daily routines through streaks, reminders, and gentle accountability.",
    iteration: "v1.0",
    status: "live",
    link: "https://thrive.hyperactivestudio.xyz",
  },
  {
    title: "40 Ball",
    logo: "/logos/40-ball.png",
    type: "Mobile App",
    tags: ["iOS app", "Consumer", "Golf"],
    description:
      "A mobile app to host 40 ball golf competitions with your friends. Create leagues, track scores, and settle who really deserves bragging rights.",
    iteration: "v1.4",
    status: "live",
    link: "https://testflight.apple.com/join/SMAMFbCc",
  },
  {
    title: "First to Worst",
    logo: "/logos/first-to-worst.png",
    type: "Mobile App",
    tags: ["iOS app", "Consumer", "Games"],
    description:
      "A mobile app version of the First to Worst board game. Rank anything from pizza toppings to movies — then argue about it with friends.",
    iteration: "v2.1",
    status: "live",
  },
  {
    title: "The Arcade",
    logo: "/logos/the-arcade.png",
    type: "Web Platform",
    tags: ["Web app", "Consumer", "Games"],
    description:
      "A daily casual gaming competition with friends. New challenges drop every day — compete, compare, and climb the leaderboard.",
    iteration: "v1.0",
    status: "live",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-14 grid-bg">
          <div className="absolute top-0 bottom-0 left-6 lg:left-12 w-px bg-border-strong/40" />
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28 w-full">
            <div className="max-w-3xl pl-0 lg:pl-6">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="tag tag-active">
                  <span className="status-dot live" />
                  {products.length} products
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-foreground"
              >
                Products we&apos;ve{" "}
                <span className="hand-note">built</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted"
              >
                We build our own products to stay sharp, push the edge with new AI tools, and
                prove out ideas end-to-end. These are things we&apos;ve
                shipped for ourselves.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {products.map((product, i) => {
                const card = (
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="group relative flex h-full flex-col rounded-lg border border-border bg-surface overflow-hidden transition-all duration-200 hover:border-border-strong hover:shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-surface-alt/50">
                      <div className="flex items-center gap-2">
                        <span className="status-dot live" />
                        <span className="font-mono text-[11px] text-muted">
                          {product.type}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-muted-light">
                        {product.iteration}
                      </span>
                    </div>

                    <div className="flex-1 p-5">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={product.logo}
                            alt={`${product.title} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {product.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {product.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[3px] border border-border bg-surface-alt px-2 py-0.5 font-mono text-[10px] text-muted-light uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-border px-4 py-2 bg-surface-alt/30">
                      <span className="annotation">
                        status: {product.status}
                      </span>
                      {product.link && (
                        <svg
                          className="h-3.5 w-3.5 text-muted-light transition-colors group-hover:text-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      )}
                    </div>
                  </motion.div>
                );

                return (
                  <AnimatedSection
                    key={product.title}
                    delay={i * 0.08}
                    className="h-full"
                  >
                    {product.link ? (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full no-underline"
                      >
                        {card}
                      </a>
                    ) : (
                      <div className="h-full">{card}</div>
                    )}
                  </AnimatedSection>
                );
              })}
            </div>

            {/* CTA */}
            <AnimatedSection>
              <div className="mt-20 rounded-lg border border-border bg-foreground overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-16 text-center">
                  <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-white/30">
                    Have an idea?
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    Let&apos;s build it together.
                  </h3>
                  <p className="mt-5 max-w-lg mx-auto text-[15px] leading-relaxed text-white/50">
                    Great digital products aren&apos;t rare because they&apos;re
                    impossible. They&apos;re rare because teams don&apos;t know where
                    to start, what to prioritize, or how to ship fast without cutting
                    quality.
                  </p>
                  <p className="mt-3 max-w-lg mx-auto text-[15px] leading-relaxed text-white/50">
                    Hyperactive closes that gap. We&apos;re a boutique, AI-native
                    product studio that helps ambitious teams bring ideas to
                    life—end to end.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-[13px] font-semibold text-foreground transition-all duration-150 hover:bg-white/90"
                  >
                    Get in touch
                    <svg
                      className="ml-2 h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
