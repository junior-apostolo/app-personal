import { SelectList } from "@/components/selectList";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFormContext } from "react-hook-form";
import { styles } from "./styles";

const startWeight = 30;
const endWeight = 350;
const numberOfWeights = endWeight - startWeight + 1;
const weights = [...Array(numberOfWeights).keys()].map((i) => startWeight + i);

export function Weight() {
  const { register, setValue, watch } = useFormContext();
  const [selectWeight, setSelectWeight] = useState(weights[0]);

  useEffect(() => {
    register("weight");
  }, [register]);

  useEffect(() => {
    setValue("weight", selectWeight);
  }, [selectWeight, setValue]);

  return (
    <View style={styles.containerWeight}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            paddingBottom: 100,
            justifyContent: "flex-end",
            alignItems: "center",
          },
        ]}
      ></View>

      <View style={styles.textContainerWeight}>
        <Text style={styles.titleWeight}>Qual o seu peso?</Text>

        <Text style={styles.descriptionWeight}>
          Peso em kg. Não se preocupe, você sempre poderá alterá-lo mais tarde.
        </Text>
      </View>

      <SelectList data={weights} setState={setSelectWeight} info="Kg" />
    </View>
  );
}
