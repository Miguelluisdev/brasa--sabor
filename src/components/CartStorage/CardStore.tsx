import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variant3 } from "./CardVariant";
import axios from "axios";
import Loading from "../Loading/Loading";
import { useCart } from "../../contexts/CartProvider"; 

interface CardProps {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco?: string;
}

const CardStore: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<CardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Use o hook useCart para acessar as funções do carrinho
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CardProps[]>(
          "https://api-storage-tiaw-puce.vercel.app/utensiliosChurrasco"
        );
        console.log(response);
        setProduct(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("error ao obter produtos");
      }
    };
    fetchData();
  }, []);

  const filteredProducts = product.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-400 rounded px-3 py-1 my-4 text-black"
      />
      <div className="flex justify-center flex-wrap">
        {loading ? (
          <Loading /> 
        ) : (
          <>
            {filteredProducts.map((produto) => (
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
                <button
                  onClick={() => addToCart(produto)}
                  className="text-black md:px-10 md:py-3 px-6 py-2 m-auto md:m-0 w-fit rounded-full bg-Vermelhoescuro  hover:bg-Marrom duration-200 hover:text-black border-gray-400 border-2"
                >
                  Adicionar ao carrinho
                </button>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CardStore;
