import React from "react";
import { View } from "react-native";

import { Container, Content, Title, Subtitle } from "./styles";
import { getFormatText } from "@/utils/formatText";

export const Card: React.FC = () => {
  const subtitle = `
1º Posicionamento: Deite-se em um banco inclinado entre 30 a 45 graus.
  {"\n"}
  2ºCertifique-se de que suas costas estejam firmemente apoiadas no banco
  e seus pés estejam no chão para fornecer estabilidade. Agarre: Pegue a
  barra com uma pegada um pouco mais larga do que a largura dos ombros.
  Mantenha os pulsos retos e os cotovelos ligeiramente flexionados.
  {"\n"}
  
  3ºDescida: Desça a barra de forma controlada em direção ao peito.
  {"\n"}
  
  4ºMantenha os cotovelos ligeiramente inclinados para fora, em um ângulo
  de cerca de 45 graus em relação ao tronco. Não deixe que os cotovelos
  mergulhem muito abaixo do nível do banco. Toque suave: Toque
  suavemente o peito com a barra, mantendo o controle do movimento
  durante toda a descida. Impulso: Empurre a barra de volta à posição
  inicial usando a força do peito e dos ombros. Concentre-se em manter a
  forma adequada e evitar usar o impulso dos quadris ou dos ombros.`;
  return (
    <Container>
      <Content>
        <Title>Supino Inclinado</Title>
        <Subtitle>
        {getFormatText(subtitle)}

        </Subtitle>
      </Content>
    </Container>
  );
};
