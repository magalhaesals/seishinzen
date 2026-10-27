import type { Metadata } from "next";
import {
  FAIXA_AMARELA_DEFENSES,
  FAIXA_AMARELA_PROGRAM,
} from "@/data/faixaAmarela";
import { CintoResumoActions } from "./CintoResumoActions";
import "./cinto-resumo-print.css";

export const metadata: Metadata = {
  title: "Cinto Amarelo — Resumo 1 Página",
  description:
    "Folha-resumo A4 retrato com as 11 defesas do programa técnico de Cinto Amarelo.",
};

export default function CintoAmareloResumoPage() {
  return (
    <div className="cinto-resumo-root min-h-screen bg-slate-100 text-slate-900">
      <CintoResumoActions />

      <div className="cinto-resumo-sheet-wrap flex justify-center p-4 sm:p-8">
        <article className="cinto-resumo-sheet" id="cinto-resumo-a4">
          <header className="cinto-resumo-title">
            <div className="cinto-resumo-title-mark" aria-hidden>
              帯
            </div>
            <div>
              <p className="cinto-resumo-eyebrow">Ju-Jitsu · Folha-resumo</p>
              <h1>
                {FAIXA_AMARELA_PROGRAM.title} — {FAIXA_AMARELA_PROGRAM.belt}
              </h1>
              <p className="cinto-resumo-subtitle">
                {FAIXA_AMARELA_PROGRAM.subtitle}
              </p>
            </div>
          </header>

          <div className="cinto-resumo-grid">
            {FAIXA_AMARELA_DEFENSES.map((defense) => (
              <section key={defense.number} className="cinto-resumo-cell">
                <div className="cinto-resumo-caption">
                  <span className="cinto-resumo-name">{defense.title}</span>
                </div>
                <ol className="cinto-resumo-list">
                  {defense.techniques.map((tech, index) => (
                    <li key={`${defense.number}-${index}-${tech.romaji}`}>
                      <span className="cinto-resumo-step">{index + 1}.</span>
                      <span className="cinto-resumo-tech">
                        <strong>
                          {tech.count ? `${tech.count}× ` : ""}
                          {tech.romaji}
                        </strong>
                        <span className="cinto-resumo-desc">
                          {" — "}
                          {tech.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>

          <footer className="cinto-resumo-footer">
            Seishinzen · Programa Técnico · Cinto Amarelo · 11 defesas · 1
            página
          </footer>
        </article>
      </div>
    </div>
  );
}
