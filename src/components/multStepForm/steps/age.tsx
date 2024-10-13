import { SelectList } from "@/components/selectList";
import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "./styles";
import { SelectListHorizontal } from "@/components/selectListHorizontal";
import { PageRegister } from "@/components/pageRegister";

const startAge = 18;
const endAge = 100;
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
    <PageRegister
      title="Qual a sua idade?"
      description="Isso nos ajuda a criar seu plano de personalização"
    >
      <View style={{height: "80%", width: "100%"}}>
        <SelectListHorizontal data={ages} />
      </View>
    </PageRegister>
  );
}
