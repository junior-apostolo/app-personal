import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.blue_600};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 50px;
  margin-bottom: 10px;
  z-index: -1;
`;

export const BtnText = styled.Text`
  color: ${theme.colors.white};
`;
