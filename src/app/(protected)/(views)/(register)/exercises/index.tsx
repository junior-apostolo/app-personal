import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";

import { Container, Content } from "./styles";
import { Form } from "@unform/mobile";
import { Input } from "@/components/Input/input";
import { FormHandles } from "@unform/core";
import { Title } from "@/components/Card/styles";
import Button from "@/components/Button";
import YoutubePlayer from "react-native-youtube-iframe";
import { Alert } from "react-native";

const exercises: React.FC = () => {
  const formRef: FormHandles | any = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [selectVideoPreview, setSelectVideoPreview] = useState("");

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const selectVideo = (event: { nativeEvent: { text: string } }) => {
    const newValue = event.nativeEvent.text?.split("be/");
    if (newValue.length > 0) {
      setSelectVideoPreview(newValue[1]);
    } else {
      setSelectVideoPreview("");
    }
  };

  return (
    <Container>
      <Content>
        <Title>Cadastro de Exercicio</Title>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="nome" label="Nome:" />
          <Input name="linkVideo" label="Link do video:" onBlur={selectVideo} />
          <Input name="descricao" label="Descrição:" multiline />
          <View style={{ marginBottom: 20 }} />
          {selectVideoPreview != "" && (
            <View>
              <YoutubePlayer
                height={280}
                play={playing}
                videoId={selectVideoPreview}
                onChangeState={onStateChange}
              />
            </View>
          )}
          <Button text="Cadastrar" />
        </Form>
      </Content>
    </Container>
  );
};

export default exercises;
