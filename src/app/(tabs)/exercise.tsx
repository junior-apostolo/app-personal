import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Vibration, Alert } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from '@/components/card';
import { ExpandedSection } from '@/components/expandedSection';
import * as Notifications from 'expo-notifications';
import { colors } from '@/theme/colors';
import { router, useLocalSearchParams } from 'expo-router';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const Exercise: React.FC = () => {
    const { id, image, nomeExercicio, nome, linkVideo, descriptionExercicio, description, observacao } = useLocalSearchParams();
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [lastLoad, setLastLoad] = useState<string>('0kg');
    const [isInputEnabled, setIsInputEnabled] = useState<boolean>(false);
    const [exerciseLoads, setExerciseLoads] = useState<{ name: string; load: string }[] | any>([]);
    const [selectedTime, setSelectedTime] = useState<string>('30s');
    const [customTime, setCustomTime] = useState<string>('');
    const [countdown, setCountdown] = useState<number | null>(null);

    const TIMER_TASK = 'background-timer-task';

    TaskManager.defineTask(TIMER_TASK, async () => {
        try {
            // Aqui você pode salvar o estado do timer no AsyncStorage
            const countdown = await AsyncStorage.getItem('countdown');
            const countdownValue = countdown ? parseInt(countdown) : null;

            if (countdownValue && countdownValue > 0) {
                // Decrementa o valor do timer
                const newCountdown = countdownValue - 1;
                await AsyncStorage.setItem('countdown', newCountdown.toString());

                if (newCountdown === 0) {
                    // Vibra e envia a notificação quando o timer chega a 0
                    Vibration.vibrate(3000);
                    await Notifications.scheduleNotificationAsync({
                        content: {
                            title: 'Tempo de descanso acabou!',
                            body: 'É hora de voltar ao treino!',
                            sound: 'default',
                        },
                        trigger: null,
                    });
                }
            }

            return BackgroundFetch.Result.NewData;
        } catch (err) {
            return BackgroundFetch.Result.Failed;
        }
    });

    useEffect(() => {
        const startBackgroundTimerTask = async () => {
            const isRegistered = await TaskManager.isTaskRegisteredAsync(TIMER_TASK);
            if (!isRegistered) {
                await BackgroundFetch.registerTaskAsync(TIMER_TASK, {
                    minimumInterval: 1, // Tempo mínimo entre execuções em segundos
                });
            }
        };

        startBackgroundTimerTask();
    }, []);

    useEffect(() => {
        const loadExerciseLoads = async () => {
            try {
                const storedLoads: any = await AsyncStorage.getItem('exerciseLoads');
                if (storedLoads) {
                    const storedParse: any = JSON.parse(storedLoads);
                    const lastLoadFilter = storedParse?.filter(item => item.name == nomeExercicio);
                    if (lastLoadFilter.length > 0) {
                        setLastLoad(() => lastLoadFilter[0].load);
                    } else {
                        setLastLoad("0kg");
                    }
                    setExerciseLoads(storedParse);
                }
            } catch (error) {
                console.error('Failed to load exercise loads:', error);
            }
        };

        loadExerciseLoads();
    }, [nomeExercicio, id]);

    useEffect(() => {
        const requestNotificationPermission = async () => {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão necessária', 'Por favor, habilite as notificações para receber alertas.');
            }
        };

        requestNotificationPermission();
    }, []);

    useEffect(() => {
        if (countdown !== null && countdown > 0) {
            AsyncStorage.setItem('countdown', countdown.toString());
            const timer = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            Vibration.vibrate(3000);
            setCountdown(null);
        }
    }, [countdown]);

    const toggleExpand = (section: string) => {
        setExpandedSection(section === expandedSection ? null : section);
    };

    useEffect(() => {
        const loadStoredCountdown = async () => {
            const storedCountdown = await AsyncStorage.getItem('countdown');
            if (storedCountdown !== null) {
                setCountdown(parseInt(storedCountdown));
            }
        };

        loadStoredCountdown();
    }, []);

    const handleSaveLoad = async () => {
        if (lastLoad.trim() !== '') {
            const newLoad = { name: nomeExercicio, load: lastLoad };

            const updatedLoads = [...exerciseLoads, newLoad];
            setExerciseLoads(updatedLoads);
            try {
                await AsyncStorage.setItem('exerciseLoads', JSON.stringify(updatedLoads));
                await AsyncStorage.setItem('lastLoad', lastLoad);
                setIsInputEnabled(false);
            } catch (error) {
                console.error('Failed to save exercise load:', error);
            }
        }
    };

    const goBack = () => {
        router.push({
            pathname: "(tabs)/training",
            params: {
                id,
                nome,
                image,
                description
            },
        });
    };

    const handleTimeSelection = (time: string) => {
        setSelectedTime(time);
        setCustomTime('');
        const timeInSeconds = convertTimeToSeconds(time);
        setCountdown(timeInSeconds);
    };

    const convertTimeToSeconds = (time: string) => {
        if (time === '30s') return 30;
        if (time === '1min30s') return 90;
        if (time === '2min') return 120;
        if (customTime) return parseInt(customTime);
        return 0;
    };

    const handleCustomTimeInput = (input: string) => {
        const sanitizedInput = input.replace(/[^0-9]/g, '');
        const timeInSeconds = convertTimeToSeconds(sanitizedInput);
        setCustomTime(sanitizedInput)
    };

    const triggerNotification = async (timer: string) => {
        handleTimeSelection(timer)
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Tempo de descanso acabou!',
                body: 'É hora de voltar ao treino!',
                sound: 'default',
            },
            trigger: {
                seconds: Number(timer), // agenda para 30 segundos depois
                repeats: false, // não se repete
            },
        });
    };
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={90}
        >
            <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={goBack}
                >
                    <Text style={styles.backButtonText}>{"< Voltar"}</Text>
                </TouchableOpacity>

                <Card
                    imageUri=""
                    isYouTube={true}
                    youTubeVideoId={linkVideo}
                    text={nomeExercicio}
                />
                <View style={{ width: "90%" }}>
                    <ExpandedSection
                        title="Descrição"
                        content={observacao}
                        sectionKey="dicasDeTreino"
                        expandedSection={expandedSection}
                        toggleExpand={toggleExpand}
                    />
                </View>

                <View style={styles.loadSection}>
                    <Text style={styles.loadTitle}>Minhas Cargas</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.lastLoadText}>Cargas: </Text>
                        <TextInput
                            style={[styles.input, { backgroundColor: isInputEnabled ? colors.blue_750 : colors.gray }]}
                            placeholderTextColor={colors.white}
                            placeholder="Insira sua carga"
                            value={lastLoad}
                            onChangeText={setLastLoad}
                            editable={true}
                        />

                    </View>

                    <View style={styles.timerSection}>
                        <Text style={styles.timerTitle}>Escolha o tempo de descanso:</Text>
                        <View style={styles.timerOptions}>
                            <TouchableOpacity
                                style={[styles.timerButton, customTime === '30' && styles.selectedTimerButton]}
                                onPress={() => handleCustomTimeInput('30')}
                            >
                                <Text style={styles.timerButtonText}>30s</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.timerButton, customTime === '90' && styles.selectedTimerButton]}
                                onPress={() => handleCustomTimeInput('90')}
                            >
                                <Text style={styles.timerButtonText}>1min30s</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.timerButton, customTime === '120' && styles.selectedTimerButton]}
                                onPress={() => handleCustomTimeInput('120')}
                            >
                                <Text style={[styles.timerButtonText, customTime === '120' && { color: colors.white }]}>2min</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={styles.customTimeInput}
                                placeholder="Custom"
                                value={customTime}
                                placeholderTextColor={colors.white}
                                onChangeText={handleCustomTimeInput}
                                keyboardType="numeric"
                                onFocus={() => setSelectedTime('')}
                            />
                        </View>
                        {countdown !== null && (
                            <Text style={styles.countdownText}>
                                Tempo restante: {Math.floor(countdown / 60)}:{countdown % 60 < 10 ? '0' : ''}{countdown % 60}s
                            </Text>
                        )}
                        <TouchableOpacity
                            style={[styles.timerButton, { marginTop: 20, width: "100%" }]}
                            onPress={() => triggerNotification(customTime)}
                        >
                            <Text style={[styles.timerButtonText, { textAlign: "center", color: colors.white, borderRadius: 10 }]}>Iniciar timer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.timerButton, { marginTop: 20, width: "100%", borderRadius: 10, backgroundColor: colors.green_100 }]} onPress={handleSaveLoad}>
                            <Text style={styles.saveButtonText}>Salvar Peso</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg_color,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 70
    },
    scrollContent: {
        alignItems: 'center',
    },
    backButton: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.blue_750,
        borderRadius: 5,
    },
    backButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    loadSection: {
        marginTop: 20,
        width: '90%',
        padding: 15,
        borderRadius: 10,
    },
    loadTitle: {
        fontSize: 18,
        color: colors.white,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: "center"
    },
    lastLoadText: {
        fontSize: 16,
        color: colors.white,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: "center"
    },
    input: {
        flex: 1,
        borderRadius: 5,
        marginRight: 0,
        width: 50,
        height: 40,
        color: colors.white,
        paddingLeft: 10,
    },
    saveButton: {
        backgroundColor: colors.green_100,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        width: "100%",
        alignSelf: "center"
    },
    saveButtonText: {
        color: colors.black,
        textAlign: "center"
    },
    timerSection: {
        marginTop: 20,
        width: "100%",
        justifyContent: "center"
    },
    timerTitle: {
        fontSize: 16,
        color: colors.white,
        textAlign: "left",
        marginLeft: 5
    },
    timerOptions: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
        width: "100%"
    },
    timerButton: {
        padding: 10,
        backgroundColor: colors.blue_750,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    selectedTimerButton: {
        backgroundColor: colors.green_100,
    },
    timerButtonText: {
        color: colors.white,
    },
    customTimeInput: {
        width: 80,
        color: colors.white,
        backgroundColor: colors.blue_750,
        borderRadius: 5,
        padding: 5,
        textAlign: 'center',
    },
    countdownText: {
        marginTop: 10,
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: "center"
    },
});

export default Exercise;
