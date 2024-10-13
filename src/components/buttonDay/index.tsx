import { colors } from '@/theme/colors';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

// Definindo os tipos das props
interface ButtonDayProps extends TouchableOpacityProps {
  text: string;
  isSelect?: boolean;
}

export const ButtonDay: React.FC<ButtonDayProps> = ({ text, isSelect, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.container, isSelect && styles.selectButton]} {...rest}>
      <Text style={[styles.text, isSelect && styles.textSelect]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    backgroundColor: colors.blue_750,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: 35,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  selectButton: {
    backgroundColor: colors.green_100,
  },
  text: {
    fontSize: 18,
    color: colors.white,
  },
  textSelect: {
    color: colors.black,
  },
});
