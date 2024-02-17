import { Link} from "react-router-dom"; 

const Button = () => {
  return (
    <Link to="/storage"><button className="text-black md:px-14 md:py-4 px-8 py-3 m-auto md:m-0 w-fit bg-Marrom rounded-full hover:bg-transparent duration-200 hover:border-white hover:text-white border-azul-celeste border-2">Veja Mais</button></Link>
  )
}

export default Button