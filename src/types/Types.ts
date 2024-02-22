export type Alimento = "carne" | "linguica" | "frango" | "paoAlho" | "queijoCoalho";
export type Bebidas = "agua" | "suco" | "cerveja" | "refrigerante";


export const quantidadePessoas: Record<Alimento | Bebidas, number> = {
    carne: 400, 
    linguica: 200,
    frango: 200,
    paoAlho: 100, 
    queijoCoalho: 20, 
    agua: 2, 
    suco: 2, 
    cerveja: 3, 
    refrigerante: 3
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