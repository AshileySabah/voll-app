import { Box, FormControl, Image, Link, Text, VStack } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";
import { Botao } from "./components/Botao";

export default function Cadastro() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>Cadastro</Titulo>
      <Box>
        <FormControl mt={3}>
          <EntradaTexto label="Nome" placeholder="Insira seu nome completo" />
          <EntradaTexto label="E-mail" placeholder="Insira seu e-mail" />
          <EntradaTexto
            label="Crie uma senha"
            placeholder="Insira sua senha"
            type="password"
          />
          <EntradaTexto
            label="Repita a senha"
            placeholder="Insira sua senha"
            type="password"
          />
        </FormControl>
      </Box>
      <Botao mt={10}>Entrar</Botao>
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
