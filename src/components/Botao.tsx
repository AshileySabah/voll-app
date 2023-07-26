import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface IBotaoProps extends IButtonProps {
  children: ReactNode;
}

export function Botao({ children, ...rest }: IBotaoProps) {
  return (
    <Button w="100%" bg="blue.800" borderRadius="lg" {...rest}>
      {children}
    </Button>
  );
}
