import styled from "styled-components/native";
import Constants from "expo-constants";
import { theme } from "@/theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px; /* Para a altura da barra de status */
  padding-horizontal: 20px;
  height: 100px;
  gap: 10px; /* Define o espaçamento entre os itens flexíveis */
  background-color: ${theme.colors.blue_600}; /* Cor de fundo */
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${theme.colors.white_200};
  font-size: ${theme.fonts.size.heading.sm}px;
  font-family: ${theme.fonts.medium};
`;

export const SubTitle = styled.Text`
  color: ${theme.colors.white_200};
  font-size: ${theme.fonts.size.body.xs}px;
  font-family: ${theme.fonts.regular};
`;
