import { VStack } from "native-base";

import { Titulo } from "../components/Titulo";

export default function Principal({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Titulo>Principal</Titulo>
    </VStack>
  );
}
