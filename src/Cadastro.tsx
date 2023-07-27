import { Box, FormControl, Image, Link, Text, VStack } from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";
import { Botao } from "./components/Botao";

interface IEntradaTexto {
  id: number;
  label: string;
  placeholder: string;
  type?: "password" | "text";
}
interface ISecao {
  id: number;
  titulo: string;
  entradaTexto: IEntradaTexto[];
}

const secoes: ISecao[] = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos:",
    entradaTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Insira seu nome completo",
      },
      {
        id: 2,
        label: "E-mail",
        placeholder: "Insira seu e-mail",
      },
      {
        id: 3,
        label: "Crie uma senha",
        placeholder: "Insira sua senha",
        type: "password",
      },
      {
        id: 4,
        label: "Repita a senha",
        placeholder: "Insira sua senha",
        type: "password",
      },
    ],
  },
  {
    id: 2,
    titulo: "Agora, mais alguns dados sobre você:",
    entradaTexto: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Insira seu CEP",
      },
      {
        id: 2,
        label: "Endereço",
        placeholder: "Insira seu endereço",
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Insira seu número",
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Insira seu complemento",
      },
      {
        id: 5,
        label: "Telefone",
        placeholder: "Insira suer telefone",
      },
    ],
  },
];

export default function Cadastro() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      {secoes?.map(({ id, titulo, entradaTexto }) => {
        return (
          <Box w="100%" key={id}>
            <Titulo>{titulo}</Titulo>
            <Box>
              <FormControl mt={3}>
                {entradaTexto?.map(({ id, label, placeholder, type }) => {
                  return (
                    <EntradaTexto
                      key={id}
                      {...{ label, placeholder, type: type || "text" }}
                    />
                  );
                })}
              </FormControl>
            </Box>
            <Botao mt={10}>Avançar</Botao>
          </Box>
        );
      })}
    </VStack>
  );
}
