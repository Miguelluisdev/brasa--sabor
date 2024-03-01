interface CardProps {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
    preco?: number; // Alterado para number, já que o preço é numérico
}

const utensiliosChurras: CardProps[] = [
    {
      id: 1,
      nome: "Picanha",
      descricao: "Picanha para churrasco",
      preco: 50.00,
      imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134100985192470/receita_de_picanha_com_pasta_alho_2020-02-06.jpg?ex=65f4a28f&is=65e22d8f&hm=9145117f567fad339a35499f49172f9390293ef815ef0c412c07d7e7529e1f13&"
    },
    {
      id: 2,
      nome: "Churrasqueira",
      descricao: "Churrasqueira a carvão para churrasco",
      preco: 200.00,
      imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134101316534402/churrasqueira-inox-tecnogrill-11-espetos-rotativos-e-grelha-motorizada-e15a574a971b64172b0f17250148c925.png?ex=65f4a28f&is=65e22d8f&hm=a81a9d70b2e792d23bb7437eb19d5533f35721d04082ae16f744f8567ae9a15a&"
    },
    {
      id: 3,
      nome: "Tábua de carne",
      descricao: "Tábua para preparo e corte de carnes",
      preco: 30.00,
      imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134100687519885/shutterstock_483310876.jpg?ex=65f4a28f&is=65e22d8f&hm=7a7d20b62d10f69c24fbf27639a2770fdc27814c9ca01851628ee0c76d672fd8&"
    },
    {
      id: 4,
      nome: "Kit de facas",
      descricao: "Kit de facas para churrasco",
      preco: 100.00,
      imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208148772706717768/03B07E8E9845C363BD387C241F192C50.jpg?ex=65f4b039&is=65e23b39&hm=153c89046a334875b2dbd4dcf041a4007984d282ef1f94d673440440a2326eb3&"
    }
];

export default utensiliosChurras