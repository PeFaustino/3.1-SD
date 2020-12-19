export const somarAction = (valorAtual) => (
    { type: "SOMAR", valorSomado: valorAtual+1 }
)
export const zerarAction = () => (
    { type: "ZERAR" }
)