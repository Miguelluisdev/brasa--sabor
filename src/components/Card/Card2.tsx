import  { useState } from "react";
import { motion } from "framer-motion";
import { variant3 } from "./CardVariant";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

const utensiliosChurras = [
  {
    id: 1,
    nome: "Picanha",
    descricao: "Picanha para churrasco",
    preco: "50.00",
    imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134100985192470/receita_de_picanha_com_pasta_alho_2020-02-06.jpg?ex=65e22d8f&is=65cfb88f&hm=65fefa91b55b7cb9a8aaae0fdba9a6aa92fde34242d09bdd684b41a9aceca482&"
  },
  {
    id: 2,
    nome: "Churrasqueira",
    descricao: "Churrasqueira a carvão para churrasco",
    preco: "200.00",
    imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134101316534402/churrasqueira-inox-tecnogrill-11-espetos-rotativos-e-grelha-motorizada-e15a574a971b64172b0f17250148c925.png?ex=65e22d8f&is=65cfb88f&hm=9137480a2bec5bb3633184c0226ee03151f78331959d42a7b31381b6902d927d&"
  },
  {
    id: 3,
    nome: "Tábua de carne",
    descricao: "Tábua para preparo e corte de carnes",
    preco: "30.00",
    imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208134100687519885/shutterstock_483310876.jpg?ex=65e22d8f&is=65cfb88f&hm=37e259a00b6c38ec8533b5f1fd416c3a756a4d55cca07f0762e9dc986cf6ae35&"
  },
  {
    id: 4,
    nome: "Kit de facas",
    descricao: "Kit de facas para churrasco",
    preco: "100.00",
    imagem: "https://cdn.discordapp.com/attachments/1205228548986511420/1208148772706717768/03B07E8E9845C363BD387C241F192C50.jpg?ex=65e23b39&is=65cfc639&hm=ccf52e646848c862b5a0ba3448d865d0404600db69265550685845c5575ae005&"
  }
];

const Card2 = () => {
  const [loading] = useState<boolean>(false); // Removed setLoading as we're not using axios anymore
  const product = utensiliosChurras.slice(0, 4); // Removed setProduct as we're not fetching data

  return (
    <div className="flex justify-center flex-wrap">
      {loading ? (
        <Loading />
      ) : (
        <>
          {product.map((produto) => (
            <motion.div
              key={produto.id}
              variants={variant3(0.5)}
              initial="hidden"
              whileInView="show"
              className="text-center relative rounded-2xl w-full sm:w-[45%] md:w-[30%] basis shrink-0 grow bg-azul-celeste bg-opacity-50 p-5 mx-2 my-4 md:my-0 md:mx-0 md:mb-8"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="shadow-lg shadow-gray-900/75 rounded-2xl w-full h-60 object-cover object-center"
              />
              <div className="absolute top-12 mx-auto left-0 right-0">
                <img
                  className="mx-auto w-[100px] h-[100px] object-cover"
                  src={produto.imagem}
                  alt=""
                />
                <p className="text-white text-3xl font-Mont font-bold">
                  {produto.nome}
                </p>
                <p className="text-white  text-xl font-normal font-Mont">
                  R${produto.preco}
                </p>
              </div>
              <p className="text-white text-sm font-medium text-center mt-7 mb-4 font-Mont">
                {produto.descricao}
              </p>
              <Button />
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
};

export default Card2;
