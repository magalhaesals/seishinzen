import type { Metadata } from "next";
import Link from "next/link";
import {
  UKEMI_FALLS,
  UKEMI_MAIN_ILLUSTRATION,
  UKEMI_PROGRAM,
} from "@/data/ukemi";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Ukemi — Quedas Fundamentais (Ju-Jitsu)",
  description:
    "Ilustração das quatro quedas fundamentais do Ju-Jitsu: Ushiro, Yoko, Mae e Mae-Mawari Ukemi.",
};

export default function UkemiPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 print:bg-white">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 font-black text-white shadow-xs"
              aria-hidden
            >
              受
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                Ju-Jitsu · Quedas
              </p>
              <p className="text-sm font-extrabold tracking-tight text-slate-900">
                {UKEMI_PROGRAM.title}
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
              href="/faixa-amarela"
              className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-amber-950 transition-colors hover:bg-amber-100"
            >
              Cinto Amarelo
            </Link>
            <PrintButton className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-white transition-colors hover:bg-slate-800" />
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 15% 0%, rgba(185,28,28,0.35), transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(248,113,113,0.12), transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 print:bg-white print:py-6 print:text-slate-900">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-300 print:text-red-700">
            Ju-Jitsu
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {UKEMI_PROGRAM.title}{" "}
            <span className="font-normal text-slate-400 print:text-slate-500">
              （{UKEMI_PROGRAM.kanji}）
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg print:text-slate-600">
            {UKEMI_PROGRAM.subtitle}.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-950 px-4 py-3 text-white sm:px-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em]">
              Prancha das 4 quedas
            </p>
          </div>
          <div className="bg-slate-50 p-3 sm:p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={UKEMI_MAIN_ILLUSTRATION}
              alt="Ilustração das quatro quedas Ukemi: ushiro, yoko, mae e mae-mawari"
              className="mx-auto h-auto w-full rounded-lg object-contain bg-white"
            />
          </div>
          <figcaption className="border-t border-slate-200 px-4 py-3 text-xs text-slate-600 sm:px-5">
            Ushiro · Yoko · Mae · Mae-Mawari / Zenpō-Kaiten — técnicas base de
            proteção na queda.
          </figcaption>
        </figure>

        <div className="mt-10 mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-slate-900/10 pb-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              As quatro quedas
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Nome em romaji e significado em português.
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-red-700">
            {UKEMI_FALLS.length} ukemi
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {UKEMI_FALLS.map((fall) => (
            <li
              key={fall.number}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white print:break-inside-avoid"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-950 px-4 py-3 text-white">
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-red-700 px-2 text-sm font-black text-white">
                  {fall.number}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold tracking-wide">
                    {fall.romaji}
                    {fall.romajiAlt ? (
                      <span className="font-medium text-slate-400">
                        {" "}
                        / {fall.romajiAlt}
                      </span>
                    ) : null}
                  </h3>
                  <p className="text-xs font-semibold text-red-300">
                    {fall.translationPt}
                  </p>
                </div>
              </div>
              <p className="px-4 py-3.5 text-sm leading-relaxed text-slate-600">
                {fall.detail}
              </p>
            </li>
          ))}
        </ol>
      </main>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-xs text-slate-500 sm:px-6">
        Seishinzen · Ukemi · Quedas Fundamentais · Ju-Jitsu
      </footer>
    </div>
  );
}
