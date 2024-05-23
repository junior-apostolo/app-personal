import React, { useRef, useState } from "react";
import { View } from "react-native";

import { Container, Content } from "./styles";
import { Form } from "@unform/mobile";
import { Input } from "@/components/Input";
import { FormHandles } from "@unform/core";
import { Title } from "@/components/Card/styles";
import Button from "@/components/Button";
import { useHeaderHeight } from "@react-navigation/elements";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import Select from "@/components/Select";

const TrainingExercises: React.FC = () => {
  const formRef: FormHandles | any = useRef(null);
  const [exerciseId, setExerciseId] = useState("");
  const [trainingId, setTrainingId] = useState("");
  const [training, setTraings] = useState([
    {
      id: "123",
      name: "teste",
    },
    {
      id: "345",
      name: "teste2",
    },
  ]);
  const [exercises, setExercises] = useState([
    {
      id: "123",
      name: "teste",
    },
    {
      id: "345",
      name: "teste2",
    },
  ]);

  const headerHeight = useHeaderHeight() + 35;

  return (
    <Container>
      <Content>
        <Title>Cadastro de treino</Title>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="serie" label="Series:" />
          <Input name="rep" label="Numero de repetições:" />
          <Input name="metodo" label="Metodo:" />
          <Input name="peso" label="Peso:" />
          <AutocompleteDropdownContextProvider headerOffset={headerHeight}>
            <Select
              data={training}
              title="name"
              value="id"
              setItem={setTrainingId}
              label="Selecione o Treino:"
              placeholder="Treino"
            />
          </AutocompleteDropdownContextProvider>
          <AutocompleteDropdownContextProvider headerOffset={headerHeight}>
            <Select
              data={exercises}
              title="name"
              value="id"
              setItem={setExerciseId}
              label="Selecione o exercicio"
              placeholder="Exercicios"
            />
          </AutocompleteDropdownContextProvider>
          <Input name="seqTreino" label="Sequencia de treino:" />
          <Input name="tipoTreino" label="Tipo do treino:" />

          <Input name="observacao" label="Observação: " multiline />

          <View style={{ marginBottom: 20 }} />

          <Button text="Cadastrar" />
        </Form>
      </Content>
    </Container>
  );
};

export default TrainingExercises;
