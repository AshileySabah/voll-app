import { NativeBaseProvider, StatusBar } from "native-base";
import Principal from "./src/Principal";
import { TEMAS } from "./src/estilos/temas";

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Principal />
    </NativeBaseProvider>
  );
}
