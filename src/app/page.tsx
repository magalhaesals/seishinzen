"use client";

import React, { useState } from "react";
import { KATA_UDE_UKE_GROUPS, KataTechniqueGroup } from "@/data/kataMovements";
import {
  Download,
  BookOpen,
  Layers,
  Compass,
  ShieldCheck,
  Maximize2,
  X,
} from "lucide-react";

export default function KataUdeUkeManualPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>("ALL");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const filteredGroups = KATA_UDE_UKE_GROUPS.filter((group) => {
    if (selectedLevel === "ALL") return true;
    if (selectedLevel === "MISSING") return group.wasMissingInOriginalDoc;
    return group.movements.some((m) => m.level === selectedLevel);
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 print:bg-white">
      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 font-bold text-white shadow-xs">
              腕
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-red-700">
                  Ju-Jitsu • Manual Técnico
                </span>
              </div>
              <h1 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                KATA UDE UKE
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="/KATA_UDE_UKE_RESUMO.pdf"
              download="KATA_UDE_UKE_RESUMO.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 shadow-xs transition-colors hover:bg-red-100"
              title="Folha A4 com as 7 defesas e ilustração principal"
            >
              <Download className="h-4 w-4" />
              PDF 1 página
            </a>
            <a
              href="/KATA_UDE_UKE.pdf"
              download="KATA_UDE_UKE.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs transition-colors hover:bg-slate-50"
            >
              <Download className="h-4 w-4" />
              Descarregar PDF
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white print:bg-white print:text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 print:py-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              KATA UDE UKE{" "}
              <span className="font-normal text-slate-400">（形 腕受け）</span>
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base print:text-slate-600">
              Manual técnico ilustrado do{" "}
              <strong>Kata Ude Uke</strong> com todas as defesas refeitas num
              estilo unificado de Ju-Jitsu.
            </p>

            {/* Quick Jump Pills */}
            <div className="mt-6 flex flex-wrap gap-2 print:hidden">
              {KATA_UDE_UKE_GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-red-400 hover:bg-slate-700 hover:text-white"
                >
                  <span className="font-bold text-red-400">
                    {g.movements.map((m) => m.number).join("-")}
                  </span>
                  <span>{g.romaji}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Index Bar */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Compass className="h-4 w-4 text-red-700" />
            <span>Filtrar por Nível de Defesa (Uke):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "ALL", label: "Todos os 14 Movimentos" },
              { id: "Jodan", label: "Nível Alto (Jodan)" },
              { id: "Chudan", label: "Nível Médio (Chudan)" },
              { id: "Gedan", label: "Nível Baixo (Gedan)" },
              {
                id: "MISSING",
                label: "Em Falta no Original (Mov. 9 a 12)",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedLevel(tab.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  selectedLevel === tab.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content: All 7 Technique Groups (14 Movements) */}
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
        {filteredGroups.map((group: KataTechniqueGroup) => (
          <article
            key={group.id}
            id={group.id}
            className="scroll-mt-20 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs print:break-inside-avoid print:border-slate-300"
          >
            {/* Group Header Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-slate-900 px-6 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 items-center rounded-lg bg-red-700 px-3 text-sm font-black tracking-wide text-white">
                  {group.movementRange}
                </span>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                      {group.groupTitle}
                    </h2>
                    <span className="text-base font-medium text-slate-400">
                      {group.kanji}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    {group.translationPt}
                  </p>
                </div>
              </div>

            </div>

            <div className="p-6 lg:p-8 space-y-8">
              {/* Primary Redesigned Illustrations Grid (Main Dual Panel + Step-by-step Strip) */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Main Left/Right Illustration Card */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-red-700" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Prancha Principal Refeita ({group.movementRange})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: group.mainIllustration,
                          caption: `${group.groupTitle} — ${group.translationPt}`,
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
                        src: group.mainIllustration,
                        caption: `${group.groupTitle} — ${group.translationPt}`,
                      })
                    }
                    className="relative flex flex-1 cursor-zoom-in items-center justify-center bg-white p-3"
                  >
                    <img
                      src={group.mainIllustration}
                      alt={`Ilustração refeita para ${group.groupTitle}`}
                      className="max-h-[340px] w-full rounded-lg object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                    />
                  </div>

                  <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600">
                    {group.singleIllustration ? (
                      <>
                        Ilustração única do movimento:{" "}
                        <strong>{group.romaji}</strong>
                        {" — "}punho fechado, antebraço à frente da testa sem
                        cobrir os olhos
                      </>
                    ) : (
                      <>
                        Execução bilateral padronizada:{" "}
                        <strong>
                          {group.movements.map((m) => m.name).join("  •  ")}
                        </strong>
                      </>
                    )}
                  </div>
                </div>

                {/* Step-by-Step Progression Strip Card */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-red-700" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Sequência Biomecânica Passo a Passo ({group.romaji})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: group.sequenceIllustration,
                          caption: `Sequência Passo a Passo — ${group.groupTitle}`,
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
                        src: group.sequenceIllustration,
                        caption: `Sequência Passo a Passo — ${group.groupTitle}`,
                      })
                    }
                    className="relative flex flex-1 cursor-zoom-in items-center justify-center bg-white p-3"
                  >
                    <img
                      src={group.sequenceIllustration}
                      alt={`Sequência passo a passo de ${group.groupTitle}`}
                      className="max-h-[340px] w-full rounded-lg object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                    />
                  </div>

                  <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600">
                    Progressão contínua desde a preparação (Kamae), cruzamento e
                    rotação até ao Kime final.
                  </div>
                </div>
              </div>

              {/* Individual Movement Cards + Interactive Vector Diagrams */}
              <div
                className={`grid grid-cols-1 gap-6 ${
                  group.singleIllustration ? "md:grid-cols-1 max-w-2xl" : "md:grid-cols-2"
                }`}
              >
                {(group.singleIllustration
                  ? group.movements.slice(0, 1)
                  : group.movements
                ).map((mov) => (
                  <div
                    key={mov.number}
                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">
                          Movimento #{mov.number}
                        </span>
                        <span className="text-xs font-semibold text-red-700">
                          {mov.japaneseName}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-slate-900">
                        {mov.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {mov.summary}
                      </p>

                      <dl className="mt-4 grid grid-cols-1 gap-2 border-t border-slate-200 pt-3 text-xs sm:grid-cols-2">
                        <div>
                          <dt className="font-semibold text-slate-500">
                            Base (Dachi):
                          </dt>
                          <dd className="font-medium text-slate-800">
                            {mov.stance}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-slate-500">
                            Superfície de Bloqueio:
                          </dt>
                          <dd className="font-medium text-slate-800">
                            {mov.contactSurface}
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="font-semibold text-slate-500">
                            Trajetória Biomecânica:
                          </dt>
                          <dd className="font-medium text-slate-800">
                            {mov.trajectory}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                ))}
              </div>

              {/* Step-by-Step Breakdown & Key Technical Points */}
              <div className="grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                    <BookOpen className="h-4 w-4 text-red-700" />
                    Fases de Execução Técnica ({group.romaji})
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {group.steps.map((st) => (
                      <div
                        key={st.stepNumber}
                        className="rounded-lg border border-slate-200 bg-white p-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[11px] font-bold text-red-800">
                            {st.stepNumber}
                          </span>
                          <span className="text-xs font-bold text-slate-900">
                            {st.phaseTitle}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                          {st.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="h-full rounded-xl border border-red-100 bg-red-50/50 p-4">
                    <h4 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-red-900">
                      Pontos-Chave de Kime e Postura
                    </h4>
                    <ul className="space-y-2 text-xs leading-relaxed text-slate-700">
                      {group.biomechanicsKeyPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* Lightbox Modal for High-Resolution Inspection */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xs"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-2">
              <h4 className="text-sm font-bold text-slate-900">
                {lightboxImage.caption}
              </h4>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              className="max-h-[78vh] w-auto mx-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
