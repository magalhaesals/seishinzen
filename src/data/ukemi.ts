export interface UkemiFall {
  number: string;
  romaji: string;
  romajiAlt?: string;
  kanji: string;
  translationPt: string;
  detail: string;
  mainIllustration: string;
  sequenceIllustration?: string;
  steps: {
    stepNumber: number;
    phaseTitle: string;
    detail: string;
  }[];
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
    kanji: "後ろ受身",
    translationPt: "Queda para trás",
    detail:
      "Queda controlada para trás, com o queixo encostado ao peito e as mãos a bater no solo para dispersar o impacto.",
    mainIllustration: "/illustrations/ukemi/01_ushiro_ukemi.jpg",
    sequenceIllustration: "/illustrations/ukemi/seq_ushiro_ukemi.jpg",
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Postura inicial",
        detail: "Em pé, braços estendidos à frente na linha dos ombros.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Descida controlada",
        detail: "Agacha e senta para trás mantendo os braços à frente.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Rolamento dorsal",
        detail: "Rola sobre as costas com o queixo ao peito e joelhos recolhidos.",
      },
      {
        stepNumber: 4,
        phaseTitle: "Batimento e absorção",
        detail:
          "As mãos batem no solo em ~45° e as pernas elevam-se para dispersar o impacto.",
      },
    ],
  },
  {
    number: "02",
    romaji: "YOKO-UKEMI",
    kanji: "横受身",
    translationPt: "Queda para o lado",
    detail:
      "Queda lateral com o braço do lado da queda a bater no solo e o corpo alinhado para proteger a cabeça e o tronco.",
    mainIllustration: "/illustrations/ukemi/02_yoko_ukemi.jpg",
    sequenceIllustration: "/illustrations/ukemi/seq_yoko_ukemi.jpg",
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Cruzamento e preparação",
        detail:
          "Peso na perna de apoio; a outra perna cruza à frente e o braço oposto estende-se atravessando o peito.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Descida lateral",
        detail:
          "Agacha sobre a perna de apoio, mantendo o braço alinhado para o batimento lateral.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Queda e batimento",
        detail:
          "Cai de lado; o braço do lado da queda bate no solo enquanto as pernas elevam-se.",
      },
      {
        stepNumber: 4,
        phaseTitle: "Posição final",
        detail:
          "Corpo de lado, braço estendido no solo, cabeça protegida e pernas estabilizadas.",
      },
    ],
  },
  {
    number: "03",
    romaji: "MAE-UKEMI",
    kanji: "前受身",
    translationPt: "Queda para frente",
    detail:
      "Queda frontal amortecida pelos antebraços e pontas dos pés, mantendo o corpo elevado e a cabeça protegida.",
    mainIllustration: "/illustrations/ukemi/03_mae_ukemi.jpg",
    sequenceIllustration: "/illustrations/ukemi/seq_mae_ukemi.jpg",
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Guarda frontal",
        detail:
          "Em pé, pés juntos; antebraços à frente do peito com as palmas viradas para a frente.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Inclinação à frente",
        detail:
          "Inclina o corpo em bloco mantendo os braços na linha de proteção.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Descida em diagonal",
        detail:
          "Projeta-se para a frente sobre as pontas dos pés, levando os antebraços ao solo.",
      },
      {
        stepNumber: 4,
        phaseTitle: "Amortecimento final",
        detail:
          "Corpo elevado pelos antebraços e pontas dos pés; cabeça virada de lado, sem bater o rosto.",
      },
    ],
  },
  {
    number: "04",
    romaji: "MAE-MAWARI-UKEMI",
    romajiAlt: "ZENPŌ-KAITEN-UKEMI",
    kanji: "前回り受身",
    translationPt: "Rolamento para frente",
    detail:
      "Rolamento frontal sobre o ombro, convertendo a queda em movimento contínuo até recuperar a postura.",
    mainIllustration: "/illustrations/ukemi/04_mae_mawari_ukemi.jpg",
    steps: [],
  },
];

export const UKEMI_MAIN_ILLUSTRATION =
  "/illustrations/ukemi/ukemi_quatro_quedas.jpg";
