import { motion } from "framer-motion";
import { variant2 } from "./ProductVariant";
import Button from "../Button/Button";
import { RiShoppingCart2Fill } from "react-icons/ri";
import bg from "../../assets/fd20089871820d5fdc7a72cf22a426b9.gif"
const ShowProduct = () => {
  return (
    <div className="min-h-screen p-5 lg:sticky -top-12  flex justify-center md:justify-end max-w-[1440px] w-full mx-auto" >
        <div className="md:max-w-md w-full" >
            <motion.h1  variants={variant2(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-white font-medium font-PermanentMarker text-4xl my-5" >
            Produtos <RiShoppingCart2Fill size={20} />
          </motion.h1>
            <motion.div variants={variant2(0.7)}
          initial="hidden"
          whileInView="show"
          className="bg-slate-900/50 md:bg-slate-700/50 border-2 border-slate-700 p-8 rounded-xl flex flex-col justify-center items-center">
          <img className="rounded-lg" src={bg} alt="Vídeo" />
          <div className="text-center">
            <h1 className="text-4xl text-white font-semibold mt-6 font-PermanentMarker">Conheça nossos produtos!</h1>
            <p className="text-lg my-5 text-white opacity-70 font-Mont">
              Temos uma variedade incrível de carnes, utensílios de churrasco e acessórios para tornar o seu churrasco ainda mais especial. Faça seu pedido agora e não perca tempo!
              Seja o primeiro a saber sobre nossas promoções e ofertas especiais se cadastrando agora!
            </p>
            <Button />
          </div>
        </motion.div>
        </div>
    </div>
  )
}

export default ShowProduct;
