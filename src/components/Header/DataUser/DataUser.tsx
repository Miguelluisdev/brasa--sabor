import React, { useState, useEffect } from 'react';
import { User, FormData, UserCard } from '../../../types/Types'; 
import { Link } from 'react-router-dom';

const DataUser: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [userCard, setUserCard] = useState<UserCard | null>(null);

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

  const handleLogout = () => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { email, password } = JSON.parse(userData);
      localStorage.setItem('userData', JSON.stringify({ email, password }));
    }
    setUser(null);
  };
  
  const handleDeleteAccount = () => {
   
    localStorage.removeItem('userData');
    localStorage.removeItem('formData');
    localStorage.removeItem('userCard');
    setUser(null);
    setFormData(null);
    setUserCard(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-">
      <div className="max-w-md p-6 border rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4 font-PermanentMarker">Detalhes do Usuário</h1>
        {user && (
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <p className="text-white">
                <span className="font-bold">Nome:</span> {user.name}
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-gray-700">
                <span className="font-bold">Email:</span> {user.email}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700">
                <span className="font-bold">Senha:</span> {user.password}
              </p>
            </div>
          </div>
        )}

        {formData && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-2 md:col-span-1">
              <p className="text-gray-700">
                <span className="font-bold">Cidade:</span> {formData.city}
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-gray-700">
                <span className="font-bold">Complemento:</span> {formData.complement}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700">
                <span className="font-bold">Bairro:</span> {formData.district}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700">
                <span className="font-bold">Número:</span> {formData.number}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700">
                <span className="font-bold">Estado:</span> {formData.state}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700">
                <span className="font-bold">Rua:</span> {formData.street}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700">
                <span className="font-bold">CEP:</span> {formData.zipCode}
              </p>
            </div>
          </div>
        )}

        {userCard && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-2 md:col-span-1">
              <p className="text-gray-700">
                <span className="font-bold">Nome no Cartão:</span> {userCard.name}
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-gray-700">
                <span className="font-bold">Número do Cartão:</span> {userCard.number}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700">
                <span className="font-bold">CVC:</span> {userCard.cvc}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700">
                <span className="font-bold">Expiração:</span> {userCard.expiry}
              </p>
            </div>
          </div>
        )}

    <div className="flex justify-end mt-6">
          <button className="bg-Vermelhoescuro text-white px-4 py-2 rounded mr-4" onClick={handleLogout}>
            Logout
          </button>
          <button className="bg-Vermelhoescuro text-white px-4 py-2 rounded" onClick={handleDeleteAccount}>
            Excluir Conta
          </button>
          <Link to="/">
              <button className=" text-white px-4 py-2 rounded" >
                Voltar a Home
              </button>
          </Link>
    </div>
      </div>
    </div>
  );
};

export default DataUser;
