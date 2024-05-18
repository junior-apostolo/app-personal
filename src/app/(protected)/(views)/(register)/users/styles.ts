import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  align-items: center;
`;

export const Content = styled.ScrollView`
  padding-top: 30px;
  width: 90%;
`;
