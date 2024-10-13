import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '@/theme/colors';
import { format } from 'date-fns';

export default function CheckIn() {
    const [selectedWorkout, setSelectedWorkout] = useState('A'); // Valor padrão
    const [trainedDays, setTrainedDays] = useState(0);
    const [lastWorkoutDate, setLastWorkoutDate] = useState(null); // Armazenar a data do último treino

    // Função para salvar treino e data no AsyncStorage
    const saveWorkout = async () => {
        try {
            const currentDate = format(new Date(), 'yyyy-MM-dd'); // Formato compatível com o calendário
            if (lastWorkoutDate === currentDate) {
                alert('Você já fez check-in hoje!');
                return;
            }
            let trainings: any = await AsyncStorage.getItem('@lastWorkout');
            if (trainings == null) {
                trainings = []
            } else {
                trainings = JSON?.parse(trainings)
            }

            await AsyncStorage.setItem('@lastWorkout', JSON.stringify([...trainings, { date: currentDate, workout: selectedWorkout }]));
            alert('Check-in salvo com sucesso!');
            getTrainedDays();
        } catch (err) {
            console.log(err);
        }
    };

    // Recuperar o número de dias treinados e a data do último treino
    const getTrainedDays = async () => {
        try {
            const storedWorkout = await AsyncStorage.getItem('@lastWorkout');
            if (storedWorkout) {
                const parsedWorkout = JSON.parse(storedWorkout);
                const lastWorkoutDate = parsedWorkout[parsedWorkout?.length - 1]?.date;

                // Atualiza o estado com a data do último treino
                setLastWorkoutDate(lastWorkoutDate);

                // Incrementa dias treinados (lógica pode ser ajustada conforme necessário)
                setTrainedDays(parsedWorkout.length);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTrainedDays(); // Recupera dias treinados ao carregar a tela
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Check-in de Treino</Text>

                <View style={styles.trainedDaysContainer}>
                    <Text style={styles.fireEmoji}>🔥</Text>
                    <Text style={styles.trainedDaysText}>{trainedDays} dias treinados</Text>
                </View>

                <Text style={styles.guidanceText}>
                    Mantenha a consistência! Faça check-in para acompanhar sua evolução.
                </Text>



                <TouchableOpacity style={styles.saveButton} onPress={saveWorkout}>
                    <Text style={styles.saveButtonText}>Concluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue_750,
        paddingTop: 70,
    },
    card: {
        width: '90%', // Largura do card
        backgroundColor: colors.blue_750, // Cor de fundo do card
        borderRadius: 10, // Arredondar os cantos do card
        borderBottomWidth: 4, // Largura da borda
        borderBottomColor: colors.green_100, // Cor da borda
        padding: 20, // Espaçamento interno do card
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Sombra para Android
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        color: 'white', // Mudou a cor do texto para black para melhor legibilidade
        fontWeight: 'bold',
        marginBottom: 20,
    },
    trainedDaysContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    fireEmoji: {
        fontSize: 24,
        marginRight: 10,
    },
    trainedDaysText: {
        fontSize: 20,
        color: 'white', // Mudou a cor do texto para black para melhor legibilidade
        fontWeight: 'bold',
    },
    guidanceText: {
        fontSize: 16,
        color: 'white', // Mudou a cor do texto para black para melhor legibilidade
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    picker: {
        height: 50,
        width: '100%', // Ajustar a largura do picker
        color: 'black', // Mudou a cor do texto do picker para black
        marginBottom: 30,
    },
    saveButton: {
        backgroundColor: colors.green_100,
        padding: 15,
        borderRadius: 20, // Arredondar mais
    },
    saveButtonText: {
        fontSize: 18,
        color: 'black', // Texto do botão em preto
        fontWeight: 'bold',
        textAlign: "center"
    },
});
