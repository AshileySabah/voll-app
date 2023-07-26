import { FormControl, IInputProps, Input } from "native-base";

interface IEntradaTextoProps extends IInputProps {
  label?: string;
}

export function EntradaTexto({ label, ...rest }: IEntradaTextoProps) {
  return (
    <>
      {label && <FormControl.Label>E-mail</FormControl.Label>}
      <Input
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        {...rest}
      />
    </>
  );
}
