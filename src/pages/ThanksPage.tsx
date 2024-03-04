import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCard , FormData , User , Item } from '../types/Types';


const ThanksPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [userCard, setUserCard] = useState<UserCard | null>(null);
  const [cart, setCart] = useState<Item[]>([]);
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  
    const formData = localStorage.getItem('formData');
    if (formData) {
      const parsedFormData = JSON.parse(formData);
      setFormData(parsedFormData.address); 
    }
  
    const userCard = localStorage.getItem('userCard');
    if (userCard) {
      setUserCard(JSON.parse(userCard));
    }
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-full p-6 bg-Verdeescuro rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb- text-black" >Obrigado pela sua compra!</h2>
        <p className="mb-2 text-black">Os detalhes da sua compra foram enviados para: {user?.name}</p>
        <p className="mb-2 text-black"> enviando para {formData?.city}</p>
        <p className="mb-2 text-black"> enviando para {formData?.district}</p>
        <p className="mb-2 text-black"> enviando para {formData?.state}</p>
        <p className="mb-2 text-black"> enviando para {formData?.zipCode}</p>
        <h3 className="text-lg font-semibold mt-4 mb-2 text-black">Produtos:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2 text-black">{item.nome} - R${item.preco}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2 text-black">Informações do cartão de crédito:</h3>
        <p className="mb-1 text-black">Número do cartão: {userCard?.number}</p>
        <p className="mb-1 text-black">Titular do cartão: {userCard?.name}</p>
        <p className="mb-1 text-black">Data de validade: {userCard?.expiry}</p>
        <p className="mb-1 text-black">Código de segurança: {userCard?.cvc}</p>
        <Link to="/" className="text-black mt-4 inline-block bg-Vermelhoescuro">Voltar para Home</Link>
      </div>
    </div>
  );
}

export default ThanksPage