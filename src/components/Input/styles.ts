import styled, { css } from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { theme } from "@/theme";

interface InputStyleProps {
  isField?: boolean;
  isFocused?: boolean;
  isErrored?: boolean;
}

export const Container = styled.View<InputStyleProps>`
  padding: 0 15px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.gray[100]};
  border-radius: ${theme.borderRadius.mdpls}px;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${theme.colors.error};
      border-width: 2px;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${theme.colors.blue_800};
      border-width: 2px;
    `}
`;

export const InputComponent = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255,255,255,0.3)",
})`
  flex: 1;
  width: 250px;
  font-family: ${theme.fonts.regular};
  font-size: ${theme.fonts.size.body.sm};
`;

export const Label = styled.Text`
  text-transform: uppercase;
  font-size: ${theme.fonts.size.body.sm};
  line-height: ${theme.fonts.size.body.sm};
  margin: 15px 0 5px 0px;
`;

export const Icon = styled(Ionicons)<InputStyleProps>`
  margin-right: 5px;
  color:  ${theme.colors.gray[100]};
  ${(props) =>
    props.isField &&
    css`
      color: ${theme.colors.blue_800};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${theme.colors.blue_800};
    `}
`;