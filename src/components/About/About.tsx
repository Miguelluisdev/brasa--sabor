import { motion } from "framer-motion";
import { variant5 } from "./AboutVariant";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <motion.div variants={variant5(0.4)} initial='hidden' whileInView='show' className="max-w-xl md:max-w-md w-full mx-auto md:mx-0  text-center md:text-left"   >
      <h1 className="text-white text-6xl font-PermanentMarker">Sobre Nós</h1>
      <p className="text-white  font-Mont text-md my-6">
        Somos uma loja especializada em utensílios de churrasco e carnes de qualidade premium. Aqui no nosso estabelecimento, você encontra tudo o que precisa para fazer um churrasco inesquecível, desde facas afiadas até os cortes mais suculentos de carne. Além disso, oferecemos o Churrascometro, uma ferramenta exclusiva para calcular a quantidade de carne necessária para o seu evento. E o melhor de tudo, garantimos os melhores preços do mercado. Siga-nos nas redes sociais para ficar por dentro das nossas promoções!
      </p>
      <div className="flex items-center justify-center md:justify-start cursor-pointer  ">
        <a href="https://www.instagram.com/migu3lluiz?igsh=OGppOG05c25mY292">
          <FaInstagram className="text-white text-3xl mx-3 hover:text-azul-celeste " size={50} />
        </a>
        <a href="#">
          <FaWhatsapp className="text-white text-3xl mx-3 hover:text-azul-celeste "  size={50} />
        </a>
      </div>
    </motion.div>
  );
}

export default About;
