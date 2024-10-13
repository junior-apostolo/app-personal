import { SelectList } from "@/components/selectList";
import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "./styles";
import { SelectListHorizontal } from "@/components/selectListHorizontal";
import { ButtonSelectMulti } from "@/components/buttonSelect";
import { PageRegister } from "@/components/pageRegister";



export function Objective() {
  const { register, setValue, watch } = useFormContext();
  const [selectAge, setSelectAge] = useState();
  const objectiveArray = ["Emagrecimento", "Hipertrofia", "Composição Corporal", "Performance no esporte", "Encaminhamento Médico", "Qualidade de Vida"]

  useEffect(() => {
    register("age");
  }, [register]);

  useEffect(() => {
    setValue("age", selectAge);
  }, [selectAge, setValue]);

  return (
    <PageRegister
      description=" Você pode escolher mais de um. Não se preocupe, você sempre pode alterá-lo mais tarde."
      title="Qual é o teu objetivo"
      titleStyle={{ fontSize: 28 }}
      descriptionStyle={{ textAlign: "center" }}
    >

      <View style={[styles.content, {width: "80%"}]}>
        {
          objectiveArray.map((item, index) => <ButtonSelectMulti text={item} isSelect={index === 0 || index === 3} onPress={() => { }} />)
        }
      </View>
    </PageRegister>
  );
}
