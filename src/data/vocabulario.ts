export interface VocabEntry {
  term: string;
  meaning: string;
}

export interface VocabSection {
  id: string;
  title: string;
  /** Short line under the section title. */
  summary: string;
  /**
   * technique: termo japonês + definição em português
   * number: algarismo + leitura
   * phrase: português + japonês, como na ficha
   */
  kind: "technique" | "number" | "phrase";
  notes?: VocabEntry[];
  entries: VocabEntry[];
}

export const VOCABULARIO = {
  title: "Vocabulário para alunos",
  mark: "技",
  waza: "Waza",
  wazaGloss: "Forma, Técnica",
  note: "Nota introdutória. Cada escola (Ryuha) usa nomenclaturas próprias que podem variar de escola para escola.",
} as const;

export const ATEMI_WAZA = {
  id: "atemi-waza",
  title: "Atemi-Waza",
  meaning: "Formas de batimento em geral",
} as const;

export const VOCAB_SECTIONS: VocabSection[] = [
  {
    id: "te-waza",
    title: "Te-Waza",
    summary: "Formas de batimento com a mão",
    kind: "technique",
    entries: [
      {
        term: "Kizami Tsuki",
        meaning: "sem avanço, porque perna Dta. ou Esq. já está adiantada",
      },
      {
        term: "Oi Tsuki",
        meaning:
          "Murro directo à frente (tradicionalmente seria um movimento repentino ou súbito para a frente usando a anca como “mola” ou fazendo uma “virgula” no avanço, decidimos distinguir este movimento de um simples movimento frontal)",
      },
      {
        term: "Jun Tsuki",
        meaning: "Murro directo a frente com avanço",
      },
      {
        term: "Mawashi Tsuki",
        meaning: "Murro circular",
      },
      {
        term: "Age Tsuki",
        meaning: "Murro ascendente (em ascensão)",
      },
      {
        term: "Shuto Tsuki",
        meaning: "Mão cortante em sabre com o exterior de mão",
      },
      {
        term: "Haito Tsuki",
        meaning: "Ataque de mão aberta",
      },
      {
        term: "Teisho Tsuki",
        meaning: "Ataque com a palma da mão",
      },
      {
        term: "Tettsui Tsuki",
        meaning: "Ataque de mão em martelo",
      },
      {
        term: "Uraken Tsuki",
        meaning: "Murro com as costas da mão",
      },
      {
        term: "Iubi Até",
        meaning: "Ataque lateral rasgante ou frontal com os dedos",
      },
      {
        term: "Morote Tsuki",
        meaning: "Ataque duplo com punhos frontal",
      },
      {
        term: "Yama Tsuki",
        meaning: "Ataque duplo com punhos vertical",
      },
    ],
  },
  {
    id: "ashi-waza",
    title: "Ashi-Waza",
    summary: "Formas de batimento com as pernas e pés",
    kind: "technique",
    entries: [
      { term: "Mae Geri", meaning: "Pontapé frontal" },
      {
        term: "O Mae Geri",
        meaning: "Pontapé com a perna que esta a frente.",
      },
      {
        term: "Mae Geri Keage",
        meaning:
          "Pontapé frontal com a base da frente do pé e anca imóvel no sentido do avanço (só com toque; o contacto é com a Koshi)",
      },
      {
        term: "Mae Geri Keikomi",
        meaning:
          "Pontapé frontal de perfuração com a palma do pé e avanço da anca",
      },
      { term: "Ushiro Geri", meaning: "Pontapé atrás" },
      { term: "Mawashi Geri", meaning: "Pontapé circular" },
      { term: "Yoko Geri", meaning: "Pontapé lateral" },
      {
        term: "Yoko Geri Keage",
        meaning: "Pontapé lateral com a planta do pé",
      },
      {
        term: "Yoko Geri Keikomi",
        meaning: "Pontapé lateral com pé em sabre",
      },
      {
        term: "Mikazuki Geri",
        meaning: "Pontapé de fora para dentro",
      },
      {
        term: "Ura Mikasuki Geri",
        meaning: "Pontapé circular de dentro para fora",
      },
      {
        term: "Ushiro Ura Mawashi Geri",
        meaning: "Pontapé circular atrás",
      },
      { term: "Kakato Geri", meaning: "Pontapé com o calcanhar" },
      { term: "Ura Geri", meaning: "Pontapé em gancho ou contrário" },
      { term: "Kin Geri", meaning: "Pontapé aos genitais" },
      {
        term: "Fumi Komi",
        meaning: "pontapé com pé em sabre (11ª do amarelo)",
      },
      { term: "Mae Tobi Geri", meaning: "Pontapé à frente com salto" },
    ],
  },
  {
    id: "higi-waza",
    title: "Higi-Waza",
    summary: "Formas de batimento com o cotovelo",
    kind: "technique",
    entries: [
      { term: "Mae Higi Até", meaning: "Cotovelada à frente" },
      { term: "Ushiro Higi Até", meaning: "Cotovelada atrás" },
      { term: "Yoko Higi Até", meaning: "Cotovelada lateral" },
      { term: "Mawashi Higi Até", meaning: "Cotovelada circular" },
      {
        term: "Otoshi Higi Até",
        meaning: "Cotovelada de cima para baixo",
      },
    ],
  },
  {
    id: "hiza-waza",
    title: "Hiza-Waza",
    summary: "Formas de batimento com o joelho",
    kind: "technique",
    entries: [
      { term: "Mae Hiza Geri", meaning: "Joelhada à frente" },
      { term: "Mawashi Hiza Geri", meaning: "Joelhada circular" },
    ],
  },
  {
    id: "atama-waza",
    title: "Atama-Waza",
    summary: "Formas de batimento com a cabeça",
    kind: "technique",
    entries: [
      { term: "Mae Atama", meaning: "Cabeçada à frente" },
      { term: "Ushiro Atama", meaning: "Cabeçada atrás" },
      { term: "Mawashi Atama", meaning: "Cabeçada circular" },
    ],
  },
  {
    id: "kata-waza",
    title: "Kata-Waza",
    summary: "Formas de batimento com o ombro",
    kind: "technique",
    entries: [
      { term: "Mae Kata", meaning: "Batimento com o ombro à frente" },
      { term: "Ushiro Kata", meaning: "Batimento com o ombro atrás" },
    ],
  },
  {
    id: "te-uke-waza",
    title: "Te Uke Waza",
    summary: "Bloqueios com o braço e com a mão",
    kind: "technique",
    entries: [
      {
        term: "Aiwan Uwe",
        meaning: "Varrimento baixo de fora para dentro",
      },
      {
        term: "Age-uke",
        meaning:
          "Bloqueio para ataque de garrafa ou de faca a defender abaixo do cotovelo, 1ª e 2º bloqueio da kata.",
      },
      {
        term: "Ushi-ude-uke",
        meaning:
          "Bloqueio efectuado do interior para o exterior com o braço em 90º graus (7ª e 8ª da kata).",
      },
      {
        term: "Soto-ude-uke",
        meaning:
          "Bloqueio efectuado do exterior para o interior com o braço em 90º. (5º e 6º da kata).",
      },
      {
        term: "Shuto-uke",
        meaning: "Bloqueio com o exterior da mão. (mão em sabre)",
      },
      {
        term: "Nagashi-uke",
        meaning:
          "Bloqueio para desviar o braço do uke com a mão aberta (bloqueio da 5º técnica de amarelo).",
      },
      {
        term: "Gedan-Barai uke",
        meaning:
          "Varrimento Baixo; Bloqueio com o antebraço a nível baixo, 3º e 4º Bloqueio da kata.",
      },
      {
        term: "Mae-ude-uke",
        meaning: "Defesa com braço frontal (dragão).",
      },
      {
        term: "Morote-mawashi-uke",
        meaning:
          "Bloqueio circular duplo (bloqueio da 8º técnica de amarelo).",
      },
      {
        term: "Juji-Ude-uke",
        meaning:
          "Bloqueio com os braços cruzados, 13º e 14º defesa da kata.",
      },
    ],
  },
  {
    id: "ashi-uke-waza",
    title: "Ashi Uke Waza",
    summary: "Bloqueios com o pé",
    kind: "technique",
    entries: [
      {
        term: "Sokutei-osae-uke",
        meaning:
          "Bloqueio de um pontapé como se fosse um gedan geri com a planta do pé.",
      },
      {
        term: "Sokuto-osae-uke",
        meaning: "Bloqueio com a parte lateral do pé, lâmina do pé.",
      },
      {
        term: "Mikasuki-geri-uke",
        meaning:
          "Bloqueio com pontapé exterior para o interior (da direita para a esquerda).",
      },
      {
        term: "Ura-mikasuki-geri-uke",
        meaning:
          "Bloqueio com pontapé exterior (da esquerda para a direita).",
      },
    ],
  },
  {
    id: "ukemi-waza",
    title: "Ukemi Waza",
    summary: "Quedas",
    kind: "technique",
    notes: [
      {
        term: "Zempo",
        meaning: "Queda Enrolada; Movimento com Circulação",
      },
      {
        term: "Kaiten",
        meaning: "Quando há enrolamento com levantamento",
      },
      { term: "Mawari", meaning: "Aplicação marcial" },
    ],
    entries: [
      { term: "Mae-ukemi", meaning: "Queda para a frente." },
      {
        term: "Zempo-ukemi",
        meaning:
          "Queda a frente com enrolamento (após a queda permanece no chão).",
      },
      {
        term: "Zempo-ukemi-Kaiten-mawari",
        meaning:
          "Enrolamento para a frente levantando e com aplicação marcial.",
      },
      {
        term: "Mae-ukemi-Mawari",
        meaning: "Queda a frente com aplicação marcial.",
      },
      { term: "Ushiro-ukemi", meaning: "Queda para trás." },
      {
        term: "Ushiro-ukemi-Mawari",
        meaning:
          "Queda para trás com aplicação marcial (se houver levantamento será Ushiro Ukemi kaiten Mawari)",
      },
      {
        term: "Migi-yoko-ukemi",
        meaning: "Queda lateral para o lado direito.",
      },
      {
        term: "Migi-yoko Ukemi-Mawari",
        meaning: "Queda lateral direita com aplicação marcial.",
      },
      {
        term: "Hidari-yoko-ukemi",
        meaning: "Queda lateral para a esquerda.",
      },
      {
        term: "Hidari-yoko-ukemi-Mawari",
        meaning: "Queda lateral esquerda com aplicação marcial.",
      },
    ],
  },
  {
    id: "numeracao",
    title: "Numeração",
    summary: "Leituras usadas na contagem",
    kind: "number",
    entries: [
      { term: "1", meaning: "Ich" },
      { term: "2", meaning: "Ni" },
      { term: "3", meaning: "San" },
      { term: "4", meaning: "Shi" },
      { term: "5", meaning: "Go" },
      { term: "6", meaning: "Roku" },
      { term: "7", meaning: "Sich" },
      { term: "8", meaning: "Hach" },
      { term: "9", meaning: "Kyu" },
      { term: "10", meaning: "Ju-(Dju)" },
      { term: "11", meaning: "Ju Ich" },
      { term: "12", meaning: "Ju Ni" },
      { term: "13", meaning: "Ju San" },
      { term: "20", meaning: "Ni Ju" },
      { term: "21", meaning: "Ni Ju Ich" },
      { term: "22", meaning: "Ni Ju Ni" },
      { term: "23", meaning: "Ni Ju San" },
      { term: "30", meaning: "San Ju" },
      { term: "40", meaning: "Shi Ju" },
      { term: "50", meaning: "Go Ju" },
      { term: "60", meaning: "Roku Ju" },
      { term: "70", meaning: "Shishi Ju" },
      { term: "80", meaning: "Hashi Ju" },
      { term: "90", meaning: "Kyu Ju" },
      { term: "100", meaning: "Hyaku" },
      { term: "200", meaning: "Ni Hyaku" },
      { term: "300", meaning: "San Hyaku" },
      { term: "1000", meaning: "Sen" },
      { term: "2000", meaning: "Ni Sen" },
      { term: "3000", meaning: "San Sen" },
      { term: "10000", meaning: "Man" },
    ],
  },
  {
    id: "termos",
    title: "Termos mais comuns",
    summary: "Cumprimentos e pedidos de aula",
    kind: "phrase",
    entries: [
      { term: "Bom dia", meaning: "Ohayo ou Ohayo Gosaimasu" },
      { term: "Olá", meaning: "Konnichiwa" },
      { term: "Boa tarde", meaning: "Kondanwa" },
      { term: "Boa noite", meaning: "Oyasuminasai" },
      { term: "Adeus", meaning: "Soyonara" },
      { term: "Bem…então até à vista", meaning: "Dewa Mata" },
      { term: "Obrigado", meaning: "Arigato" },
      { term: "Muito obrigado", meaning: "Arigato Gozaimasta ou Domo" },
      { term: "Esteja à vontade", meaning: "Do Itashimashite" },
      { term: "Desculpa-me", meaning: "Gomennasai" },
      { term: "Com licença", meaning: "Sumimasen" },
      { term: "Não percebo", meaning: "Wakarimasen" },
      { term: "Mais uma vez por favor", meaning: "Mo Ichido Onegaishimasu" },
      { term: "Mais devagar por favor", meaning: "Yukkuri Onegaishimasu" },
    ],
  },
];

export function countVocabEntries(sections: VocabSection[] = VOCAB_SECTIONS) {
  return sections.reduce(
    (total, section) =>
      total + section.entries.length + (section.notes?.length ?? 0),
    0,
  );
}
