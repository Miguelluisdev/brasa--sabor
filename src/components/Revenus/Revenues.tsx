import { motion } from 'framer-motion';
import { variant7 } from './RevVariants';

import bg from "../../assets/Design-sem-nome-2-1-1200x480.png"

const Revenues = () => {
  return (
    <div className="text-center md:text-left py-10 overflow-hidden transform-style"  >
      <div className='bg-azul-celeste bg-cover bg-center -z-[1] translate3d min-h-full rounded-3xl' style={{backgroundImage: `url('${bg}')` ,  backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)'}}>
        <div className="px-5 md:px-20 py-40">
          <motion.div variants={variant7(0.4)} initial='hidden' whileInView='show' className="md:max-w-md w-full">
            <h1 className='text-white font-PermanentMarker text-3xl md:text-5xl'>Veja algumas receitas deliciosas</h1>
            <p className='pt-3 pb-6 text-white font-Mont'>
              Descubra sabores incríveis e aprenda a preparar pratos deliciosos para o seu churrasco. Temos uma variedade de receitas que vão surpreender seus convidados e tornar o seu evento ainda mais especial.
            </p>
            <a href="https://www.academiadacarnefriboi.com.br"><button className="text-black md:px-14 md:py-4 px-8 py-3 m-auto md:m-0 w-fit bg-Marrom rounded-full hover:bg-transparent duration-200 hover:border-white hover:text-white border-azul-celeste border-2">Veja Mais</button></a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Revenues;
