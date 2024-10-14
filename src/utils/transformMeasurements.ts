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
      { label: 'Massa magra', value: `${data.composicaoCorporal.massaMagra}kg` },
      { label: 'Massa gorda', value: `${data.composicaoCorporal.pesoGordura}kg` },
      { label: 'Percentual de gordura', value: `${((data.composicaoCorporal.gordura / data.peso) * 100).toFixed(2)}%` }, // Exemplo de cálculo
      { label: 'Média', value: `${((data.composicaoCorporal.gordura / data.peso) * 100).toFixed(2)}%` },
      { label: 'Classificação', value: 'Na média' },
    ];
  
    const measurementsArray = [
      { label: 'Braço', right: `${data.perimetro.bracoDireito}cm`, left: `${data.perimetro.bracoEsquerdo}cm` },
      { label: 'Antebraço', right: `${data.perimetro.antebracoDireito}cm`, left: `${data.perimetro.antebracoEsquerdo}cm` },
      { label: 'Coxa', right: `${data.perimetro.coxaDireita}cm`, left: `${data.perimetro.coxaEsquerda}cm` },
      { label: 'Panturrilha', right: `${data.perimetro.panturrilhaDireita}cm`, left: `${data.perimetro.panturrilhaEsquerda}cm` },
    ];
  
    const skinFolds = [
      { label: 'Tricipital', value: `${data.skinFold.tricipital}mm` },
      { label: 'Subescapular', value: `${data.skinFold.subescapular}mm` },
      { label: 'Axilar', value: `${data.skinFold.axilarMedio}mm` },
      { label: 'Suprailiaca', value: `${data.skinFold.supraIliaca}mm` },
      { label: 'Abdominal', value: `${data.skinFold.abdominal}mm` },
      { label: 'Coxa', value: `${data.skinFold["quadríceps"]}mm` },
      { label: 'Panturrilha', value: `${data.skinFold.toracica}mm` },
      { label: 'Somatório', value: `${data.skinFold.somat}mm` }, // Supondo que 'somat' seja o somatório
    ];
  
    return { measurements, bodyComposition, measurementsArray, skinFolds };
  }
  