import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '@/theme/colors'; // Certifique-se de que os valores de cor estão definidos corretamente.
import { ExpandeInformationPersonal } from '@/components/expandeInformationPersonal';
import { MeasurementTable } from '@/components/measurementTable';
import BodyCompositionChart from '@/components/bodyCompositionChart';
import { transformMeasurements } from '@/utils/transformMeasurements';
import { getPhysicalAssessmentAsync } from '@/services/physicalAssessmentService';
import { TokenStorageAsync } from '@/constants/global';
import { getData } from '@/utils/tokenSave';

export default function Workout() {
  const [measurementsObject, setMeasurementsObject] = useState<any>({
    measurements: [],
    bodyComposition: [],
    measurementsArray: [],
    skinFolds: []
  })
  const massLean = 60; 
  const massFat = 40; 
  const [personName, setPersonName] = useState(""); 
  
  
  const getInformationUser = async () => {
    try {
      
      const tokenData: any = await getData(TokenStorageAsync);
      setPersonName(tokenData.name)
      const result = await getPhysicalAssessmentAsync(tokenData.id);
      console.log(result)
      const measurements = transformMeasurements(result);
      setMeasurementsObject(measurements);
    } catch (err) {
      return false;
    }
  }

  useEffect(() => {
    getInformationUser()
  }, [])



  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>

        <View>
          <Text style={styles.title}>Avaliação Física</Text>
          <Text style={styles.name}>{personName}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Peso</Text>
              <Text style={styles.infoValue}>{measurementsObject.bodyComposition[1]?.value}</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Altura</Text>
              <Text style={styles.infoValue}>{measurementsObject.bodyComposition[0]?.value}</Text>
            </View>
          </View>
        </View>

        {/* Circunferências */}
        <ExpandeInformationPersonal title='Circunferências' measurements={measurementsObject.measurements}>
          <MeasurementTable measurements={measurementsObject.measurementsArray} />
        </ExpandeInformationPersonal>

        {/* Composição Corporal */}
        <ExpandeInformationPersonal title='Composição Corporal' measurements={measurementsObject.bodyComposition}>
          <BodyCompositionChart massLean={massLean} massFat={massFat} />
        </ExpandeInformationPersonal>

        {/* Dobras Cutâneas */}
        <ExpandeInformationPersonal title='Dobras Cutâneas' measurements={measurementsObject.skinFolds} />
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
