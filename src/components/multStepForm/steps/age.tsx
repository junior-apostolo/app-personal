import { SelectList } from "@/components/selectList";
import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "./styles";

const startAge = 18;
const endAge = 70;
const numberOfAges = endAge - startAge + 1;
const ages = [...Array(numberOfAges).keys()].map((i) => startAge + i);

export function Age() {
  const { register, setValue, watch } = useFormContext();
  const [selectAge, setSelectAge] = useState(ages[0]);

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

      <SelectList data={ages} setState={setSelectAge} />

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
