export interface Training {
    id: string;
    nome: string;
    observacao: string;
    dataInicio: string; // ou Date, se preferir usar o objeto Date
    dataFinal: string;  // ou Date, se preferir usar o objeto Date
    userId: string;
  }