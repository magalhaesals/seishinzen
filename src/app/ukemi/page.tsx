"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UKEMI_FALLS,
  UKEMI_MAIN_ILLUSTRATION,
  UKEMI_PROGRAM,
} from "@/data/ukemi";
import { PrintButton } from "@/components/PrintButton";
import { Layers, Maximize2, ShieldCheck, X } from "lucide-react";

export default function UkemiPage() {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 print:bg-white">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
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
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 print:bg-white print:py-6 print:text-slate-900">
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

      <main className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-950 px-4 py-3 text-white sm:px-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em]">
              Prancha das 4 quedas
            </p>
          </div>
          <div
            className="cursor-zoom-in bg-slate-50 p-3 sm:p-5"
            onClick={() =>
              setLightboxImage({
                src: UKEMI_MAIN_ILLUSTRATION,
                caption: "Prancha das 4 quedas — Ukemi",
              })
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={UKEMI_MAIN_ILLUSTRATION}
              alt="Ilustração das quatro quedas Ukemi: ushiro, yoko, mae e mae-mawari"
              className="mx-auto h-auto w-full rounded-lg object-contain bg-white"
            />
          </div>
        </figure>

        {UKEMI_FALLS.map((fall) => (
          <section
            key={fall.number}
            id={`ukemi-${fall.number}`}
            className="scroll-mt-24 overflow-hidden rounded-xl border border-slate-200 bg-white print:break-inside-avoid"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-950 px-4 py-4 text-white sm:px-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-red-700 px-2 text-sm font-black text-white">
                  {fall.number}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                      {fall.romaji}
                    </h2>
                    <span className="text-base font-medium text-slate-400">
                      {fall.kanji}
                    </span>
                  </div>
                  <p className="text-xs text-red-300 sm:text-sm">
                    {fall.translationPt}
                    {fall.romajiAlt ? ` · ${fall.romajiAlt}` : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 p-6 lg:p-8">
              <div
                className={`grid grid-cols-1 gap-6 ${
                  fall.sequenceIllustration ? "lg:grid-cols-2" : ""
                }`}
              >
                <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-red-700" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Prancha Principal ({fall.number})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: fall.mainIllustration,
                          caption: `${fall.romaji} — ${fall.translationPt}`,
                        })
                      }
                      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 print:hidden"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      Ampliar
                    </button>
                  </div>
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: fall.mainIllustration,
                        caption: `${fall.romaji} — ${fall.translationPt}`,
                      })
                    }
                    className="relative flex flex-1 cursor-zoom-in items-center justify-center bg-white p-3"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={fall.mainIllustration}
                      alt={`Ilustração principal de ${fall.romaji}`}
                      className="max-h-[340px] w-full rounded-lg object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                    />
                  </div>
                  <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600">
                    {fall.detail}
                  </div>
                </div>

                {fall.sequenceIllustration ? (
                  <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50/60">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-red-700" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          Sequência Biomecânica Passo a Passo ({fall.romaji})
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxImage({
                            src: fall.sequenceIllustration!,
                            caption: `Sequência Passo a Passo — ${fall.romaji}`,
                          })
                        }
                        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 print:hidden"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                        Ampliar
                      </button>
                    </div>
                    <div
                      onClick={() =>
                        setLightboxImage({
                          src: fall.sequenceIllustration!,
                          caption: `Sequência Passo a Passo — ${fall.romaji}`,
                        })
                      }
                      className="relative flex flex-1 cursor-zoom-in items-center justify-center bg-white p-3"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fall.sequenceIllustration}
                        alt={`Sequência passo a passo de ${fall.romaji}`}
                        className="max-h-[340px] w-full rounded-lg object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                      />
                    </div>
                    <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600">
                      Progressão contínua desde a postura inicial até ao
                      batimento final.
                    </div>
                  </div>
                ) : null}
              </div>

              {fall.steps.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {fall.steps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="rounded-xl border border-slate-200 bg-slate-50/50 p-5"
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">
                        Passo {step.stepNumber}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-slate-900">
                        {step.phaseTitle}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-xs text-slate-500 sm:px-6">
        Seishinzen · Ukemi · Quedas Fundamentais · Ju-Jitsu
      </footer>

      {lightboxImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 print:hidden"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <p className="text-sm font-semibold text-slate-800">
                {lightboxImage.caption}
              </p>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-slate-50 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="mx-auto max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
