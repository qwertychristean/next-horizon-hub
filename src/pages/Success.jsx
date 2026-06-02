import { ArrowRight, CheckCircle2, Download, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <main className="min-h-screen bg-[#090F1C] text-white">
      <section className="relative overflow-hidden px-6 py-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#F4B942]/25 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#A8B5A2]/20 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl">
          <nav className="flex items-center justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#F4B942]">
                Next Horizon Hub
              </p>
              <p className="mt-1 text-sm text-white/60">
                AI Made Human
              </p>
            </div>

            <Link
              to="/"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white/15"
            >
              Back Home
            </Link>
          </nav>

          <section className="grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#F4B942]/20 ring-1 ring-[#F4B942]/30">
                <CheckCircle2 className="text-[#F4B942]" size={34} />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm backdrop-blur">
                <Sparkles size={18} className="text-[#F4B942]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                  You’re In
                </span>
              </div>

              <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Download your AI starter vault.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">
                Start with one task today. Do not try to learn everything at once. That is how people end up with 37 tabs open and no lunch.
              </p>

              <a
                href="/reclaim-your-time-ai-guide.pdf"
                download
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#F4B942] px-7 py-4 font-extrabold uppercase tracking-[0.16em] text-[#1E3A5F] shadow-[0_18px_40px_rgba(244,185,66,0.25)]"
              >
                Download the Guide
                <Download size={18} />
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rotate-3 rounded-[40px] bg-[#F4B942]/30 blur-sm" />

              <div className="relative rounded-[40px] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[32px] bg-[#FAF8F5] p-8 text-[#2D2D2D] md:p-10">
                  <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#A8B5A2]">
                    Next Step
                  </p>

                  <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em] text-[#1E3A5F]">
                    The guide is the starting line.
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#2D2D2D]/75">
                    If you are ready to apply AI to your business, content, workflow, or team, the Private AI Roadmap Session helps you turn ideas into a clear 30-day plan.
                  </p>

                  <div className="mt-7 space-y-4">
                    <div className="rounded-3xl border border-[#A8B5A2]/30 bg-white p-5 shadow-sm">
                      <p className="font-extrabold text-[#1E3A5F]">
                        Find the best AI use cases for your work
                      </p>
                    </div>

                    <div className="rounded-3xl border border-[#A8B5A2]/30 bg-white p-5 shadow-sm">
                      <p className="font-extrabold text-[#1E3A5F]">
                        Build a tool plan without wasting money
                      </p>
                    </div>

                    <div className="rounded-3xl border border-[#A8B5A2]/30 bg-white p-5 shadow-sm">
                      <p className="font-extrabold text-[#1E3A5F]">
                        Leave with a simple 30-day roadmap
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/roadmap"
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1E3A5F] px-7 py-4 font-extrabold uppercase tracking-[0.16em] text-white shadow-lg"
                  >
                    Apply for a Private AI Roadmap Session
                    <ArrowRight size={18} />
                  </Link>

                  <p className="mt-5 text-center text-sm text-[#2D2D2D]/60">
                    No pressure. No public pricing. Fit comes first.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Success