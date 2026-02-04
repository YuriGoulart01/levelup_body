export type Periodo = "mensal" | "trimestral" | "semestral";
export type TipoObjetivo = "gordura" | "massa" | "resistencia";

export const objetivoMock = {
  gordura: {
    titulo: "Perder gordura",
    planos: {
      mensal: {
        treinosSemana: 4,
        foco: ["Cardio", "Força"],
        resultado: "-2 a -4kg",
      },
      trimestral: {
        treinosSemana: 5,
        foco: ["Cardio", "Força"],
        resultado: "-6 a -10kg",
      },
      semestral: {
        treinosSemana: 5,
        foco: ["Cardio", "Força"],
        resultado: "-12kg ou mais",
      },
    },
  },

  massa: {
    titulo: "Ganhar massa",
    planos: {
      mensal: {
        treinosSemana: 4,
        foco: ["Força"],
        resultado: "+1kg massa magra",
      },
      trimestral: {
        treinosSemana: 5,
        foco: ["Força"],
        resultado: "+3kg massa magra",
      },
      semestral: {
        treinosSemana: 5,
        foco: ["Força"],
        resultado: "+5kg massa magra",
      },
    },
  },

  resistencia: {
    titulo: "Melhorar resistência",
    planos: {
      mensal: {
        treinosSemana: 3,
        foco: ["Cardio"],
        resultado: "Mais fôlego",
      },
      trimestral: {
        treinosSemana: 4,
        foco: ["Cardio"],
        resultado: "Alta resistência",
      },
      semestral: {
        treinosSemana: 5,
        foco: ["Cardio"],
        resultado: "Performance elevada",
      },
    },
  },
};
