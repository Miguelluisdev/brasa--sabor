import About from "../components/About/About"
import MainCard from "../components/Card/MainCard"
import Churras from "../components/Churrascometro/Churras"
import Comp from "../components/Company/Comp"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Home from "../components/Home/Home"
import Revenues from "../components/Revenus/Revenues"
import ScrollTop from "../components/ScrollTop/ScrollTop"
import TextContainet from "../components/TextContainer/TextContainet"
import bg from "../assets/proximo-do-delicioso-churrasco-mexicano22.jpg"
import bg2 from "../assets/bife-suculento-carne-rara-medio-com-especiarias-e-legumes-grelhados.jpg"

const BaseLayout = () => {
  return (
    <>
      <div className="bg-Cinza escuro scroll-smooth snap-y">
        <div className="animate-slide relative bg-fixed bg-cover bg-left md:bg-center min-h-screen w-full m-0" 
          style={{
            backgroundImage: `url('${bg}')`, 
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0, 0, 0, 0.412)'
          }}
        >
          <Header/>
          <Home/>
          <Comp/>
          <TextContainet/>
        </div>

        <div className="animate-slide bg-cover bg-gradient-to-tr bg-no-repeat from-Cinzaescuro  h-full" 
          style={{
            backgroundImage: `url('${bg2}')`, 
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0, 0, 0, 0.412)'
          }}
        >
          <div className="max-w-[1440px] w-full mx-auto p-5">
            <MainCard/>
            <About/>
          </div>
        </div>

        <div className=" relative max-w-[1440px]  w-full mx-auto p-5 ">
          <Churras />
          <div className=" absolute md:static inset-0 w-full h-screen flex items-start justify-start">
            <div className=" h-[300px] w-1/2 -ml-[30%] gradient-01"></div>
          </div>
        </div>
        
        <div className=" relative max-w-[1440px] w-full mx-auto p-5"   >
          <Revenues/>
        </div>
        <Footer/>
      </div>
      <ScrollTop/>
    </>
  )
}

export default BaseLayout
