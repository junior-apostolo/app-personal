import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '@/theme/colors';

type WeightManagerProps = {
  exerciseName: string;
};

export const WeightManager: React.FC<WeightManagerProps> = ({ exerciseName }) => {
  const [lastLoad, setLastLoad] = useState<string>('0kg');
  const [isInputEnabled, setIsInputEnabled] = useState<boolean>(false);

  useEffect(() => {
    const loadExerciseLoads = async () => {
      try {
        const storedLoads = await AsyncStorage.getItem('exerciseLoads');
        if (storedLoads) {
          const parsedLoads = JSON.parse(storedLoads);
          const foundLoad = parsedLoads.find((load: any) => load.name === exerciseName)?.load || '0kg';
          setLastLoad(foundLoad);
        }
      } catch (error) {
        console.error('Error loading weights:', error);
      }
    };
    loadExerciseLoads();
  }, [exerciseName]);

  const handleSaveLoad = async () => {
    try {
      const updatedLoad = { name: exerciseName, load: lastLoad };
      await AsyncStorage.setItem('exerciseLoads', JSON.stringify(updatedLoad));
      Alert.alert('Carga salva com sucesso!');
    } catch (error) {
      console.error('Error saving weight:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Cargas</Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isInputEnabled ? colors.blue_750 : colors.gray },
        ]}
        value={lastLoad}
        onChangeText={setLastLoad}
        editable={isInputEnabled}
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveLoad}>
        <Text style={styles.buttonText}>Salvar Peso</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  title: { color: colors.white, marginBottom: 10 },
  input: { borderBottomWidth: 1, color: colors.white },
  button: { backgroundColor: colors.green_100, padding: 10, borderRadius: 5 },
  buttonText: { color: colors.black },
});
