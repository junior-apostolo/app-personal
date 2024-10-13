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
          
          // Verifica se temos dados armazenados
          if (parsedWorkout) {
            const workDates = parsedWorkout?.map((item:any)=> item.date); // Usar a data do último treino
            setSelectedDays(workDates);
            setTrainedDays(workDates?.length); // Conta como 1 dia treinado

            // Atualiza o estado do treino realizado
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchWorkouts(); // Busca os treinos ao montar o componente
  }, []);

  return (
    <View style={styles.container}>
      {/* Título com o ícone de fogo e os dias treinados */}
      <View style={styles.content}>
        <Text style={styles.title}>Dias treinados</Text>
        <View style={styles.titleContainer}>
          <Fire />
          <Text style={styles.trainedDays}>{trainedDays} Dias</Text>
        </View>
        {/* Calendário com dropdowns de mês e ano */}
        <CustomCalendar selectedDays={selectedDays} setDaySelect={setDaySelect}/>

        {/* Exibir o treino realizado abaixo do calendário */}
        {lastWorkout ? (
          <Text style={styles.workoutText}>Treino realizado: {lastWorkout}</Text>
        ) : (
          <Text style={styles.workoutText}>Nenhum treino registrado para hoje.</Text>
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
