

import { CartProvider } from '../contexts/CartProvider'; 

import churrasco from "../assets/churrasco.jpg";
import Header2 from '../components/CartStorage/Header2';
import CardStore from '../components/CartStorage/CardStore';
import ScrollTop from '../components/ScrollTop/ScrollTop';

const Storage = () => {
  return (
    <CartProvider> 
      <div
        className="animate-slide relative bg-fixed bg-cover bg-left md:bg-center min-h-screen w-full m-0"
        style={{
          backgroundImage: `url('${churrasco}')`,
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0, 0, 0, 0.412)",
        }}
      >
        <Header2/>
        <CardStore/>
      </div>
      <ScrollTop/>
    </CartProvider>
  );
};

export default Storage;
