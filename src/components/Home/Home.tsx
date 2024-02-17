import {motion} from "framer-motion"
import {variant1} from "./HomeVariant"
import Button from "../Button/Button"

const Home = () => {
  return (
    <motion.div variants={variant1(0.5)} initial="hidden" whileInView="show" viewport={{once:false , amount: 0.25}} >
      <div className="p-5 text-center md:text-center flex justify-center md:justify-center items-center min-h-screen h-full
      max-w-[1440px] w-full mx-auto pt-14">
          <div className=" max-w-xl md:max-w-md w-full mx-auto sm:mx-0  gap-5 flex items-center justify-center flex-col " >
          <h1 className="text-white text-7xl font-medium font-PermanentMarker leading-[60px]">Bem-vindo à Brasa & Sabor</h1>
          <p className="text-white text-opacity-90 text-xl font-medium tracking-wide">Explore a melhor seleção de carnes e utensílios para churrasco para tornar o seu churrasco inesquecível.</p>
          <Button />
        </div>
      </div>
    </motion.div>
  )
}

export default Home