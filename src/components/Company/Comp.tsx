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
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817571852881920/logo-steaks-branco.png?ex=65e106c5&is=65ce91c5&hm=a543031046172e05d037889ade753fbdb0493d0eb5edd9f2304a854055a47ef4&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Steaks</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817572196548670/zarla-santo-steak-1x1-2400x2400-20220324-hqbb3d7bvrc46brbvyht.png?ex=65e106c5&is=65ce91c5&hm=f69fcd58d266bbea56a99c84c42cfe19fc9c144c7d8ea8002d40b4c0fc93d9ea&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Santo Steak</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817572431691886/casa_do_churrasco_logomarca_fundo_cinz.png?ex=65e106c5&is=65ce91c5&hm=466866d37e9a5f0a7b9a6aac1c920277a0587ad5805747576a8eb2d0065b637e&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Casa Churrasco</p>
        </div>
         <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817864237817886/907993.png?ex=65e1070b&is=65ce920b&hm=9eb520a53e07af89a906f48199d1fdd4e376490cc9e14b499647808b773f5219&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Churrasqueira Bixo</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207817864493535253/logo_big_churrasco.png?ex=65e1070b&is=65ce920b&hm=dbbdc5a7ab1c0299f2492b57c7d8fcc827d6ec055b9bf2e28c8359f59cc4c4c7&" 
            alt=""
            className="w-[30%] h-[30%]"
          />
          <p className="text-md mt-2 font-Mont">Big Churrasco</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1205228548986511420/1207818174121119925/101166.png?ex=65e10754&is=65ce9254&hm=63a6240cbc56cefcb144e348729a48036081ff8add70453144d4cd34d11d8ecb&" 
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
