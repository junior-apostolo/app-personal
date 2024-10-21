import { ComposicaoCorporal, Perimetro, SkinFold } from "@/interfaces/ComposicaoCorporalData";

 
  interface MeasurementsInput {
    id: string;
    altura: number;
    peso: number;
    data: string;
    skinFold: SkinFold;
    perimetro: Perimetro;
    composicaoCorporal: ComposicaoCorporal;
    userId: string;
  }
  
  export function transformMeasurements(data: MeasurementsInput) {
    const measurements = [
      { label: 'Ombro', value: `${data.perimetro.ombro}cm` },
      { label: 'Peito', value: `${data.perimetro.torax}cm` },
      { label: 'Cintura', value: `${data.perimetro.cintura}cm` },
      { label: 'Abdômen', value: `${data.perimetro.abdomen}cm` }, 
      { label: 'Quadril', value: `${data.perimetro.quadril}cm` },
    ]; 
  
    const bodyComposition = [
      { label: 'Altura', value: `${(data.altura / 100).toFixed(2)}m` }, // Converte para metros
      { label: 'Peso', value: `${data.peso}kg` },
      { label: 'Massa magra', value: `${data.composicaoCorporal.pesoMagra}kg` },
      { label: 'Massa gorda', value: `${data.composicaoCorporal.pesoGordura}kg` },
      { label: 'Percentual de gordura', value: `${data.composicaoCorporal.gordura}%` }, 
      { label: 'Média', value: `${((data.composicaoCorporal.pesoGordura / data.peso) * 100).toFixed(2)}%` },
    ];
  
    const measurementsArray = [
      { label: 'Braço', right: `${data.perimetro.bracoDireito}cm`, left: `${data.perimetro.bracoEsquerdo}cm` },
      { label: 'Antebraço', right: `${data.perimetro.antebracoDireito}cm`, left: `${data.perimetro.antebracoEsquerdo}cm` },
      { label: 'Coxa', right: `${data.perimetro.coxaDireita}cm`, left: `${data.perimetro.coxaEsquerda}cm` },
      { label: 'Panturrilha', right: `${data.perimetro.panturrilhaDireita}cm`, left: `${data.perimetro.panturrilhaEsquerda}cm` },
    ];
  
    const skinFolds = [
      { label: 'Tricipital', value: `${data.skinFold.tricipital}cm` },
      { label: 'Subescapular', value: `${data.skinFold.subescapular}cm` },
      { label: 'Axilar', value: `${data.skinFold.axilarMedio}cm` },
      { label: 'Suprailiaca', value: `${data.skinFold.supraIliaca}cm` },
      { label: 'Abdominal', value: `${data.skinFold.abdominal}cm` },
      { label: 'Coxa', value: `${data.skinFold["quadríceps"]}cm` },
      { label: 'Panturrilha', value: `${data.skinFold.toracica}cm` },
      { label: 'Somatório', value: `${data.skinFold.somat}cm` }, 
    ];
  
    return { measurements, bodyComposition, measurementsArray, skinFolds };
  }
  