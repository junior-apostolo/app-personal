import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "../Avatar";
import { Container, Content, Subtitle, Title } from "./styles";

// export type IconNameType = keyof typeof MaterialIcons.glyphMap;

type DataProps = {
  title: string;
  subtitle?: string;
};

type ListProps = {
  data: DataProps;
};

export const ListItem = ({ data }: ListProps) => {

  return (
    <Container>
      <Content>
        <Title >{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
      </Content>
    </Container>
  );
};
