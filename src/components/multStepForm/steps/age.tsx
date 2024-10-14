import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { SelectListHorizontal } from "@/components/selectListHorizontal";
import { PageRegister } from "@/components/pageRegister";
import { FormContext } from "@/contexts/FormContext";

const startAge = 18;
const endAge = 100;
const numberOfAges = endAge - startAge + 1;
const ages = [...Array(numberOfAges).keys()].map((i) => startAge + i);

export function Age() {
  const [selectAge, setSelectAge] = useState(ages[0]);
  const { updateFormData } = useContext(FormContext);

  useEffect(() => {
    if (selectAge) {
      updateFormData(
        {
          question: "Qual a sua idade?",
          answer: `${selectAge}`,
        },
        1
      );
    }
  }, [selectAge]);

  return (
    <PageRegister
      title="Qual a sua idade?"
      description="Isso nos ajuda a criar seu plano de personalização"
    >
      <View style={{ height: "80%", width: "100%" }}>
        <SelectListHorizontal data={ages} onValueChange={setSelectAge} />
      </View>
    </PageRegister>
  );
}
