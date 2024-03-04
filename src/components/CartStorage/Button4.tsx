import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button4 = () => {
  return (
    <Link to="/products" >
        <button
          className="text-black md:px-10 md:py-3 px-6 py-2 m-auto md:m-0 w-fit rounded-full bg-Vermelhoescuro  hover:bg-Marrom duration-200 hover:text-black border-gray-400 border-2"
        >
          Ver detalhes
          <FaInfoCircle className="ml-2" />
        </button>
    </Link>
  );
};

export default Button4;