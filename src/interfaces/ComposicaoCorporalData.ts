export interface SkinFold {
    id: string;
    tricipital: number;
    subescapular: number;
    axilarMedio: number;
    supraIliaca: number;
    abdominal: number;
    quadriceps: number;
    toracica: number;
    somat: number;
  }
  
  export interface Perimetro {
    id: string;
    quadril: number;
    abdomen: number;
    cintura: number;
    ombro: number;
    torax: number;
    bracoDireito: number;
    bracoEsquerdo: number;
    antebracoDireito: number;
    antebracoEsquerdo: number;
    coxaDireita: number;
    coxaEsquerda: number;
    panturrilhaDireita: number;
    panturrilhaEsquerda: number;
  }
  
  export interface ComposicaoCorporal {
    id: string;
    gordura: number;
    pesoGordura: number;
    massaMagra: number;
    pesoMagra: number;
    gorduraIdeal: number;
    gorduraExcesso: number;
  }
  
  export interface ComposicaoCorporalData {
    id: string;
    altura: number;
    peso: number;
    data: string; 
    skinFold: SkinFold;
    perimetro: Perimetro;
    composicaoCorporal: ComposicaoCorporal;
    userId: string;
  }
  