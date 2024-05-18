import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";

import { Container, Content } from "./styles";
import { Form } from "@unform/mobile";
import { Input } from "@/components/Input";
import { FormHandles } from "@unform/core";
import { Title } from "@/components/Card/styles";
import Button from "@/components/Button";
import { useHeaderHeight } from '@react-navigation/elements';
import YoutubePlayer from "react-native-youtube-iframe";
import InputMask from "@/components/InputMask";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import Select from "@/components/Select";

const User: React.FC = () => {
  const formRef: FormHandles | any = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [cpfRaw, setCpfRaw] = useState("");
  const [selectVideoPreview, setSelectVideoPreview] = useState("");
  const headerHeight = useHeaderHeight() +35;
  const selectVideo = (event: { nativeEvent: { text: string } }) => {
    const newValue = event.nativeEvent.text?.split("be/");
    if (newValue.length > 1) {
      setSelectVideoPreview(newValue[1]);
    } else {
      setSelectVideoPreview(() => "");
    }
  };

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
          {selectVideoPreview && (
            <View>
              <YoutubePlayer
                height={280}
                play={playing}
                videoId={selectVideoPreview}
              />
            </View>
          )}
          <Button text="Cadastrar" />
        </Form>

        <AutocompleteDropdownContextProvider headerOffset={headerHeight}>
            <Select />
          </AutocompleteDropdownContextProvider>
      </Content>
    </Container>
  );
};

export default User;
