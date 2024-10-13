import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import React, { ReactNode } from "react";
import { View, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";

// Definindo os tipos das props
interface PageRegisterProps {
  title: string;
  description: string;
  children?: ReactNode;
  titleStyle?: TextStyle;         // Estilização extra para o título
  descriptionStyle?: TextStyle;   // Estilização extra para a descrição
  containerStyle?: ViewStyle;     // Estilização extra para o container
}

export function PageRegister({
  title,
  description,
  children,
  titleStyle,
  descriptionStyle,
  containerStyle,
}: PageRegisterProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.description, descriptionStyle]}>{description}</Text>
        {children}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_color,
  },
  textContainer: {
    marginTop: "18%",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
    width: 300,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    fontFamily: theme.fontFamily.regular,
    color: colors.white,
    width: 300,
    textAlign: "center"
  },
});
