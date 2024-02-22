import { useLocation , useNavigate } from "react-router-dom"
import { Alimento, Bebidas , nomesAlimentos, nomesBebidas, quantidadePessoas } from "../../types/Types"
import Button from "../Button/Button"
type resultBarbecue = {
  pessoas: number;
  alimentosSelecionados: Alimento[];
  bebidasSelecionadas: Bebidas[]
}

const ResultBarbecue = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as resultBarbecue
  
  const totalAlimento = state.alimentosSelecionados.reduce(
    (acc, alimento) => {
      acc[alimento] = (quantidadePessoas[alimento] * state.pessoas) / 1000
      return acc;
    } , 
    {} as Record<Alimento,number>
    );

    const totalBebidas = state.bebidasSelecionadas.reduce(
      (acc, bebidas) => {
        acc[bebidas] = (quantidadePessoas[bebidas] * state.pessoas) / 10
        return acc;
      } , 
      {} as Record<Bebidas,number>
      );
  

  const reiniciar = () => {
    navigate("/barbecuemeter")
  }

  return (
    <div className="flex justify-center items-center h-screen pt-9">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4 text-black font-PermanentMarker">Resultado do churrasco</h1>
      <div>
        <h2 className="text-lg font-bold mb-2 text-black font-PermanentMarker" >Resultado para {state.pessoas} pessoas.</h2>
        {state.alimentosSelecionados.map((alimento) => (
          <p key={alimento} className="mb-2 text-black font-Mont">
            {nomesAlimentos[alimento]}: {totalAlimento[alimento]} kg
          </p>
        ))}
        {state.bebidasSelecionadas.map((bebida) => (
          <p key={bebida} className="mb-2 text-black font-Mont ">
            {nomesBebidas[bebida]}: {totalBebidas[bebida]} L
          </p>
        ))}
      </div>
      <button
        onClick={reiniciar}
        className="bg-Amarelo hover:bg-azul-celeste text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 mt-4"
      >
        Reiniciar
      </button>
      <div>
        <p className="mb-2 text-black font-Mont" >Aproveite e visite nossa loja</p>
        <Button/>
      </div>
    </div>
  </div>

  )
}

export default ResultBarbecue