"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen, Search } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";
import {
  ATEMI_WAZA,
  VOCAB_SECTIONS,
  VOCABULARIO,
  VocabEntry,
  VocabSection,
  countVocabEntries,
} from "@/data/vocabulario";

function fold(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function matches(entry: VocabEntry, query: string) {
  return fold(entry.term).includes(query) || fold(entry.meaning).includes(query);
}

export function VocabularioBrowser() {
  const [query, setQuery] = useState("");
  const foldedQuery = fold(query.trim());
  const total = countVocabEntries();

  const visibleSections = useMemo(() => {
    if (!foldedQuery) {
      return VOCAB_SECTIONS.map((section) => ({
        section,
        entries: section.entries,
        notes: section.notes ?? [],
      }));
    }

    return VOCAB_SECTIONS.flatMap((section) => {
      const entries = section.entries.filter((entry) =>
        matches(entry, foldedQuery),
      );
      const notes = (section.notes ?? []).filter((entry) =>
        matches(entry, foldedQuery),
      );
      if (entries.length === 0 && notes.length === 0) return [];
      return [{ section, entries, notes }];
    });
  }, [foldedQuery]);

  const visibleCount = visibleSections.reduce(
    (totalCount, item) => totalCount + item.entries.length + item.notes.length,
    0,
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 print:bg-white">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 font-black text-white shadow-xs"
              aria-hidden
            >
              {VOCABULARIO.mark}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                Ju-Jitsu · {VOCABULARIO.waza}
              </p>
              <p className="text-sm font-extrabold tracking-tight text-slate-900">
                {VOCABULARIO.title}
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
              "radial-gradient(ellipse at 18% 0%, rgba(185,28,28,0.35), transparent 50%), radial-gradient(ellipse at 100% 80%, rgba(248,113,113,0.12), transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 print:bg-white print:py-6 print:text-slate-900">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-300 print:text-red-700">
            Ju-Jitsu
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            {VOCABULARIO.title}
          </h1>
          <p className="mt-4 text-lg font-semibold text-red-200 print:text-red-800">
            {VOCABULARIO.waza}{" "}
            <span className="font-normal text-slate-400 print:text-slate-500">
              （{VOCABULARIO.mark}）
            </span>{" "}
            <span className="font-medium text-slate-300 print:text-slate-600">
              {VOCABULARIO.wazaGloss}
            </span>
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 print:text-slate-600">
            {VOCABULARIO.note}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 print:hidden">
            <a
              href={`#${ATEMI_WAZA.id}`}
              className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-red-400 hover:bg-slate-700 hover:text-white"
            >
              {ATEMI_WAZA.title}
            </a>
            {VOCAB_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-red-400 hover:bg-slate-700 hover:text-white"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 print:hidden">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xs">
          <Search className="h-4 w-4 shrink-0 text-red-700" aria-hidden />
          <span className="sr-only">Procurar no vocabulário</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Procurar termo, número ou expressão"
            className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
          <span className="shrink-0 text-xs font-semibold text-slate-500">
            {foldedQuery ? `${visibleCount} de ${total}` : `${total} termos`}
          </span>
        </label>
      </div>

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 sm:py-10">
        {foldedQuery && visibleCount === 0 ? (
          <p className="rounded-xl border border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-600">
            Nenhum termo corresponde a «{query.trim()}».
          </p>
        ) : null}

        {!foldedQuery ? (
          <section
            id={ATEMI_WAZA.id}
            className="scroll-mt-24 overflow-hidden rounded-xl border border-slate-200 bg-white print:break-inside-avoid"
          >
            <div className="border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
              <h2 className="text-lg font-black tracking-tight">
                {ATEMI_WAZA.title}
              </h2>
              <p className="mt-1 text-sm text-slate-300">{ATEMI_WAZA.meaning}</p>
            </div>
            <ul className="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {VOCAB_SECTIONS.filter((section) =>
                [
                  "te-waza",
                  "ashi-waza",
                  "higi-waza",
                  "hiza-waza",
                  "atama-waza",
                  "kata-waza",
                ].includes(section.id),
              ).map((section) => (
                <li key={section.id} className="bg-white">
                  <a
                    href={`#${section.id}`}
                    className="block px-5 py-4 transition-colors hover:bg-red-50"
                  >
                    <p className="font-extrabold tracking-tight text-slate-950">
                      {section.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {section.summary}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {visibleSections.map(({ section, entries, notes }) => (
          <SectionBlock
            key={section.id}
            section={section}
            entries={entries}
            notes={notes}
          />
        ))}
      </main>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-xs text-slate-500 sm:px-6">
        Seishinzen · Vocabulário para alunos · Ju-Jitsu
      </footer>
    </div>
  );
}

function SectionBlock({
  section,
  entries,
  notes,
}: {
  section: VocabSection;
  entries: VocabEntry[];
  notes: VocabEntry[];
}) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 overflow-hidden rounded-xl border border-slate-200 bg-white print:break-inside-avoid"
    >
      <div className="flex items-end justify-between gap-3 border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-black tracking-tight">
            <BookOpen className="h-4 w-4 text-red-400 print:hidden" aria-hidden />
            {section.title}
          </h2>
          <p className="mt-1 text-sm text-slate-300 print:text-slate-600">
            {section.summary}
          </p>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-red-300">
          {entries.length + notes.length}
        </p>
      </div>

      {notes.length > 0 ? (
        <div className="border-b border-red-100 bg-red-50/70 px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-wider text-red-900">
            Nota prévia
          </p>
          <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {notes.map((note) => (
              <div key={note.term}>
                <dt className="font-extrabold tracking-tight text-slate-950">
                  {note.term}
                </dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-slate-700">
                  {note.meaning}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}

      {section.kind === "number" ? (
        <ul className="grid grid-cols-2 gap-px bg-slate-100 sm:grid-cols-3 md:grid-cols-4">
          {entries.map((entry) => (
            <li key={entry.term} className="bg-white px-4 py-3">
              <p className="text-xs font-semibold text-slate-500">{entry.term}</p>
              <p className="mt-0.5 font-extrabold tracking-tight text-slate-950">
                {entry.meaning}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <dl className="divide-y divide-slate-100">
          {entries.map((entry) => (
            <div
              key={entry.term}
              className="grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-[minmax(11rem,16rem)_1fr] sm:gap-6"
            >
              <dt className="font-extrabold tracking-tight text-slate-950">
                {entry.term}
              </dt>
              <dd className="text-sm leading-relaxed text-slate-600">
                {entry.meaning}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
