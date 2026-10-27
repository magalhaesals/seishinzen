export interface UkemiFall {
  number: string;
  romaji: string;
  romajiAlt?: string;
  translationPt: string;
  detail: string;
}

export const UKEMI_PROGRAM = {
  title: "Ukemi",
  kanji: "受身",
  subtitle: "As quedas fundamentais",
} as const;

export const UKEMI_FALLS: UkemiFall[] = [
  {
    number: "01",
    romaji: "USHIRO-UKEMI",
    translationPt: "Queda para trás",
    detail:
      "Queda controlada para trás, com o queixo encostado ao peito e as mãos a bater no solo para dispersar o impacto.",
  },
  {
    number: "02",
    romaji: "YOKO-UKEMI",
    translationPt: "Queda para o lado",
    detail:
      "Queda lateral com o braço do lado da queda a bater no solo e o corpo alinhado para proteger a cabeça e o tronco.",
  },
  {
    number: "03",
    romaji: "MAE-UKEMI",
    translationPt: "Queda para frente",
    detail:
      "Queda frontal amortecida pelos antebraços e pontas dos pés, mantendo o corpo elevado e a cabeça protegida.",
  },
  {
    number: "04",
    romaji: "MAE-MAWARI-UKEMI",
    romajiAlt: "ZENPŌ-KAITEN-UKEMI",
    translationPt: "Rolamento para frente",
    detail:
      "Rolamento frontal sobre o ombro, convertendo a queda em movimento contínuo até recuperar a postura.",
  },
];

export const UKEMI_MAIN_ILLUSTRATION =
  "/illustrations/ukemi/ukemi_quatro_quedas.jpg";
