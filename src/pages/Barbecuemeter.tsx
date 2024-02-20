import CalculatorBarbecue from "../components/CalculatorBarbecue/CalculatorBarbecue"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const Barbecuemeter = () => {
  return (
    <>

      <div className="bg-Cinza escuro scroll-smooth snap-y">
      <div className="animate-slide relative  bg-left md:bg-center min-h-screen w-full m-0" 
      style={{backgroundImage: "url('https://cdn.discordapp.com/attachments/1143246204285755412/1209581352945590272/festa-de-churrasco-comida-saborosa-na-mesa-de-madeira.jpg?ex=65e7716b&is=65d4fc6b&hm=2b3df00bc650f47552db06bee2191dbc7f098e7be00ccc66fdc08cc722dbf7b1&')" ,  backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)' }}
      >
        <Header/>
        <CalculatorBarbecue/>
      </div>
        <Footer/>
    </div>
    </>
  )
}

export default Barbecuemeter