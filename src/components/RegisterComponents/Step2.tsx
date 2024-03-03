import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Cards from 'react-credit-cards-2';
import { motion } from "framer-motion";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { variant1 } from './VariantStep';
import bg from "../../assets/proximo-do-delicioso-churrasco-mexicano.jpg"

const Step2 = () => {
  const navigate = useNavigate(); 

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    localStorage.setItem('userCard', JSON.stringify(state)); 
    navigate('/step3'); 
  }

  return (
    <motion.div variants={variant1(0.5)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
      <div className="bg-cover bg-center bg-no-repeat h-screen flex-col flex items-center justify-center "  
           style={{
             backgroundImage: `url('${bg}')`, 
             backgroundBlendMode: 'darken',
             backgroundColor: 'rgba(0, 0, 0, 0.412)'
           }}
      >
        <h1 className='bg-Verdeescuro text-white font-PermanentMarker font-medium text-3xl' >
          passo 2 - apenas simula um cartão não possui validação use 4devs
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
          />
          <form onSubmit={handleSubmit}> 
            <input
              type="text"
              name="number"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="w-full p-2 mb-4 border border-black text-black rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="w-full p-2 mb-4 border  border-black text-black rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="w-full p-2 mb-4 border  border-black text-black rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="name"
              placeholder="Card Holder's Name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="w-full p-2 mb-4 border  border-black text-black rounded-md focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="w-full p-2 bg-azul-celeste hover:bg-Amarelo text-white rounded-md">Enviar</button> 
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Step2;
