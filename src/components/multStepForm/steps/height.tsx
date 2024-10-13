import { SelectList } from "@/components/selectList";
import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "./styles";
import { SelectListHorizontal } from "@/components/selectListHorizontal";
import { PageRegister } from "@/components/pageRegister";

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
    <PageRegister
      title="Qual a sua idade?"
      description="Isso nos ajuda a criar seu plano de personalização"
    >
      <View style={{ height: "80%", width: "100%" }}>
        <SelectListHorizontal data={heights} label={"CM"} />
      </View>
    </PageRegister>
  );
}
