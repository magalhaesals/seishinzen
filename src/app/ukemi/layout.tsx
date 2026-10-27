import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ukemi — Quedas Fundamentais (Ju-Jitsu)",
  description:
    "Ilustração das quedas fundamentais do Ju-Jitsu: Ushiro, Yoko, Mae e Mae-Mawari Ukemi.",
};

export default function UkemiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
