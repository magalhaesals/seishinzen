"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";

export function CintoResumoActions() {
  return (
    <header className="cinto-resumo-screen-only sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="/faixa-amarela"
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Voltar ao programa
          </Link>
          <span className="text-sm font-bold text-slate-900">
            Resumo 1 página — Cinto Amarelo
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/CINTO_AMARELO_RESUMO.pdf"
            download="CINTO_AMARELO_RESUMO.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-950 hover:bg-amber-100"
          >
            <Download className="h-3.5 w-3.5" />
            Descarregar PDF
          </a>
          <PrintButton className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800" />
        </div>
      </div>
    </header>
  );
}
