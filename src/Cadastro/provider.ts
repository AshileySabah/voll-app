interface IEntradaTexto {
  id: number;
  label: string;
  placeholder: string;
  type?: "password" | "text";
}

interface ICheckBox {
  id: number;
  value: string;
}

interface ISecao {
  id: number;
  titulo: string;
  subtitulo?: string;
  entradaTexto?: IEntradaTexto[];
  checkbox?: ICheckBox[];
}

export const secoes: ISecao[] = [
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
  {
    id: 3,
    titulo: "Para finalizar, qual é o seu plano de saúde?",
    subtitulo: "Selecione os planos:",
    checkbox: [
      { id: 1, value: "Sulamérica" },
      { id: 1, value: "Unimed" },
      { id: 1, value: "Bradesco" },
      { id: 1, value: "Amil" },
      { id: 1, value: "Biosaúde" },
      { id: 1, value: "Biovida" },
      { id: 1, value: "Outros" },
      { id: 1, value: "Não tenho plano" },
    ],
  },
];
