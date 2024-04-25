import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "../Avatar";
import { Container, Content, Subtitle, Title } from "./styles";

// export type IconNameType = keyof typeof MaterialIcons.glyphMap;

type DataProps = {
  name: string;
  email?: string;
};

type ListProps = {
  data: DataProps;
};

export const ListItem = ({ data }: ListProps) => {

  return (
    <Container>
      <Avatar source={{uri: 'https://github.com/junior-apostolo.png'}}/>
      <Content>
        <Title >{data.name}</Title>
        <Subtitle>{data.email}</Subtitle>
      </Content>
    </Container>
  );
};
