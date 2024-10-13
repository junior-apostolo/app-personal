import { colors } from '@/theme/colors';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Definindo os tipos das props
interface ButtonProps extends TouchableOpacityProps {
  text: string;
  isSelect?: boolean;
  type?: string; // Caso seja necessário especificar mais
  containerStyle?: StyleProp<ViewStyle>; // Estilo customizável para o container
  textStyle?: StyleProp<TextStyle>; // Estilo customizável para o texto
}

export const Button: React.FC<ButtonProps> = ({
  text,
  isSelect,
  type,
  containerStyle, // Estilos personalizados para o container
  textStyle, // Estilos personalizados para o texto
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelect && styles.selectButton, containerStyle]} // Aplicando os estilos customizados
      {...rest}
    >
      <Text style={[styles.text, isSelect && styles.textSelect, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: colors.blue_750,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  selectButton: {
    backgroundColor: colors.green_100,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
  textSelect: {
    color: colors.black,
  },
});
