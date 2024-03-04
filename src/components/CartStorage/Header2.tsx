import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa'; 
import { useCart } from '../../contexts/CartProvider'; 
import UserComponent from '../Header/UserComponent';

const Header2= () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); 
  const { cart, updateCart, removeCart } = useCart(); 
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => {
    if (item.preco) {
      return total + (parseFloat(item.preco) * item.quantity);
    }
    return total;
  }, 0).toFixed(2);

  const confirmPurchase = () => {
    const userData = localStorage.getItem("userData");
    const user = userData ? JSON.parse(userData) : null;
    
    if (!user || !user.name) {
      navigate("/register");
      return; 
    } else {
      navigate("/thanks")
    }
  
    if (cart.length === 0) {
      console.log("O carrinho está vazio. Adicione itens para fazer uma compra.");
      return; 
    }
    console.log("Compra confirmada");
  };
  

  return (
    <>
    <nav className="bg-Vermelhoescuro p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight font-PermanentMarker">Loja</span>
        </div>
        <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-end">
            <Link to="/" className="mr-4 text-gray-300 hover:text-white">Home</Link>
            <Link to="/barbecuemeter" className="mr-4 text-gray-300 hover:text-white">Churrascometro</Link>
            <Link to="/login" className="mr-4 text-gray-300 hover:text-white">Login</Link>
            <Link to="/register" className="mr-4 text-gray-300 hover:text-white">Registro</Link>
          </div>
        </div>
        <div className="flex items-center">
          <button className="lg:hidden flex items-center px-3 py-2 text-white hover:text-white hover:border-white" onClick={toggleMenu}>
            <FaBars className="h-4 w-4" />
          </button>
          <div className="relative">
            {cartOpen && (
              <div className="fixed inset-0 z-10 flex justify-center items-center ">
                <div className="absolute inset-0 bg-black bg-opacity-80" onClick={toggleCart}></div>
                <div className="bg-Verdeescuro p-4 rounded-md w-80 absolute top-0 right-0 text-white font-Mont">
                  <div className="flex justify-between items-center mb-4  text-white font-PermanentMarker">
                    <h2 className="text-lg text-black font-semibold">Carrinho</h2>
                    <button onClick={toggleCart}>
                      <FaTimes className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>
                  {cart.map((product) => (
                    <div key={product.id} className="flex items-center justify-between mb-2">
                      <div>
                        <img src={product.imagem} alt={product.nome} className="w-30 h-30 object-cover rounded-md mr-2" />
                        <div  >
                          <p className='text-black' >{product.nome}</p>
                          <p className='text-black'>{product.preco ? `R$${product.preco}` : 'Preço não disponível'}</p>
                        </div>
                      </div>
                      <div>
                        <button className="text-white  w-10 h-10 bg-Cinzaescuro  hover:bg-Marrom duration-200 hover:text-black border-gray-400 border-1"  onClick={() => updateCart(product.id, product.quantity - 1)}>-</button>
                        <span className='text-black text-xl' >{product.quantity}</span>
                        <button className="text-white  w-10 h-10 bg-Cinzaescuro  hover:bg-Marrom duration-200 hover:text-black border-gray-400 border-1" onClick={() => updateCart(product.id, product.quantity + 1)}>+</button>
                        <button className="text-white  w-40 h-10 bg-Cinzaescuro  hover:bg-Marrom duration-200 hover:text-black border-gray-400 border-1"  onClick={() => removeCart(product.id)}>Remover</button>
                      </div>
                    </div>
                  ))}
                  <p className="text-xl font-semibold mt-4 text-black">Total: R${totalPrice}</p>
                  <button className="bg-black text-white px-4 py-2 mt-4 hover:bg-gray-900" onClick={confirmPurchase}>Confirmar Compra</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
    <button className="flex items-center justify-center px-3 py-2 text-white w-full bg-black hover:text-white hover:border-white" 
      onClick={toggleCart}>
        Carrinho
      <FaShoppingCart className="h-4 w-4 mr-1" />
      <span>{totalQuantity}</span> 
    </button>
    <UserComponent/>
    </>
  );
}

export default Header2;
