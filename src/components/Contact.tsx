"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firmType, setFirmType] = useState("");
  const [maturity, setMaturity] = useState("");
  const [workflows, setWorkflows] = useState("");
  const [pilot, setPilot] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          firmType,
          maturity,
          workflows,
          pilot,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setFirmType("");
      setMaturity("");
      setWorkflows("");
      setPilot("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-foreground grid-bg relative overflow-hidden">
      {/* Override grid color for dark background */}
      <style jsx>{`
        section { --grid-line: rgba(255, 255, 255, 0.04); }
      `}</style>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <div>
            <AnimatedSection>
              <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-white/30">
                Get started
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s work
                <br />
                together
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/50 max-w-sm">
                Share with us some information about your firm and the workflows
                you&apos;d like help automating. We&apos;ll get back to you with
                next steps.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-white/55">
                {[
                  "Intro call",
                  "AI readiness assessment",
                  "Implementation plan",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="status-dot live" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="mailto:henry@hyperactivestudio.xyz"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] transition-colors group-hover:border-white/20">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  henry@hyperactivestudio.xyz
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <div>
            <AnimatedSection delay={0.1}>
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm">
                {/* Form header bar */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                  <span className="status-dot live" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-white/30">
                    get_started.init
                  </span>
                </div>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] mb-4">
                      <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-white">Thanks - message sent.</p>
                    <p className="mt-1 text-xs text-white/40">
                      We&apos;ll get back to you with next steps.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-5 text-xs text-white/30 underline underline-offset-2 transition-colors hover:text-white/60"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Smith"
                          className="w-full rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                          Firm type
                        </label>
                        <select
                          required
                          value={firmType}
                          onChange={(e) => setFirmType(e.target.value)}
                          className="w-full rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                        >
                          <option value="" className="bg-foreground">
                            Select one
                          </option>
                          <option value="Private equity" className="bg-foreground">
                            Private equity
                          </option>
                          <option value="Venture capital" className="bg-foreground">
                            Venture capital
                          </option>
                          <option value="Fund of funds" className="bg-foreground">
                            Fund of funds
                          </option>
                          <option value="Family office" className="bg-foreground">
                            Family office
                          </option>
                          <option value="Other investment firm" className="bg-foreground">
                            Other investment firm
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                          AI maturity
                        </label>
                        <select
                          required
                          value={maturity}
                          onChange={(e) => setMaturity(e.target.value)}
                          className="w-full rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                        >
                          <option value="" className="bg-foreground">
                            Select one
                          </option>
                          <option value="None" className="bg-foreground">
                            None
                          </option>
                          <option value="Beginner" className="bg-foreground">
                            Beginner
                          </option>
                          <option value="Intermediate" className="bg-foreground">
                            Intermediate
                          </option>
                          <option value="Advanced" className="bg-foreground">
                            Advanced
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                        Highest-friction workflows
                      </label>
                      <textarea
                        required
                        value={workflows}
                        onChange={(e) => setWorkflows(e.target.value)}
                        placeholder="Investment memos, screeners, portfolio monitoring, legal diligence..."
                        rows={3}
                        className="w-full resize-none rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                        Desired first workflow
                      </label>
                      <input
                        type="text"
                        required
                        value={pilot}
                        onChange={(e) => setPilot(e.target.value)}
                        placeholder="What should be running first?"
                        className="w-full rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                        Additional context
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Any timing, constraints, or stakeholders we should know about?"
                        rows={3}
                        className="w-full resize-none rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-400">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="mt-1 rounded-md bg-white px-6 py-2.5 text-[13px] font-semibold text-foreground transition-all duration-150 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Get Started"}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
