import React, { useRef, useState } from "react";
import { View } from "react-native";

import { Container, Content } from "./styles";
import { Form } from "@unform/mobile";
import { Input } from "@/components/Input";
import { FormHandles } from "@unform/core";
import { Title } from "@/components/Card/styles";
import Button from "@/components/Button";
import { useHeaderHeight } from "@react-navigation/elements";
import InputMask from "@/components/InputMask";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import Select from "@/components/Select";

const Training: React.FC = () => {
  const formRef: FormHandles | any = useRef(null);
  const [dateRawInitial, setDateRawInitial] = useState("");
  const [dateRawFinal, setDateRawFinal] = useState("");
  const [userSelect, setUserSelect] = useState("")
  const [users, setUsers] = useState([
    {
        id: '123',
        title: "vinicius"
    }, 
    {
        id: '345',
        title: "vitoria"
    },
    {
        id: '1645',
        title: "vitort"
    },
    {
      id: '1644',
      title: "vitorr"
  },
  {
    id: '1642',
    title: "vitors"
}
  ])

  const headerHeight = useHeaderHeight() + 35;

  return (
    <Container>
      <Content>
        <Title>Cadastro de treino</Title>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="name" label="Nome do treino:" />
          <AutocompleteDropdownContextProvider headerOffset={headerHeight}>
            <Select data={users} title="title" value="id" setItem={setUserSelect} label="Selecione o Aluno" placeholder="Alunos"/>
          </AutocompleteDropdownContextProvider>
          <InputMask
            setRawText={setDateRawInitial}
            rawText={dateRawInitial}
            type="datetime"
            options={{
              format: "DD/MM/YYYY",
            }}
            name="password_confirm"
            label="Inicio: "
          />
          <InputMask
            setRawText={setDateRawFinal}
            rawText={dateRawFinal}
            type="datetime"
            options={{
              format: "DD/MM/YYYY",
            }}
            name="password_confirm"
            label="Final: "
          />
          <Input name="observacao" label="Observação: " multiline />

          <View style={{ marginBottom: 20 }} />

          <Button text="Cadastrar" />
        </Form>
      </Content>
    </Container>
  );
};

export default Training;
