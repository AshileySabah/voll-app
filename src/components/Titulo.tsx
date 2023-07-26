import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface ITituloProps extends ITextProps {
  children: ReactNode;
}

export function Titulo({ children, ...rest }: ITituloProps) {
  return (
    <Text
      fontSize="2xl"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      mt={5}
      {...rest}
    >
      {children}
    </Text>
  );
}
