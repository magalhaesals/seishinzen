import type { Metadata } from "next";
import { VocabularioBrowser } from "./VocabularioBrowser";

export const metadata: Metadata = {
  title: "Vocabulário para alunos — Ju-Jitsu",
  description:
    "Vocabulário de Waza para alunos de Ju-Jitsu: atemi, defesas, ukemi, numeração e termos de aula.",
};

export default function VocabularioPage() {
  return <VocabularioBrowser />;
}
