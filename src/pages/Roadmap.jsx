import {
  Brain,
  CheckCircle2,
  FileText,
  Sparkles,
  Workflow,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Roadmap() {
  return (
    <main className="min-h-screen bg-[#090F1C] text-white">
      <section className="relative overflow-hidden px-6 py-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#F4B942]/25 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#A8B5A2]/20 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <nav className="flex items-center justify-between">
            <Link
              to="/success"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white/15"
            >
              Back to Guide
            </Link>

            <div className="text-right">
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#F4B942]">
                Next Horizon Hub
              </p>
              <p className="mt-1 text-sm text-white/60">
                AI Made Human
              </p>
            </div>
          </nav>

          <section className="grid gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm backdrop-blur">
                <Sparkles size={18} className="text-[#F4B942]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                  Private AI Roadmap Session
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                Turn AI confusion into a clear 30-day plan.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">
                A private working session for people ready to stop collecting random tools and start building a clear AI plan for their business, content, workflow, or team.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
                  <Brain className="text-[#F4B942]" size={30} />
                  <p className="mt-4 text-sm font-bold text-white/75">
                    Clear thinking
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
                  <Workflow className="text-[#F4B942]" size={30} />
                  <p className="mt-4 text-sm font-bold text-white/75">
                    Better systems
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
                  <FileText className="text-[#F4B942]" size={30} />
                  <p className="mt-4 text-sm font-bold text-white/75">
                    Action roadmap
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-[36px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#F4B942]">
                  You leave with
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#F4B942]" size={24} />
                    <p className="leading-7 text-white/75">
                      A clear list of where AI fits in your work right now.
                    </p>
                  </div>

                  <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#F4B942]" size={24} />
                    <p className="leading-7 text-white/75">
                      A simple tool plan based on your goals, not internet noise.
                    </p>
                  </div>

                  <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#F4B942]" size={24} />
                    <p className="leading-7 text-white/75">
                      A 30-day roadmap with next steps you understand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[36px] bg-[#FAF8F5] p-6 text-[#2D2D2D]">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 shrink-0 text-[#1E3A5F]" size={28} />
                  <div>
                    <h2 className="text-2xl font-black text-[#1E3A5F]">
                      Fit comes first.
                    </h2>
                    <p className="mt-3 leading-7 text-[#2D2D2D]/75">
                      This is an application page. Pricing and next steps come after review, so the session stays aligned with the right people and the right goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rotate-3 rounded-[40px] bg-[#F4B942]/30 blur-sm" />

              <div className="relative rounded-[40px] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[32px] bg-[#FAF8F5] p-6 text-[#2D2D2D] md:p-8">
                  <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#A8B5A2]">
                    Apply Below
                  </p>

                  <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] text-[#1E3A5F]">
                    Private AI Roadmap Session
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#2D2D2D]/75">
                    Fill out the application below. If it looks aligned, I’ll follow up with the next step.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-[28px] border border-[#A8B5A2]/40 bg-white shadow-sm">
                    <iframe
                      src="https://tally.so/r/yPzk04?transparentBackground=1"
                      width="100%"
                      height="880"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Private AI Roadmap Session Application"
                    />
                  </div>

                  <p className="mt-5 text-center text-sm text-[#2D2D2D]/60">
                    No pressure. No public pricing. Clear fit first.
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

export default Roadmap