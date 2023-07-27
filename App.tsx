import { NativeBaseProvider, ScrollView, StatusBar } from "native-base";
import { TEMAS } from "./src/estilos/temas";
import Cadastro from "./src/screens/Cadastro";

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <ScrollView>
        <Cadastro />
      </ScrollView>
    </NativeBaseProvider>
  );
}
