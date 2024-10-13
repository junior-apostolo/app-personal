import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Definindo os tipos das props
interface CheckboxProps {
  isSelect: boolean; // Propriedade que define se o checkbox está selecionado ou não
}

export const Checkbox: React.FC<CheckboxProps> = ({ isSelect }) => {
  const [checked, setChecked] = useState(isSelect);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleChecked} style={styles.checkboxContainer}>
        {isSelect ? (
          <MaterialIcons name="check-box" size={24} color="#41F0BE" />
        ) : (
          <MaterialIcons name="check-box-outline-blank" size={24} color="gray" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: 10,
  },
  label: {
    fontSize: 18,
  },
});
