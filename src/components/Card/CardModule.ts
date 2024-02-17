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
      imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134100985192470/receita_de_picanha_com_pasta_alho_2020-02-06.jpg?ex=65e22d8f&is=65cfb88f&hm=65fefa91b55b7cb9a8aaae0fdba9a6aa92fde34242d09bdd684b41a9aceca482&"
    },
    {
      id: 2,
      nome: "Churrasqueira",
      descricao: "Churrasqueira a carvão para churrasco",
      preco: 200.00,
      imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134101316534402/churrasqueira-inox-tecnogrill-11-espetos-rotativos-e-grelha-motorizada-e15a574a971b64172b0f17250148c925.png?ex=65e22d8f&is=65cfb88f&hm=9137480a2bec5bb3633184c0226ee03151f78331959d42a7b31381b6902d927d&"
    },
    {
      id: 3,
      nome: "Tábua de carne",
      descricao: "Tábua para preparo e corte de carnes",
      preco: 30.00,
      imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134100687519885/shutterstock_483310876.jpg?ex=65e22d8f&is=65cfb88f&hm=37e259a00b6c38ec8533b5f1fd416c3a756a4d55cca07f0762e9dc986cf6ae35&"
    },
    {
      id: 4,
      nome: "Kit de facas",
      descricao: "Kit de facas para churrasco",
      preco: 100.00,
      imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208148772706717768/03B07E8E9845C363BD387C241F192C50.jpg?ex=65e23b39&is=65cfc639&hm=ccf52e646848c862b5a0ba3448d865d0404600db69265550685845c5575ae005&"
    }
];

export default utensiliosChurras