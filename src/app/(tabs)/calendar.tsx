import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomCalendar } from '@/components/calendar';
import { colors } from '@/theme/colors';
import { Fire } from '@/assets/icon';

export default function Calendar() {
  const [trainedDays, setTrainedDays] = useState(0);
  const [selectedDays, setSelectedDays] = useState([]);
  const [daySelect, setDaySelect] = useState(null)
  const [lastWorkout, setLastWorkout] = useState(''); // Estado para armazenar o treino realizado


  const trainingSelect = async () => {
    const storedWorkout = await AsyncStorage.getItem('@lastWorkout');
    if (storedWorkout) {
      const parsedWorkout = JSON.parse(storedWorkout);
      const filter = parsedWorkout?.filter((item: any) => item.date == daySelect)
      setLastWorkout(filter.length > 0 && filter[0].workout); // Armazena o treino realizado
    }
  }

  useEffect(()=>{
    trainingSelect()
  },[daySelect])

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const storedWorkout = await AsyncStorage.getItem('@lastWorkout');
        if (storedWorkout) {
          const parsedWorkout = JSON.parse(storedWorkout);
          
          if (parsedWorkout) {
            const workDates = parsedWorkout?.map((item:any)=> item.date); 
            setSelectedDays(workDates);
            setTrainedDays(workDates?.length); 

          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Dias treinados</Text>
        <View style={styles.titleContainer}>
          <Fire />
          <Text style={styles.trainedDays}>{trainedDays} Dias</Text>
        </View>
        <CustomCalendar selectedDays={selectedDays} setDaySelect={setDaySelect}/>

        {lastWorkout ? (
          <Text style={styles.workoutText}>Treino realizado: {lastWorkout}</Text>
        ) : (
          <Text style={styles.workoutText}>Nenhum treino registrado nesta data.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_color, // Fundo azul
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: "88%",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 20, // Espaço entre o título e o calendário
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 10, // Espaçamento entre o ícone de fogo e o número "365"
  },
  trainedDays: {
    fontSize: 22,
    color: colors.white,
    fontWeight: "bold",
  },
  workoutText: {
    marginTop: 20,
    fontSize: 18,
    color: colors.white,
  },
});
