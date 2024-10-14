import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { SelectListHorizontal } from "@/components/selectListHorizontal";
import { PageRegister } from "@/components/pageRegister";
import { FormContext } from "@/contexts/FormContext";

const startHeight = 120;
const endHeight = 210;
const numberOfHeights = endHeight - startHeight + 1;
const heights = [...Array(numberOfHeights).keys()].map((i) => startHeight + i);

export function Height() {
  const [selectHeight, setSelectHeight] = useState(heights[0]);
  const { updateFormData } = useContext(FormContext);

  useEffect(() => {
    if (selectHeight) {
      updateFormData(
        {
          question: "Qual a sua altura?",
          answer: `${selectHeight} cm`,
        },
        3
      );
    }
  }, [selectHeight]);

  return (
    <PageRegister
      title="Qual a sua altura?"
      description="Isso nos ajuda a criar seu plano de personalização"
    >
      <View style={{ height: "80%", width: "100%" }}>
        <SelectListHorizontal data={heights} label={"CM"} onValueChange={setSelectHeight} />
      </View>
    </PageRegister>
  );
}
