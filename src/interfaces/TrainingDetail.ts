import { Exercise } from "./Exercise";
import { Training } from "./Training";

export interface TrainingDetail {
    id: string;
    observacao: string;
    serie: string;
    rep: string;
    metodo: string;
    peso: string;
    seqTreino: number;
    tipoTreino: number;
    exercise: Exercise;
    training: Training;
  }