export type Alimento = "carne" | "linguica" | "frango" | "paoAlho" | "queijoCoalho";
export type Bebidas = "agua" | "suco" | "cerveja" | "refrigerante";

type Quantidade = [number, string]; // [valor, unidade de medida]

export const quantidadePessoas: Record<Alimento | Bebidas, Quantidade> = {
    carne: [400, "gramas"],
    linguica: [200, "gramas"],
    frango: [200, "gramas"],
    paoAlho: [100, "gramas"],
    queijoCoalho: [20, "unidades"], 
    agua: [2, "litros"],
    suco: [2, "litros"],
    cerveja: [2, "latas"],
    refrigerante: [2, "litros"]
};

export const nomesAlimentos: Record<string, string> = {
    carne: "Carne",
    linguica: "Linguiça",
    frango: "Frango",
    paoAlho: "Pao de Alho",
    queijoCoalho: "Queijo Coalho",
};

export const nomesBebidas: Record<string, string> = {
    agua: "Água",
    suco: "Suco",
    cerveja: "Cerveja",
    refrigerante: "Refrigerante"
};




// agua: "Água",
// suco: "Suco",
// cerveja: "Cerveja",
// refrigerante: "Refrigerante"