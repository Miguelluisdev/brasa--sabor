import React from 'react';
import Marquee from 'react-fast-marquee';
import 'tailwindcss/tailwind.css';
import bg from "../../assets/logo-steaks-branco.png"
import bg2 from "../../assets/zarla-santo-steak-1x1-2400x2400-20220324-hqbb3d7bvrc46brbvyht.png"
import bg3 from "../../assets/casa_do_churrasco_logomarca_fundo_cinz.png"
import bg4 from "../../assets/907993.png"
import bg5 from "../../assets/logo_big_churrasco.png"
import bg6 from "../../assets/101166.png"

const Comp: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-Cinzaescuro to-azul-celeste py-4 flex flex-col items-center animate-slide ">
      <div className="title text-center mb-4">
        <h1 className="text-lg font-PermanentMarker font-medium">Empresas Parceiras</h1>
      </div>

      <div className="w-full p-3">
        <Marquee direction="right" gradient={true} delay={1} speed={50} gradientColor="#8B0000, #080F26" gradientWidth={10} >
          <div className="flex flex-col items-center">
            <img 
              src={bg} 
              alt=""
              className="w-[30%] h-[30%]"
            />
            <p className="text-md mt-2 font-Mont">Steaks</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={bg2} 
              alt=""
              className="w-[30%] h-[30%]"
            />
            <p className="text-md mt-2 font-Mont">Santo Steak</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={bg3} 
              alt=""
              className="w-[30%] h-[30%]"
            />
            <p className="text-md mt-2 font-Mont">Casa Churrasco</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={bg4} 
              alt=""
              className="w-[30%] h-[30%]"
            />
            <p className="text-md mt-2 font-Mont">Churrasqueira Bixo</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={bg5} 
              alt=""
              className="w-[30%] h-[30%]"
            />
            <p className="text-md mt-2 font-Mont">Big Churrasco</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={bg6} 
              alt=""
              className="w-[30%] h-[30%]"
            />
            <p className="text-md mt-2 font-Mont">Utensílios Churras</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Comp;
