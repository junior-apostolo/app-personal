import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa o ícone
import { colors } from '@/theme/colors';
import { ExpandeInformationPersonal } from '@/components/expandeInformationPersonal';
import { MeasurementTable } from '@/components/measurementTable';
import BodyCompositionChart from '@/components/bodyCompositionChart';
import { transformMeasurements } from '@/utils/transformMeasurements';
import { getPhysicalAssessmentAsync } from '@/services/physicalAssessmentService';
import { TokenStorageAsync } from '@/constants/global';
import { getData, removeData } from '@/utils/tokenSave';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Workout() {
  const [measurementsObject, setMeasurementsObject] = useState<any>({
    measurements: [],
    bodyComposition: [],
    measurementsArray: [],
    skinFolds: []
  });

  const [personName, setPersonName] = useState(""); 
  const [percentuais, setPercentuais] = useState<any>({
    massFat: 0,
    massLean: 0
  });

  const navigation = useNavigation();

  const getInformationUser = async () => {
    try {
      const tokenData: any = await getData(TokenStorageAsync);
      setPersonName(tokenData.name);
      const result = await getPhysicalAssessmentAsync(tokenData.id);
      if (!result) {
        return false;
      }
      const measurements = transformMeasurements(result);
      setMeasurementsObject(measurements);
      setPercentuais({
        massFat: Number(result.composicaoCorporal.gordura) || 0,
        massLean: Number(result.composicaoCorporal.massaMagra) || 0
      });
    } catch (err) {
      return false;
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem(TokenStorageAsync);
    router.push("login")
  };

  useEffect(() => {
    getInformationUser();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View>
          <Text style={styles.title}>Avaliação Física</Text>

          {/* Container para o nome e o botão de logout */}
          <View style={styles.headerRow}>
            <Text style={styles.name}>{personName}</Text>

            {/* Ícone de logout */}
            <TouchableOpacity onPress={handleLogout} style={styles.logoutIcon}>
              <Icon name="power" size={24} color="white" />
            </TouchableOpacity>
          </View>

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
          <BodyCompositionChart massLean={percentuais.massLean} massFat={percentuais.massFat} />
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
    backgroundColor: colors.bg_color,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  logoutIcon: {
    marginLeft: 15, 
    backgroundColor: colors.blue_750,
    borderRadius: 100,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center"
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
});
