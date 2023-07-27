import { Box, Checkbox, FormControl, Image, Text, VStack } from "native-base";
import Logo from "../../assets/Logo.png";
import { Titulo } from "../../components/Titulo";
import { EntradaTexto } from "../../components/EntradaTexto";
import { Botao } from "../../components/Botao";
import { useState, useCallback } from "react";
import { secoes } from "./provider";

export default function Cadastro() {
  const [numberSection, setNumberSection] = useState<number>(0);

  const cadastroFinalizado = () => {
    //
  };

  const avancarSecao = useCallback(() => {
    const proximaSecao = numberSection + 1;
    if (proximaSecao > secoes?.length - 1) {
      cadastroFinalizado();
    } else {
      setNumberSection(proximaSecao);
    }
  }, [numberSection, secoes]);

  const voltarSecao = useCallback(() => {
    const ultimaSecao = numberSection - 1;
    setNumberSection(ultimaSecao);
  }, [numberSection, secoes]);

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Box w="100%" key={secoes[numberSection]?.id}>
        <Titulo>{secoes[numberSection]?.titulo}</Titulo>
        {secoes[numberSection]?.subtitulo && (
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt={5}>
            {secoes[numberSection]?.subtitulo}
          </Text>
        )}

        <Box>
          <FormControl mt={3}>
            {secoes[numberSection]?.entradaTexto?.map(
              ({ id, label, placeholder, type }) => {
                return (
                  <EntradaTexto
                    key={id}
                    {...{ label, placeholder, type: type || "text" }}
                  />
                );
              }
            )}

            {secoes[numberSection]?.checkbox?.map(({ id, value }) => {
              return (
                <Box key={id} flexDirection="row" alignItems="center">
                  <Checkbox {...{ value }}>{value}</Checkbox>
                </Box>
              );
            })}
          </FormControl>
        </Box>
        {numberSection > 0 && (
          <Botao bgColor="gray.400" mt={10} onPress={voltarSecao}>
            Voltar
          </Botao>
        )}
        <Botao mt={numberSection > 0 ? 5 : 10} onPress={avancarSecao}>
          {numberSection === secoes?.length - 1 ? "Finalizar" : "Avançar"}
        </Botao>
      </Box>
    </VStack>
  );
}
