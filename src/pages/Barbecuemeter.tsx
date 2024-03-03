import CalculatorBarbecue from "../components/CalculatorBarbecue/CalculatorBarbecue"
import Footer from "../components/Footer/Footer"
import bg from "../assets/festa-de-churrasco-comida-saborosa-na-mesa-de-madeira.jpg"

const Barbecuemeter = () => {
  return (
    <>
      <div className="bg-Cinza escuro scroll-smooth snap-y">
        <div
          className="animate-slide relative  bg-left md:bg-center min-h-screen w-full m-0"
          style={{
            backgroundImage: `url('${bg}')`, 
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0, 0, 0, 0.412)'
          }}
        >
          <CalculatorBarbecue />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Barbecuemeter
