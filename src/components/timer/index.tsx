import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { colors } from '@/theme/colors';

type TimerProps = {
  onCountdownEnd: () => void;
};

export const Timer: React.FC<TimerProps> = ({ onCountdownEnd }) => {
  const [selectedTime, setSelectedTime] = useState<string>('30s');
  const [customTime, setCustomTime] = useState<string>('');
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      onCountdownEnd();
      setCountdown(null);
    }
  }, [countdown]);

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    setCustomTime('');
    setCountdown(convertTimeToSeconds(time));
  };

  const convertTimeToSeconds = (time: string): number => {
    if (time === '30s') return 30;
    if (time === '1min30s') return 90;
    if (time === '2min') return 120;
    return customTime ? parseInt(customTime, 10) || 0 : 0;
  };

  const handleCustomTimeInput = (input: string) => {
    const sanitizedInput = input.replace(/[^0-9]/g, '');
    setCustomTime(sanitizedInput);
  };

  const triggerNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Tempo de descanso acabou!',
        body: 'É hora de voltar ao treino!',
      },
      trigger: { seconds: countdown || 0 },
    });
  };

  return (
    <View style={styles.timerSection}>
      <Text style={styles.timerTitle}>Escolha o tempo de descanso:</Text>
      <View style={styles.timerOptions}>
        <TouchableOpacity onPress={() => handleTimeSelection('30s')} style={styles.timerButton}>
          <Text style={styles.timerButtonText}>30s</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimeSelection('1min30s')} style={styles.timerButton}>
          <Text style={styles.timerButtonText}>1min30s</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimeSelection('2min')} style={styles.timerButton}>
          <Text style={styles.timerButtonText}>2min</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.customTimeInput}
          placeholder="Custom"
          value={customTime}
          onChangeText={handleCustomTimeInput}
          keyboardType="numeric"
        />
      </View>
      {countdown !== null && (
        <Text style={styles.countdownText}>
          Tempo restante: {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}
        </Text>
      )}
      <TouchableOpacity style={styles.timerButton} onPress={triggerNotification}>
        <Text style={styles.timerButtonText}>Iniciar descanso</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  timerSection: { marginTop: 20 },
  timerTitle: { color: colors.white },
  timerOptions: { flexDirection: 'row', justifyContent: 'space-between' },
  timerButton: { backgroundColor: colors.blue_750, padding: 10, borderRadius: 5 },
  timerButtonText: { color: colors.white },
  customTimeInput: { color: colors.white, borderBottomWidth: 1 },
  countdownText: { color: colors.white },
});
