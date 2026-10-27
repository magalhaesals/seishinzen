export interface FaixaAmarelaTechnique {
  romaji: string;
  description: string;
  /** When present, shown as a count prefix (e.g. "2×"). */
  count?: number;
}

export interface FaixaAmarelaDefense {
  number: number;
  title: string;
  techniques: FaixaAmarelaTechnique[];
}

export const FAIXA_AMARELA_PROGRAM = {
  belt: "Faixa Amarela",
  art: "Ju-Jitsu",
  title: "Programa Técnico",
  subtitle: "11 defesas do exame de Faixa Amarela",
} as const;

export const FAIXA_AMARELA_DEFENSES: FaixaAmarelaDefense[] = [
  {
    number: 1,
    title: "1ª Defesa",
    techniques: [
      {
        romaji: "TETTSUI TSUKI",
        description:
          "Golpe com a mão em martelo aos antebraços (desbloqueio/interceção).",
      },
      {
        romaji: "MIGI URAKEN JODAN",
        description: "Murro com as costas da mão direita à cara.",
      },
      {
        romaji: "MIGI MAE GERI GEDAN",
        description: "Pontapé frontal com o pé direito à coxa / joelho.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 2,
    title: "2ª Defesa",
    techniques: [
      {
        romaji: "MIGI MAWASHI GERI CHUDAN",
        description: "Pontapé circular direito à barriga / tronco.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 3,
    title: "3ª Defesa",
    techniques: [
      {
        romaji: "MIGI USHIRO HIGI ATE",
        description: "Cotovelada direita para trás.",
      },
      {
        romaji: "O GOSHI",
        description: "Grande projeção de anca.",
      },
      {
        romaji: "MOMO GATAME",
        description: "Luxação do braço com apoio da coxa.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 4,
    title: "4ª Defesa",
    techniques: [
      {
        romaji: "MIGI USHIRO HIGI ATE",
        description: "Cotovelada direita para trás.",
      },
      {
        romaji: "MIGI URAKEN GEDAN",
        description: "Murro com as costas da mão direita aos genitais.",
      },
      {
        romaji: "O GOSHI",
        description: "Grande projeção de anca.",
      },
      {
        romaji: "MOMO GATAME",
        description: "Luxação do braço com apoio da coxa.",
      },
      {
        romaji: "KOTE OSAE",
        description: "Luxação do pulso.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 5,
    title: "5ª Defesa",
    techniques: [
      {
        romaji: "TAI SABAKI",
        description: "Esquiva de corpo.",
      },
      {
        romaji: "MIGI NAGASHI UKE",
        description:
          "Bloqueio com a mão direita aberta para desviar o braço do agressor.",
      },
      {
        romaji: "HIDARI USHIRO HIGI ATE JODAN",
        description: "Cotovelada esquerda para trás à cara.",
      },
      {
        romaji: "KANNUKI GATAME",
        description:
          "Luxação em alavanca (chave ao cotovelo com imobilização do braço).",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 6,
    title: "6ª Defesa",
    techniques: [
      {
        romaji: "HIDARI NAGASHI UKE",
        description:
          "Bloqueio com a mão esquerda aberta para desviar o braço do agressor.",
      },
      {
        romaji: "HIDARI URAKEN JODAN",
        description: "Murro com as costas da mão esquerda à cara.",
      },
      {
        romaji: "KUZURE UDE GATAME (ou KANNUKI GATAME)",
        description:
          "Variante de luxação em alavanca / chave ao cotovelo.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 7,
    title: "7ª Defesa",
    techniques: [
      {
        romaji: "HIDARI MAE UDE UKE",
        description: "Defesa frontal com o braço esquerdo.",
      },
      {
        romaji: "MIGI SHUTÔ ATE JODAN",
        description: "Ataque com a mão direita em sabre ao pescoço.",
      },
      {
        romaji: "MIGI MAE HIZA GERI CHUDAN",
        description: "Joelhada com a perna direita para a frente ao plexo.",
      },
      {
        romaji: "WAKI GATAME",
        description: "Luxação / controlo do braço com a axila.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 8,
    title: "8ª Defesa",
    techniques: [
      {
        romaji: "MAWASHI MOROTE UKE",
        description: "Bloqueio circular duplo.",
      },
      {
        romaji: "MIGI URAKEN JODAN",
        description: "Murro à cara com as costas da mão direita.",
      },
      {
        romaji: "HIDARI MAE HIZA GERI CHUDAN",
        description:
          "Joelhadas consecutivas com a perna esquerda para a frente ao plexo.",
        count: 2,
      },
      {
        romaji: "WAKI GATAME",
        description: "Luxação / controlo do braço com a axila.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 9,
    title: "9ª Defesa",
    techniques: [
      {
        romaji: "HIDARI MAE UDE UKE",
        description: "Defesa frontal com o braço esquerdo.",
      },
      {
        romaji: "MIGI AGE TSUKI JODAN",
        description: "Murro direito ascendente ao plexo / queixo.",
      },
      {
        romaji: "O GOSHI",
        description: "Grande projeção de anca.",
      },
      {
        romaji: "MOMO GATAME",
        description: "Luxação do braço com apoio da coxa.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 10,
    title: "10ª Defesa",
    techniques: [
      {
        romaji: "HIDARI MAE UDE UKE",
        description: "Defesa frontal com o braço esquerdo.",
      },
      {
        romaji: "MIGI AGE TSUKI JODAN",
        description: "Murro direito ascendente ao plexo / queixo.",
      },
      {
        romaji: "O GOSHI",
        description: "Grande projeção de anca.",
      },
      {
        romaji: "MOMO GATAME",
        description: "Luxação do braço com apoio da coxa.",
      },
      {
        romaji: "KOTE OSAE",
        description: "Luxação do pulso.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
  {
    number: 11,
    title: "11ª Defesa",
    techniques: [
      {
        romaji: "HIDARI AGE UKE",
        description: "Defesa ascendente com o braço esquerdo.",
      },
      {
        romaji: "MIGI AGE TSUKI",
        description: "Murro ascendente direito.",
      },
      {
        romaji: "HIDARI YOKO UKEMI",
        description: "Queda lateral para a esquerda.",
      },
      {
        romaji: "MIGI FUMI KOMI",
        description: "Pontapé direito com o pé em sabre ao joelho.",
      },
      {
        romaji: "MIGI USHIRO GERI",
        description: "Pontapé direito à retaguarda aos genitais.",
      },
      {
        romaji: "KAMAE",
        description: "Retorno à posição de guarda.",
      },
    ],
  },
];
