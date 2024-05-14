import { useAuth } from "../../../../context/AuthContext";
import { useBottomSheetRef } from "@/context/MenuSheetRefContext";
import { Header } from "@/components/Home/Header";
import Menu from "@/components/Menu";
import Button from "@/components/Button";
import { Container, Content, Separador, Title } from "./styles";
import { Text } from "react-native";

const Home = () => {
  const { authState, onLogout } = useAuth();
  const { bottomSheetRef } = useBottomSheetRef();

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const onLogoutPressed = () => {
    onLogout!();
  };

  return (
    <>
      <Header handleBottomSheetOpen={handleBottomSheetOpen} userName="adm" />
      <Menu bottomSheetRef={bottomSheetRef} />
      <Container>
        <Content>
          <Text>Listagem de Menu</Text>
          <Button text="Alunos" />
          <Button text="Exercicio" />
          <Button text="Treino" />
          <Button text="Apineia" />

        </Content>
        <Separador />
      </Container>
    </>
  );
};

export default Home;
