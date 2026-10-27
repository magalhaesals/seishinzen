import type { Metadata } from "next";
import Link from "next/link";
import {
  FAIXA_AMARELA_DEFENSES,
  FAIXA_AMARELA_PROGRAM,
} from "@/data/faixaAmarela";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Programa Técnico — Cinto Amarelo (Ju-Jitsu)",
  description:
    "As 11 defesas do programa técnico de Cinto Amarelo em Ju-Jitsu, com sequência de técnicas e retorno a Kamae.",
};

export default function FaixaAmarelaPage() {
  return (
    <div className="faixa-amarela-root min-h-screen bg-slate-100 text-slate-900 print:bg-white">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-black text-slate-950 shadow-xs"
              aria-hidden
            >
              帯
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                Ju-Jitsu · {FAIXA_AMARELA_PROGRAM.belt}
              </p>
              <p className="text-sm font-extrabold tracking-tight text-slate-900">
                {FAIXA_AMARELA_PROGRAM.title}
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <Link
              href="/"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 transition-colors hover:bg-slate-50"
            >
              Kata Ude Uke
            </Link>
            <Link
              href="/ukemi"
              className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-800 transition-colors hover:bg-red-100"
            >
              Ukemi
            </Link>
            <PrintButton className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-white transition-colors hover:bg-slate-800" />
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 0%, rgba(245,158,11,0.35), transparent 50%), radial-gradient(ellipse at 100% 80%, rgba(251,191,36,0.12), transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 print:bg-white print:py-6 print:text-slate-900">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300 print:text-amber-800">
            Ju-Jitsu
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {FAIXA_AMARELA_PROGRAM.title}
            <span className="mt-2 block text-amber-400 print:text-amber-700">
              {FAIXA_AMARELA_PROGRAM.belt}
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg print:text-slate-600">
            {FAIXA_AMARELA_PROGRAM.subtitle}.
          </p>
        </div>
      </section>

      <main id="defesas" className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-slate-900/10 pb-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Sequências de defesa
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Técnica em romaji, seguida da aplicação em português.
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
            {FAIXA_AMARELA_DEFENSES.length} defesas
          </p>
        </div>

        <ol className="space-y-8">
          {FAIXA_AMARELA_DEFENSES.map((defense) => (
            <li
              key={defense.number}
              id={`defesa-${defense.number}`}
              className="scroll-mt-24 overflow-hidden rounded-xl border border-slate-200 bg-white print:break-inside-avoid"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-950 px-4 py-3 text-white sm:px-5">
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-amber-500 px-2 text-sm font-black text-slate-950">
                  {defense.number}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em]">
                  {defense.title}
                </h3>
              </div>

              <ol className="divide-y divide-slate-100">
                {defense.techniques.map((tech, index) => (
                  <li
                    key={`${defense.number}-${index}-${tech.romaji}`}
                    className="flex gap-3 px-4 py-3.5 sm:gap-4 sm:px-5"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-extrabold tracking-tight text-slate-950">
                        {tech.count ? (
                          <span className="mr-1.5 text-amber-700">
                            {tech.count}×
                          </span>
                        ) : null}
                        {tech.romaji}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                        {tech.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </main>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-xs text-slate-500 sm:px-6">
        Seishinzen · Programa Técnico · Cinto Amarelo · Ju-Jitsu
      </footer>
    </div>
  );
}
