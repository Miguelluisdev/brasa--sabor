import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variant3 } from "./CardVariant";
import Button from "../Button/Button";


import Loading from "../Loading/Loading";

interface CardProps {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco?: string;
}



const Card: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CardProps[]>(
          "https://api-storage-tiaw-puce.vercel.app/utensiliosChurrasco"
        );
        console.log(response);
        setProduct(response.data.slice(0, 4));
        setLoading(false); 
      } catch (error) {
        console.error("error ao obter produtos");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center flex-wrap">
      {loading ? (
       <Loading/> 
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

export default Card;
