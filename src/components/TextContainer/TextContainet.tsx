import { motion } from "framer-motion"
import { variant2 , textContainer } from "./TextVariant"
import ShowProduct from "../ShowProduct/ShowProduct"
import bg from "../../assets/images.jpg"

const TextContainet = () => {
  return (
    <motion.div variants={textContainer} className="min-h-screen mt-20 bg-gradient-to-t from-Cinzaescuro to-transparent" >
        <div className="p-5 flex justify-center md:justify-end lg:justify-start max-w-[1440px] w-full mx-auto" >
            <div className="text-center md:text-left md:max-w-md w-full py-8" >
              <motion.img className="mx-auto md:mx-0" variants={variant2(0.5)} initial='hidden' whileInView='show' src={bg} alt="" />
                <motion.h1 variants={variant2(0.6)} initial='hidden' whileInView='show' className='text-white font-medium font-PermanentMarker text-4xl mt-7' >Monte seu Churrasco</motion.h1>
                <motion.p variants={variant2(0.7)} initial='hidden' whileInView='show' className="text-lg my-5 text-white opacity-70 font-Mont font-medium">Aqui na Brasa & Sabor, oferecemos uma ampla variedade de carnes de alta qualidade, utensílios para churrasco e dicas para tornar o seu churrasco ainda mais especial. Explore nossos produtos e monte o seu churrasco dos sonhos!</motion.p>
            </div>
        </div>
        <ShowProduct/>
    </motion.div>
  )
}

export default TextContainet
