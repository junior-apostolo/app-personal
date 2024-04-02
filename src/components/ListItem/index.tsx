import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "../Avatar";

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
    <View style={styles.containerItem}>
      <Avatar/>
      <View>
        <Text style={styles.textName}>{data.name}</Text>
        <Text style={styles.textEmail}>{data.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    padding: 20,
    marginBottom: 20,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    // backgroundColor: "rgba(255,255,255,0.8)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textName: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.fonts.size.heading.sm,
    fontWeight: "700",
    color: theme.colors.black,
  },
  textEmail: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.size.heading.xs,
    opacity: 0.8,
    color: "#0099cc",
  },
});
