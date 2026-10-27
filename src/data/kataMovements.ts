export interface KataMovement {
  number: number;
  name: string;
  japaneseName: string;
  sideLabel: string;
  sideCode: "hidari" | "migi" | "juji-gedan" | "juji-jodan";
  stance: string;
  level: "Jodan" | "Chudan" | "Gedan";
  trajectory: string;
  contactSurface: string;
  summary: string;
}

export interface KataTechniqueGroup {
  id: string;
  groupTitle: string;
  movementRange: string;
  romaji: string;
  kanji: string;
  translationPt: string;
  levelBadge: string;
  wasMissingInOriginalDoc: boolean;
  originalIssueNote: string;
  mainIllustration: string;
  sequenceIllustration: string;
  originalMediaFiles: string[];
  /** When true, show one technique illustration only (no left/right pair). */
  singleIllustration?: boolean;
  movements: KataMovement[];
  steps: {
    stepNumber: number;
    phaseTitle: string;
    detail: string;
  }[];
  biomechanicsKeyPoints: string[];
}

export const KATA_UDE_UKE_GROUPS: KataTechniqueGroup[] = [
  {
    id: "age-uke",
    groupTitle: "1 & 2. AGE-UKE",
    movementRange: "Movimentos 1 e 2",
    romaji: "Age-Uke",
    kanji: "揚げ受け",
    translationPt: "Defesa Ascendente com o Antebraço (Nível Alto)",
    levelBadge: "Jodan (Alto)",
    wasMissingInOriginalDoc: false,
    singleIllustration: true,
    originalIssueNote:
      "Ilustração única do Age-Uke, alinhada à referência correcta: punho FECHADO, antebraço à frente da testa sem cobrir os olhos. (Movimentos 1 e 2 do kata são o mesmo movimento nos dois lados.)",
    mainIllustration: "/illustrations/01_02_age_uke.jpg",
    sequenceIllustration: "/illustrations/seq_age_uke.jpg",
    originalMediaFiles: [
      "/original-media/image1.jpeg",
      "/original-media/image2.jpeg",
      "/original-media/age_uke_referencia_tiktok.jpg",
    ],
    movements: [
      {
        number: 1,
        name: "1. AGE-UKE",
        japaneseName: "Age-Uke / Jodan Uke",
        sideLabel: "Lado esquerdo no kata (mesma técnica)",
        sideCode: "hidari",
        stance: "Zenkutsu-Dachi (Base avançada)",
        level: "Jodan",
        trajectory: "Ascendente em arco pelo eixo central, com rotação do antebraço",
        contactSurface: "Face radial/externa do antebraço (punho fechado)",
        summary:
          "Defesa ascendente com punho fechado: o antebraço sobe em arco e trava à frente da testa (cerca de um punho de distância), sem cobrir os olhos. O outro punho recolhe em hikite na cintura.",
      },
      {
        number: 2,
        name: "2. AGE-UKE",
        japaneseName: "Age-Uke / Jodan Uke",
        sideLabel: "Lado direito no kata (mesma técnica — sem ilustração separada)",
        sideCode: "migi",
        stance: "Zenkutsu-Dachi (Base avançada)",
        level: "Jodan",
        trajectory: "Ascendente em arco pelo eixo central, com rotação do antebraço",
        contactSurface: "Face radial/externa do antebraço (punho fechado)",
        summary:
          "Mesmo Age-Uke do movimento 1, executado do outro lado. Ilustração única partilhada — punho fechado, antebraço à frente da testa, olhos livres.",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Cruzamento (Kamae)",
        detail: "Os antebraços cruzam à frente do peito com ambos os punhos fechados; o braço que vai bloquear fica por fora.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Elevação e Hikite",
        detail: "O antebraço de defesa sobe em arco enquanto o outro punho puxa para a cintura; o antebraço roda no final do curso.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Kime (posição final)",
        detail: "Punho fechado à frente da testa, antebraço inclinado ~30–45°, olhos livres e visíveis por baixo do braço; hikite completo na cintura.",
      },
    ],
    biomechanicsKeyPoints: [
      "Punho FECHADO na mão que sobe — nunca mão aberta.",
      "Antebraço à frente da testa, a cerca de um punho da cabeça — NÃO cobrir os olhos.",
      "Inclinação ~30–45° para o ataque deslizar para cima/fora; cotovelo mais baixo que o punho.",
      "O hikite (punho oposto na cintura, palma para cima) termina no mesmo instante do kime.",
    ],
  },
  {
    id: "gedan-barai-uke",
    groupTitle: "3 & 4. GEDAN BARAI UKE",
    movementRange: "Movimentos 3 e 4",
    romaji: "Gedan Barai Uke",
    kanji: "下段払い受け",
    translationPt: "Defesa Descendente Varrendo com o Antebraço (Nível Baixo)",
    levelBadge: "Gedan (Baixo)",
    wasMissingInOriginalDoc: false,
    originalIssueNote:
      "No ficheiro original estava grafado 'GEDEAN BARAI UKE' com duas figuras de estilos heterogéneos. Corrigido e redesenhado com o mesmo praticante para os movimentos 3 (Esquerda) e 4 (Direita) mais o diagrama de 4 fases.",
    mainIllustration: "/illustrations/03_04_gedan_barai_uke.jpg",
    sequenceIllustration: "/illustrations/seq_gedan_barai.jpg",
    originalMediaFiles: ["/original-media/image3.jpeg", "/original-media/image4.jpeg"],
    movements: [
      {
        number: 3,
        name: "3. GEDAN BARAI UKE (Esquerda)",
        japaneseName: "Hidari Gedan Barai Uke",
        sideLabel: "Esquerda (Hidari)",
        sideCode: "hidari",
        stance: "Hidari Zenkutsu-Dachi (Base avançada esquerda)",
        level: "Gedan",
        trajectory: "Descendente diagonal do ombro direito até acima do joelho esquerdo",
        contactSurface: "Borda externa (lado do dedo mínimo / ulna) do antebraço esquerdo",
        summary:
          "Varredura baixa com o braço esquerdo partindo junto à orelha/ombro direito e descendo ao longo do tronco para desviar ataques ao abdómen ou virilha.",
      },
      {
        number: 4,
        name: "4. GEDAN BARAI UKE (Direita)",
        japaneseName: "Migi Gedan Barai Uke",
        sideLabel: "Direita (Migi)",
        sideCode: "migi",
        stance: "Migi Zenkutsu-Dachi (Base avançada direita)",
        level: "Gedan",
        trajectory: "Descendente diagonal do ombro esquerdo até acima do joelho direito",
        contactSurface: "Borda externa (ulnar) do antebraço direito",
        summary:
          "Varredura baixa com o braço direito partindo do ombro esquerdo e finalizando a um punho de distância acima do joelho direito, com o punho esquerdo em hikite.",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Armação junto ao Ombro Oposto",
        detail: "O punho bloqueador sobe fechado próximo à orelha/ombro oposto; o braço guia aponta para baixo à frente.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Cruzamento no Peito",
        detail: "O antebraço desliza por cima do braço guia enquanto os quadris começam a girar.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Varredura Descendente",
        detail: "Ação de tesoura entre o braço que desce varrendo e o braço que recolhe à cintura.",
      },
      {
        stepNumber: 4,
        phaseTitle: "Travamento sobre o Joelho",
        detail: "O punho para a cerca de 10-15 cm acima do joelho avançado, protegendo toda a zona baixa (Gedan).",
      },
    ],
    biomechanicsKeyPoints: [
      "Não deixar o punho ultrapassar excessivamente a linha externa da coxa para não abrir a linha central.",
      "Manter o tronco vertical e evitar inclinar os ombros para a frente durante a varredura.",
    ],
  },
  {
    id: "soto-ude-uke",
    groupTitle: "5 & 6. SOTO-UDE-UKE",
    movementRange: "Movimentos 5 e 6",
    romaji: "Soto-Ude-Uke",
    kanji: "外腕受け",
    translationPt: "Defesa de Fora para Dentro com o Antebraço (Nível Médio)",
    levelBadge: "Chudan (Médio)",
    wasMissingInOriginalDoc: false,
    originalIssueNote:
      "O documento original usava um GIF verde néon com fundo preto e um desenho de baixa resolução. Substituído por ilustrações técnicas limpas em fundo branco com setas vetoriais vermelhas.",
    mainIllustration: "/illustrations/05_06_soto_ude_uke.jpg",
    sequenceIllustration: "/illustrations/seq_soto_ude_uke.jpg",
    originalMediaFiles: ["/original-media/image5.gif", "/original-media/image6.gif"],
    movements: [
      {
        number: 5,
        name: "5. SOTO-UDE-UKE (Esquerda)",
        japaneseName: "Hidari Soto-Ude-Uke",
        sideLabel: "Esquerda (Hidari)",
        sideCode: "hidari",
        stance: "Hidari Zenkutsu-Dachi (Base avançada esquerda)",
        level: "Chudan",
        trajectory: "Circular de fora para dentro à altura do peito",
        contactSurface: "Face radial do antebraço esquerdo",
        summary:
          "Bloqueio médio de fora para dentro com o antebraço esquerdo dobrado a 90°, punho na altura do ombro e palma voltada para o rosto.",
      },
      {
        number: 6,
        name: "6. SOTO-UDE-UKE (Direita)",
        japaneseName: "Migi Soto-Ude-Uke",
        sideLabel: "Direita (Migi)",
        sideCode: "migi",
        stance: "Migi Zenkutsu-Dachi (Base avançada direita)",
        level: "Chudan",
        trajectory: "Circular de fora para dentro à altura do peito",
        contactSurface: "Face radial do antebraço direito",
        summary:
          "Bloqueio médio de fora para dentro com o antebraço direito varrendo a linha central do tronco, com o punho esquerdo recolhido na cintura.",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Extensão do Braço Guia",
        detail: "O braço oposto aponta para a frente na altura do plexo solar enquanto o braço de defesa arma ao lado da cabeça.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Arco Externo-Interno",
        detail: "O cotovelo avança conduzindo o antebraço num arco de fora para dentro.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Torção do Rádio e Quadril",
        detail: "O antebraço gira para dentro simultaneamente à retração do hikite.",
      },
      {
        stepNumber: 4,
        phaseTitle: "Posição Vertical a 90°",
        detail: "Antebraço vertical diante do peito, cotovelo a um punho das costelas e punho na altura do ombro.",
      },
    ],
    biomechanicsKeyPoints: [
      "Conectar o movimento do Grande Peitoral e Dorsal com o fecho do quadril no instante do impacto.",
      "O punho termina alinhado com o ombro e o cotovelo mantém um ângulo firme de 90 graus.",
    ],
  },
  {
    id: "uchi-ude-uke",
    groupTitle: "7 & 8. UCHI-UDE-UKE",
    movementRange: "Movimentos 7 e 8",
    romaji: "Uchi-Ude-Uke",
    kanji: "内腕受け",
    translationPt: "Defesa de Dentro para Fora com o Antebraço (Nível Médio)",
    levelBadge: "Chudan (Médio)",
    wasMissingInOriginalDoc: false,
    originalIssueNote:
      "O manual original possuía apenas uma tira em baixa resolução. Agora inclui o painel duplo comparativo (7. Esquerda e 8. Direita) e a sequência detalhada de 4 passos.",
    mainIllustration: "/illustrations/07_08_uchi_ude_uke.jpg",
    sequenceIllustration: "/illustrations/seq_uchi_ude_uke.jpg",
    originalMediaFiles: ["/original-media/image7.jpeg"],
    movements: [
      {
        number: 7,
        name: "7. UCHI-UDE-UKE (Esquerda)",
        japaneseName: "Hidari Uchi-Ude-Uke",
        sideLabel: "Esquerda (Hidari)",
        sideCode: "hidari",
        stance: "Hidari Zenkutsu-Dachi (Base avançada esquerda)",
        level: "Chudan",
        trajectory: "De dentro (sob a axila direita) para fora à altura do peito",
        contactSurface: "Face externa/ulnar-radial do antebraço esquerdo",
        summary:
          "O antebraço esquerdo parte recolhido sob a axila direita e projeta-se de dentro para fora para abrir a guarda ou desviar um ataque direto ao tronco.",
      },
      {
        number: 8,
        name: "8. UCHI-UDE-UKE (Direita)",
        japaneseName: "Migi Uchi-Ude-Uke",
        sideLabel: "Direita (Migi)",
        sideCode: "migi",
        stance: "Migi Zenkutsu-Dachi (Base avançada direita)",
        level: "Chudan",
        trajectory: "De dentro (sob a axila esquerda) para fora à altura do peito",
        contactSurface: "Face externa do antebraço direito",
        summary:
          "O antebraço direito parte sob a axila esquerda e expande-se de dentro para fora até formar 90° na altura do ombro, com punho esquerdo em hikite.",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Postura Inicial",
        detail: "Corpo relaxado preparando o cruzamento interno dos braços.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Câmara Sob a Axila Oposta",
        detail: "O punho bloqueador posiciona-se sob a axila oposta com palma para baixo; o braço guia estende-se à frente.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Avanço e Desenrolar Interno",
        detail: "Ao firmar a base, o antebraço sai por dentro do braço guia num arco ascendente e lateral.",
      },
      {
        stepNumber: 4,
        phaseTitle: "Expansão Final (Kime)",
        detail: "O antebraço trava a 90° com punho na altura do ombro e palma voltada para o praticante.",
      },
    ],
    biomechanicsKeyPoints: [
      "Manter o cotovelo próximo ao eixo central durante a saída para não telegrafar o movimento.",
      "A rotação do quadril em hanmi (meio-perfil) amplifica a força de abertura de dentro para fora.",
    ],
  },
  {
    id: "mae-ude-uke",
    groupTitle: "9 & 10. MAE-UDE-UKE",
    movementRange: "Movimentos 9 e 10",
    romaji: "Mae-Ude-Uke",
    kanji: "前腕受け",
    translationPt: "Defesa Frontal Direta com o Antebraço (Linha Central)",
    levelBadge: "Chudan Frontal",
    wasMissingInOriginalDoc: true,
    originalIssueNote:
      "EM FALTA NO ORIGINAL: Os movimentos 9 e 10 (MAE-UDE-UKE) estavam listados no texto do DOCX original mas não tinham nenhuma ilustração. Foram integralmente desenhados e adicionados!",
    mainIllustration: "/illustrations/09_10_mae_ude_uke.jpg",
    sequenceIllustration: "/illustrations/seq_mae_ude_uke.jpg",
    originalMediaFiles: [],
    movements: [
      {
        number: 9,
        name: "9. MAE-UDE-UKE (Esquerda)",
        japaneseName: "Hidari Mae-Ude-Uke",
        sideLabel: "Esquerda (Hidari)",
        sideCode: "hidari",
        stance: "Hidari Zenkutsu-Dachi (Base avançada esquerda)",
        level: "Chudan",
        trajectory: "Projeção frontal direta na linha média do tórax",
        contactSurface: "Estrutura frontal do antebraço esquerdo",
        summary:
          "O antebraço esquerdo avança diretamente na linha central (Mae) formando uma barreira vertical sólida diante do peito para interceptar o ataque de frente.",
      },
      {
        number: 10,
        name: "10. MAE-UDE-UKE (Direita)",
        japaneseName: "Migi Mae-Ude-Uke",
        sideLabel: "Direita (Migi)",
        sideCode: "migi",
        stance: "Migi Zenkutsu-Dachi (Base avançada direita)",
        level: "Chudan",
        trajectory: "Projeção frontal direta na linha média do tórax",
        contactSurface: "Estrutura frontal do antebraço direito",
        summary:
          "O antebraço direito projeta-se diretamente para a frente protegendo o eixo central com o cotovelo fletido a 90° e punho esquerdo recolhido no quadril.",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Guarda Equilibrada",
        detail: "Foco na linha central do adversário com mão guia à frente.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Alinhamento do Antebraço",
        detail: "O antebraço defensor alinha-se verticalmente no centro do tronco.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Impulso Frontal (Mae)",
        detail: "Avanço estrutural do antebraço diretamente para a frente ocupando o espaço do ataque.",
      },
      {
        stepNumber: 4,
        phaseTitle: "Bloqueio Sólido no Centro",
        detail: "Antebraço estabilizado na linha média com tração simultânea do hikite.",
      },
    ],
    biomechanicsKeyPoints: [
      "A força é projetada para a frente a partir da conexão entre a perna de trás, o quadril e a escápula.",
      "Impede que o ataque do adversário ganhe velocidade ao interceptá-lo na origem.",
    ],
  },
  {
    id: "mawashi-ude-uke",
    groupTitle: "11 & 12. MAWASHI-UDE-UKE",
    movementRange: "Movimentos 11 e 12",
    romaji: "Mawashi-Ude-Uke",
    kanji: "回し腕受け",
    translationPt: "Defesa Circular Envolvente com o Antebraço",
    levelBadge: "Circular (Mawashi)",
    wasMissingInOriginalDoc: true,
    originalIssueNote:
      "EM FALTA NO ORIGINAL: Os movimentos 11 e 12 (MAWASHI-UDE-UKE) também não possuíam nenhuma ilustração no documento original. Foram integralmente criados com diagramas de trajetória circular!",
    mainIllustration: "/illustrations/11_12_mawashi_ude_uke.jpg",
    sequenceIllustration: "/illustrations/seq_mawashi_ude_uke.jpg",
    originalMediaFiles: [],
    movements: [
      {
        number: 11,
        name: "11. MAWASHI-UDE-UKE (Esquerda)",
        japaneseName: "Hidari Mawashi-Ude-Uke",
        sideLabel: "Esquerda (Hidari)",
        sideCode: "hidari",
        stance: "Hidari Dachi (Base estável esquerda)",
        level: "Chudan",
        trajectory: "Arco circular completo (360° / envolvente) com o antebraço esquerdo",
        contactSurface: "Antebraço e bordo da mão em rotação contínua",
        summary:
          "Defesa circular executada pelo lado esquerdo, descrevendo um giro amplo para absorver, envolver e desviar o ataque sem colisão rígida.",
      },
      {
        number: 12,
        name: "12. MAWASHI-UDE-UKE (Direita)",
        japaneseName: "Migi Mawashi-Ude-Uke",
        sideLabel: "Direita (Migi)",
        sideCode: "migi",
        stance: "Migi Dachi (Base estável direita)",
        level: "Chudan",
        trajectory: "Arco circular completo (360° / envolvente) com o antebraço direito",
        contactSurface: "Antebraço direito em rotação fluida",
        summary:
          "Defesa circular executada pelo lado direito, utilizando o princípio 'Ju' do Ju-Jitsu para redirecionar a força do oponente em espiral.",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Cruzamento Inferior",
        detail: "As mãos passam próximas ao baixo-ventre (tanden) iniciando o movimento circular.",
      },
      {
        stepNumber: 2,
        phaseTitle: "Elevação em Arco",
        detail: "O antebraço sobe lateralmente limpando a linha alta e média.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Giro de Pulso e Antebraço",
        detail: "Rotação contínua que envolve o braço atacante e desvia o seu eixo de força.",
      },
      {
        stepNumber: 4,
        phaseTitle: "Projeção e Controle",
        detail: "Finalização com o braço da frente controlando a linha externa e a outra mão protegendo o centro.",
      },
    ],
    biomechanicsKeyPoints: [
      "Manter os ombros relaxados para permitir uma trajetória perfeitamente redonda e fluida.",
      "Ideal no Ju-Jitsu para transicionar diretamente do bloqueio circular para o agarre (kumi-kata) ou chave de braço.",
    ],
  },
  {
    id: "juji-ude-uke",
    groupTitle: "13 & 14. JUJI-UDE-UKE (GEDAN & JODAN)",
    movementRange: "Movimentos 13 e 14",
    romaji: "Juji-Ude-Uke",
    kanji: "十字腕受け",
    translationPt: "Defesa em Cruz ('X') Baixa em Joelho e Alta em Pé",
    levelBadge: "Gedan & Jodan",
    wasMissingInOriginalDoc: false,
    originalIssueNote:
      "O documento original usava um desenho azul sem rosto para o 13 e um GIF invertido a preto com ruído cromático para o 14. Agora ambos têm ilustrações limpas, nítidas e com o mesmo praticante.",
    mainIllustration: "/illustrations/13_14_juji_ude_uke.jpg",
    sequenceIllustration: "/illustrations/seq_juji_ude_uke.jpg",
    originalMediaFiles: ["/original-media/image8.png", "/original-media/image9.png"],
    movements: [
      {
        number: 13,
        name: "13. JUJI-UDE-UKE GEDAN",
        japaneseName: "Juji-Ude-Uke Gedan",
        sideLabel: "Nível Baixo (Joelho no Solo)",
        sideCode: "juji-gedan",
        stance: "Posição Ajoelhada (Joelho direito no solo, perna esquerda fletida)",
        level: "Gedan",
        trajectory: "Descendente cruzada em 'X' diante do abdómen inferior",
        contactSurface: "Ambos os pulsos/antebraços cruzados em X",
        summary:
          "Descida rápida sobre o joelho direito mantendo o tronco ereto e cruzando ambos os antebraços em 'X' abaixo da linha da faixa para travar ataques baixos.",
      },
      {
        number: 14,
        name: "14. JUJI-UDE-UKE JODAN",
        japaneseName: "Juji-Ude-Uke Jodan",
        sideLabel: "Nível Alto (Em Pé)",
        sideCode: "juji-jodan",
        stance: "Posição Frontal Estável em Pé",
        level: "Jodan",
        trajectory: "Ascendente cruzada em 'X' acima da testa",
        contactSurface: "Ambos os pulsos/antebraços cruzados em X no nível alto",
        summary:
          "Elevação firme para a postura em pé projetando ambos os antebraços cruzados em 'X' diante da testa/acima da cabeça contra ataques descendentes.",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        phaseTitle: "Câmara Dupla nos Quadris",
        detail: "Ambos os punhos recolhem aos lados da cintura preparando o bloqueio duplo.",
      },
      {
        stepNumber: 2,
        phaseTitle: "13. Descida em Juji-Uke Gedan",
        detail: "O joelho direito toca o solo enquanto os antebraços cruzam em 'X' firme no nível baixo.",
      },
      {
        stepNumber: 3,
        phaseTitle: "Impulso de Transição",
        detail: "A perna esquerda impulsiona o corpo de volta à posição vertical recolhendo os braços pelo eixo central.",
      },
      {
        stepNumber: 4,
        phaseTitle: "14. Elevação em Juji-Ude-Uke Jodan",
        detail: "Ambos os antebraços sobem cruzados em 'X' acima da linha da testa, concluindo os 14 movimentos do Kata.",
      },
    ],
    biomechanicsKeyPoints: [
      "Cruzar na região forte dos pulsos/antebraços (e não apenas nos dedos) para criar uma pinça estrutural indestrutível.",
      "No Ju-Jitsu, o bloqueio em cruz (Juji-Uke) permite prender o pulso ou tornozelo do agressor para aplicar torções (Kansetsu-Waza).",
    ],
  },
];
