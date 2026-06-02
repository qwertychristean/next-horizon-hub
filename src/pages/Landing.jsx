import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  LockKeyhole,
  Sparkles,
  Wand2,
} from 'lucide-react'

function Landing() {
  return (
    <main className="min-h-screen bg-[#090F1C] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#F4B942]/25 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#A8B5A2]/20 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <nav className="flex items-center justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#F4B942]">
                Next Horizon Hub
              </p>
              <p className="mt-1 text-sm text-white/60">
                AI Made Human
              </p>
            </div>

            <a
              href="#vault"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white/15"
            >
              Get the Vault
            </a>
          </nav>

          <section className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm backdrop-blur">
                <Sparkles size={18} className="text-[#F4B942]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                  Free AI Starter Vault
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                Reclaim your time with AI that makes sense.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">
                A practical starter vault for everyday people, entrepreneurs, creators, and professionals who want to use AI without feeling confused, talked down to, or left behind.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#vault"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F4B942] px-7 py-4 font-extrabold uppercase tracking-[0.16em] text-[#1E3A5F] shadow-[0_18px_40px_rgba(244,185,66,0.25)]"
                >
                  Send Me the Vault
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#why"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur"
                >
                  See What’s Inside
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
                  <p className="text-4xl font-black text-[#F4B942]">
                    7
                  </p>
                  <p className="mt-2 text-sm font-bold text-white/75">
                    Real-life AI use cases
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
                  <p className="text-4xl font-black text-[#F4B942]">
                    15
                  </p>
                  <p className="mt-2 text-sm font-bold text-white/75">
                    Starter prompts
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
                  <p className="text-4xl font-black text-[#F4B942]">
                    0
                  </p>
                  <p className="mt-2 text-sm font-bold text-white/75">
                    Tech bro fluff
                  </p>
                </div>
              </div>
            </div>

            <div id="vault" className="relative">
              <div className="absolute inset-0 rotate-3 rounded-[40px] bg-[#F4B942]/30 blur-sm" />

              <div className="relative rounded-[40px] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[32px] bg-[#FAF8F5] p-6 text-[#2D2D2D] md:p-8">
                  <div className="mx-auto mb-7 max-w-sm rounded-[30px] border border-[#A8B5A2]/40 bg-white p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#A8B5A2]">
                        Starter Vault
                      </p>

                      <div className="rounded-full bg-[#F4B942]/25 p-2">
                        <LockKeyhole size={18} className="text-[#1E3A5F]" />
                      </div>
                    </div>

                    <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em] text-[#1E3A5F]">
                      The Reclaim Your Time AI Starter Vault
                    </h2>

                    <p className="mt-5 text-sm leading-6 text-[#2D2D2D]/75">
                      Get the free guide, practical prompts, and first steps for using AI in everyday life, business, content, and workflow.
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-[#A8B5A2]" size={20} />
                        <p className="text-sm font-semibold">
                          AI without the overwhelm
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-[#A8B5A2]" size={20} />
                        <p className="text-sm font-semibold">
                          Prompts for real tasks
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-[#A8B5A2]" size={20} />
                        <p className="text-sm font-semibold">
                          A simple first-step plan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[28px] border border-[#A8B5A2]/40 bg-white shadow-sm">
                    <iframe
                      src="https://tally.so/r/q4veAg?transparentBackground=1"
                      width="100%"
                      height="460"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Reclaim Your Time AI Starter Vault"
                    />
                  </div>

                  <p className="mt-5 text-center text-sm text-[#2D2D2D]/70">
                    Start with one small task. No tech degree needed.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="why" className="bg-[#FAF8F5] px-6 py-20 text-[#2D2D2D]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#A8B5A2]">
              Why this exists
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] text-[#1E3A5F] sm:text-6xl">
              AI should not only work for people who speak perfect tech.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#2D2D2D]/75">
              This vault helps you turn real thoughts, messy tasks, and everyday goals into clear action. Your voice belongs in the future too.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            <div className="rounded-[30px] border border-[#A8B5A2]/30 bg-white p-6 shadow-sm">
              <Clock className="text-[#F4B942]" size={30} />
              <h3 className="mt-5 text-xl font-black text-[#1E3A5F]">
                Time
              </h3>
              <p className="mt-3 leading-7 text-[#2D2D2D]/75">
                Plan, organize, write, and cut down mental clutter.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#A8B5A2]/30 bg-white p-6 shadow-sm">
              <Wand2 className="text-[#F4B942]" size={30} />
              <h3 className="mt-5 text-xl font-black text-[#1E3A5F]">
                Business
              </h3>
              <p className="mt-3 leading-7 text-[#2D2D2D]/75">
                Turn scattered tasks into better workflows and systems.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#A8B5A2]/30 bg-white p-6 shadow-sm">
              <Globe2 className="text-[#F4B942]" size={30} />
              <h3 className="mt-5 text-xl font-black text-[#1E3A5F]">
                Access
              </h3>
              <p className="mt-3 leading-7 text-[#2D2D2D]/75">
                Make AI understand your voice, language, and context.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#A8B5A2]/30 bg-white p-6 shadow-sm">
              <FileText className="text-[#F4B942]" size={30} />
              <h3 className="mt-5 text-xl font-black text-[#1E3A5F]">
                Ownership
              </h3>
              <p className="mt-3 leading-7 text-[#2D2D2D]/75">
                Understand tools shaping work, media, money, and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing