import { colors } from '@/theme/colors';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TouchableOpacityProps } from 'react-native';
import { Checkbox } from '../checkbox';

// Definindo os tipos das props
interface ButtonSelectMultiProps extends TouchableOpacityProps {
  text: string;
  description?: string;
  isSelect?: boolean;
  type?: string; // Adicione o tipo correto conforme necessário, caso seja mais específico
}

export const ButtonSelectMulti: React.FC<ButtonSelectMultiProps> = ({ text, description, isSelect, type, ...rest }) => {

  return (
    <TouchableOpacity style={[styles.container, isSelect && styles.selectButton]} {...rest}>
      <View style={styles.content}>
        <Text style={[styles.text, isSelect && styles.textSelect]}>{text}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <Checkbox isSelect={isSelect || false} />
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
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    marginLeft: 20,
  },
  description: {
    color: colors.white,
  },
  selectButton: {
    borderWidth: 2,
    borderColor: colors.green_100,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  textSelect: {
    color: colors.white,
  },
});
