import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '@/theme/colors'; // Certifique-se de que os valores de cor estão definidos corretamente.
import { ExpandeInformationPersonal } from '@/components/expandeInformationPersonal';
import { MeasurementTable } from '@/components/measurementTable';
import BodyCompositionChart from '@/components/bodyCompositionChart';

export default function Workout() {
  const massLean = 60; // Exemplo de massa magra em porcentagem
  const massFat = 40; // Exemplo de massa gorda em porcentagem
  const personName = "Vinicius Leal do Nascimento"; // Nome da pessoa

  const measurements = [
    { label: 'Ombro', value: '111cm' },
    { label: 'Peito', value: '100cm' },
    { label: 'Cintura', value: '80cm' },
    { label: 'Abdômen', value: '85cm' },
    { label: 'Quadril', value: '95cm' },
  ];

  const bodyComposition = [
    { label: 'Altura', value: '1.75m' },          // Altura em metros
    { label: 'Peso', value: '75kg' },              // Peso em kg
    { label: 'Massa magra', value: '60kg' },       // Massa magra em kg
    { label: 'Massa gorda', value: '15kg' },       // Massa gorda em kg
    { label: 'Percentual de gordura', value: '20%' }, // Percentual de gordura
    { label: 'Média', value: '22%' },               // Média do percentual de gordura
    { label: 'Classificação', value: 'Na média' },  // Classificação com base na média
  ];

  const measurementsArray = [
    { label: 'Braço', right: '35cm', left: '34cm' },
    { label: 'Antebraço', right: '30cm', left: '29cm' },
    { label: 'Coxa', right: '60cm', left: '59cm' },
    { label: 'Panturrilha', right: '40cm', left: '39cm' },
  ];

  const skinFolds = [
    { label: 'Tricipital', value: '12mm' },
    { label: 'Subescapular', value: '14mm' },
    { label: 'Peitoral', value: '10mm' },
    { label: 'Axilar', value: '11mm' },
    { label: 'Suprailiaca', value: '9mm' },
    { label: 'Abdominal', value: '15mm' },
    { label: 'Coxa', value: '13mm' },
    { label: 'Panturrilha', value: '8mm' },
    { label: 'Somatório', value: '82mm' }, // Exemplo de somatório das medições
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>

        <View>
          <Text style={styles.title}>Avaliação Física</Text>
          <Text style={styles.name}>{personName}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Peso</Text>
              <Text style={styles.infoValue}>75kg</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Altura</Text>
              <Text style={styles.infoValue}>1.75m</Text>
            </View>
          </View>
        </View>

        {/* Circunferências */}
        <ExpandeInformationPersonal title='Circunferências' measurements={measurements}>
          <MeasurementTable measurements={measurementsArray} />
        </ExpandeInformationPersonal>

        {/* Composição Corporal */}
        <ExpandeInformationPersonal title='Composição Corporal' measurements={bodyComposition}>
          <BodyCompositionChart massLean={massLean} massFat={massFat} />
        </ExpandeInformationPersonal>

        {/* Dobras Cutâneas */}
        <ExpandeInformationPersonal title='Dobras Cutâneas' measurements={skinFolds} />
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg_color, // Fundo da tela
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: "uppercase",
    marginTop: 50,
    fontWeight: "bold"
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: colors.blue_750,
    width: '90%',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Sombra do card (Android)
    shadowColor: '#000', // Sombra do card (iOS)
    shadowOffset: { width: 0, height: 2 }, // Sombra do card (iOS)
    shadowOpacity: 0.3, // Sombra do card (iOS)
    shadowRadius: 4, // Sombra do card (iOS)
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  borderBottom: {
    borderBottomColor: colors.green_100,
    borderBottomWidth: 4,
    marginVertical: 10,
  },
});
