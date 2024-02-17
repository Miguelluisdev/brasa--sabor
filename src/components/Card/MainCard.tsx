import Card from "./Card"

const Games = () => {
  return (
    <>
      <h1 className=' py-9 text-center text-white text-4xl font-PermanentMarker'>Mais Produtos</h1>
      <div className="flex flex-row justify-center md:justify-between gap-10 flex-wrap md:flex-nowrap">
       <Card/>
      </div>
    </>
  )
}

export default Games