import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '@/theme/colors';
import { format } from 'date-fns';

export default function CheckIn() {
    const [selectedWorkout, setSelectedWorkout] = useState('A');
    const [trainedDays, setTrainedDays] = useState(0);
    const [lastWorkoutDate, setLastWorkoutDate] = useState(null);
    const [workoutDescription, setWorkoutDescription] = useState('');

    const saveWorkout = async () => {
        try {
            const currentDate = format(new Date(), 'yyyy-MM-dd');
            if (lastWorkoutDate === currentDate) {
                alert('Você já fez check-in hoje!');
                return;
            }
            let trainings = await AsyncStorage.getItem('@lastWorkout');
            if (trainings == null) {
                trainings = [];
            } else {
                trainings = JSON?.parse(trainings);
            }

            await AsyncStorage.setItem('@lastWorkout', JSON.stringify([...trainings, { date: currentDate, workout: selectedWorkout, description: workoutDescription }]));
            alert('Check-in salvo com sucesso!');
            getTrainedDays();
            setWorkoutDescription('');
        } catch (err) {
            console.log(err);
        }
    };

    const getTrainedDays = async () => {
        try {
            const storedWorkout = await AsyncStorage.getItem('@lastWorkout');
            if (storedWorkout) {
                const parsedWorkout = JSON.parse(storedWorkout);
                const lastWorkoutDate = parsedWorkout[parsedWorkout?.length - 1]?.date;

                setLastWorkoutDate(lastWorkoutDate);
                setTrainedDays(parsedWorkout.length);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTrainedDays();
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

                <TextInput
                    style={styles.input}
                    placeholder="Descreva seu treino..."
                    placeholderTextColor="#ccc"
                    value={workoutDescription}
                    onChangeText={setSelectedWorkout}
                />

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
        width: '90%',
        backgroundColor: colors.blue_750,
        borderRadius: 10,
        borderBottomWidth: 4,
        borderBottomColor: colors.green_100,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        color: 'white',
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
        color: 'white',
        fontWeight: 'bold',
    },
    guidanceText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'white',
    },
    saveButton: {
        backgroundColor: colors.green_100,
        padding: 15,
        borderRadius: 20,
    },
    saveButtonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: "center"
    },
});
