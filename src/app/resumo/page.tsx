import { KATA_UDE_UKE_GROUPS } from "@/data/kataMovements";
import type { Metadata } from "next";
import { ResumoActions } from "./ResumoActions";
import "./resumo-print.css";

export const metadata: Metadata = {
  title: "KATA UDE UKE — Resumo 1 Página",
  description:
    "Folha-resumo A4 paisagem com as 7 defesas do Kata Ude Uke e a ilustração principal de cada técnica.",
};

/** Short Portuguese labels for the 1-page sheet */
const SHORT_PT: Record<string, string> = {
  "age-uke": "Defesa Ascendente",
  "gedan-barai-uke": "Defesa Descendente",
  "soto-ude-uke": "De Fora para Dentro",
  "uchi-ude-uke": "De Dentro para Fora",
  "mae-ude-uke": "Defesa Frontal",
  "mawashi-ude-uke": "Defesa Circular",
  "juji-ude-uke": "Defesa em Cruz",
};

export default function ResumoPage() {
  return (
    <div className="resumo-root min-h-screen bg-slate-100 text-slate-900">
      <ResumoActions />

      <div className="resumo-sheet-wrap flex justify-center p-4 sm:p-8">
        <article className="resumo-sheet" id="resumo-a4">
          <header className="resumo-title">
            <div className="resumo-title-mark" aria-hidden>
              腕
            </div>
            <div className="resumo-title-text">
              <p className="resumo-eyebrow">Ju-Jitsu · Folha-resumo</p>
              <h1>
                KATA UDE UKE{" "}
                <span className="resumo-kanji">（形 腕受け）</span>
              </h1>
              <p className="resumo-subtitle">
                As 7 defesas · ilustração principal de cada técnica
              </p>
            </div>
          </header>

          <div className="resumo-grid">
            {KATA_UDE_UKE_GROUPS.map((group) => (
              <figure key={group.id} className="resumo-cell">
                <figcaption className="resumo-caption">
                  <span className="resumo-range">
                    {group.movements.map((m) => m.number).join("–")}
                  </span>
                  <span className="resumo-romaji">{group.romaji}</span>
                  <span className="resumo-pt">
                    {SHORT_PT[group.id] ?? group.translationPt}
                  </span>
                </figcaption>
                <div className="resumo-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={group.mainIllustration}
                    alt={`${group.romaji} — ${SHORT_PT[group.id] ?? group.translationPt}`}
                    className="resumo-img"
                  />
                </div>
              </figure>
            ))}
          </div>

          <footer className="resumo-footer">
            Manual técnico Kata Ude Uke · 14 movimentos em 7 grupos · 1 página
          </footer>
        </article>
      </div>
    </div>
  );
}
