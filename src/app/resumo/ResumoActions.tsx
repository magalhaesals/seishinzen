"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer } from "lucide-react";

export function ResumoActions() {
  return (
    <header className="resumo-screen-only sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Manual completo
          </Link>
          <span className="text-sm font-bold text-slate-900">
            Resumo 1 página — 7 defesas
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/KATA_UDE_UKE_RESUMO.pdf"
            download="KATA_UDE_UKE_RESUMO.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-50"
          >
            <Download className="h-3.5 w-3.5" />
            Descarregar PDF resumido
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-800"
          >
            <Printer className="h-3.5 w-3.5" />
            Imprimir
          </button>
        </div>
      </div>
    </header>
  );
}
