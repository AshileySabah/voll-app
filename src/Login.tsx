import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={5}
      >
        Faça login em sua conta
      </Text>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            placeholder="Insira seu e-mail"
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button w="100%" bg="blue.800" mt={10} borderRadius="lg">
        Entrar
      </Button>
      <Link href="https://alura.com.br" mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text pr={1}>Ainda não tem conta?</Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
