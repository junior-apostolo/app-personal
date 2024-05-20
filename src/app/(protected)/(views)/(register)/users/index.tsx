import React, { useRef, useState } from "react";
import { View } from "react-native";

import { Container, Content } from "./styles";
import { Form } from "@unform/mobile";
import { Input } from "@/components/Input";
import { FormHandles } from "@unform/core";
import { Title } from "@/components/Card/styles";
import Button from "@/components/Button";
import { useHeaderHeight } from '@react-navigation/elements';
import InputMask from "@/components/InputMask";

const User: React.FC = () => {
  const formRef: FormHandles | any = useRef(null);
  const [cpfRaw, setCpfRaw] = useState("");


  return (
    <Container>
      <Content>
        <Title>Cadastro de usuarios</Title>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="name" label="Nome:" />
          <Input name="email" label="Email:" />
          <InputMask
            type="cpf"
            rawText={cpfRaw}
            setRawText={setCpfRaw}
            name="cpf"
            label="CPF:"
          />
          <Input name="password" label="Senha:" />

          <Input name="password_confirm" label="Confirma Senha:" />
         
          <View style={{ marginBottom: 20 }} />
     
          <Button text="Cadastrar" />
        </Form>
      </Content>
    </Container>
  );
};

export default User;
