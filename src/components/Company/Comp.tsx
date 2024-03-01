import React from 'react';
import Marquee from 'react-fast-marquee';
import 'tailwindcss/tailwind.css';

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
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817571852881920/logo-steaks-branco.png?ex=65f37bc5&is=65e106c5&hm=3bea62c970b6785bac0df180cc51088e3cc6b2daf8a30646b08da975d1343494&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Steaks</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817572196548670/zarla-santo-steak-1x1-2400x2400-20220324-hqbb3d7bvrc46brbvyht.png?ex=65f37bc5&is=65e106c5&hm=4ebd9840c89d8a24e854f72195336385020717152cb7e9d9c7ad1d7ce13d860d&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Santo Steak</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817572431691886/casa_do_churrasco_logomarca_fundo_cinz.png?ex=65f37bc5&is=65e106c5&hm=a8818a42a0bea92f032a195bdd2debac6751a1b39f5784d5195fd24afaea7d87&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Casa Churrasco</p>
        </div>
         <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817864237817886/907993.png?ex=65f37c0b&is=65e1070b&hm=b6063c317611d8f74b9fd147a38bf27e4942c521be2c26b44b035da65439c07c&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Churrasqueira Bixo</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817864493535253/logo_big_churrasco.png?ex=65f37c0b&is=65e1070b&hm=a9e142d2e6b431580272396f0e5d233beefa19e3b3e81b5fbdb08b468f7c4eaf&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Big Churrasco</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207818174121119925/101166.png?ex=65f37c54&is=65e10754&hm=29a57622f353b0cc39ab85de2c0f1e08e30f05502a2b3239df41227d2f7b6c39&" 
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
