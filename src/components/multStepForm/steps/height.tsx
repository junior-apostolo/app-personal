import { SelectList } from "@/components/selectList";
import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "./styles";
import { SelectListHorizontal } from "@/components/selectListHorizontal";

const startHeight = 120; // Altura mínima (em cm)
const endHeight = 210;   // Altura máxima (em cm)
const numberOfHeights = endHeight - startHeight + 1;
const heights = [...Array(numberOfHeights).keys()].map((i) => startHeight + i);


export function Height() {
  const { register, setValue, watch } = useFormContext();
  const [selectAge, setSelectAge] = useState(heights[0]);
  useEffect(() => {
    register("age");
  }, [register]);

  useEffect(() => {
    setValue("age", selectAge);
  }, [selectAge, setValue]);

  return (
    <View style={styles.containerAge}>
      <View style={styles.textContainerAge}>
        <Text style={styles.titleAge}>Qual a sua idade?</Text>

        <Text style={styles.descriptionAge}>
          Isso nos ajuda a criar seu plano de personalização
        </Text>
      </View>

      <SelectListHorizontal data={heights} setState={setSelectAge} label={"CM"}/>
      <View
        style={[
          {
            justifyContent: "center",
            alignItems: "flex-end",
            padding: "10%",
          },
        ]}
      >

        {/* <TouchableOpacity style={styles.button}>
          <AntDesign name="arrowright" size={32} color={theme.colors.white} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
