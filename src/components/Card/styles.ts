import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #ffffff; /* ou a cor correspondente do seu tema */
  border-radius: 10px; /* ou o raio de borda correspondente do seu tema */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  gap: 10px;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${theme.fonts.size.heading.sm};
  font-weight: 700;
  color: ${theme.colors.black};
`;

export const Subtitle = styled.Text``;
