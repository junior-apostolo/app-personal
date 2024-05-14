import React from "react";

import { Container, BtnText } from "./styles";
import { TouchableOpacityProps } from "react-native-gesture-handler";

interface ButtonProps extends TouchableOpacityProps{
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <Container  {...rest} activeOpacity={0.8}>
      <BtnText>{text}</BtnText>
    </Container>
  );
};

export default Button;
