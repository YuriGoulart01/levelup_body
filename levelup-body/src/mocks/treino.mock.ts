export type TipoTreino = "forca" | "cardio" | "alongamento";

export type Treino = {
  id: number;
  nome: string;
  tipo: TipoTreino;
  duracaoMin: number;
  nivel: string;
  youtubeId: string;
};

export const treinosMock: Treino[] = [
  // ===== FORÇA =====
  {
    id: 1,
    nome: "Força em casa (braços)",
    tipo: "forca",
    duracaoMin: 30,
    nivel: "Iniciante",
    youtubeId: "U0bhE67HuDY",
  },
  {
    id: 2,
    nome: "Pernas sem equipamentos",
    tipo: "forca",
    duracaoMin: 35,
    nivel: "Intermediário",
    youtubeId: "2pLT-olgUJs",
  },
  {
    id: 3,
    nome: "Peito e tríceps em casa",
    tipo: "forca",
    duracaoMin: 25,
    nivel: "Iniciante",
    youtubeId: "IODxDxX7oi4",
  },
  {
    id: 4,
    nome: "Força corpo inteiro",
    tipo: "forca",
    duracaoMin: 40,
    nivel: "Intermediário",
    youtubeId: "vc1E5CfRfos",
  },

  // ===== CARDIO =====
  {
    id: 5,
    nome: "Cardio leve para iniciantes",
    tipo: "cardio",
    duracaoMin: 20,
    nivel: "Iniciante",
    youtubeId: "ml6cT4AZdqI",
  },
  {
    id: 6,
    nome: "HIIT em casa",
    tipo: "cardio",
    duracaoMin: 25,
    nivel: "Intermediário",
    youtubeId: "8DZktowZo_k",
  },
  {
    id: 7,
    nome: "Cardio dançante",
    tipo: "cardio",
    duracaoMin: 30,
    nivel: "Todos",
    youtubeId: "gC_L9qAHVJ8",
  },
  {
    id: 8,
    nome: "Cardio intenso sem pular",
    tipo: "cardio",
    duracaoMin: 30,
    nivel: "Intermediário",
    youtubeId: "d3LPrhI0v-w",
  },

  // ===== ALONGAMENTO =====
  {
    id: 9,
    nome: "Alongamento diário",
    tipo: "alongamento",
    duracaoMin: 15,
    nivel: "Leve",
    youtubeId: "sTANio_2E0Q",
  },
  {
    id: 10,
    nome: "Mobilidade para o corpo todo",
    tipo: "alongamento",
    duracaoMin: 20,
    nivel: "Todos",
    youtubeId: "v7AYKMP6rOE",
  },
  {
    id: 11,
    nome: "Alongamento profundo",
    tipo: "alongamento",
    duracaoMin: 25,
    nivel: "Intermediário",
    youtubeId: "L_xrDAtykMI",
  },
  {
    id: 12,
    nome: "Alongamento pré-treino",
    tipo: "alongamento",
    duracaoMin: 10,
    nivel: "Leve",
    youtubeId: "4pKly2JojMw",
  },
];
