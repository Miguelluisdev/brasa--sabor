
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

const BaseLayout = () => {
  return (
    <>

      <div className="bg-Cinza escuro scroll-smooth snap-y">
      <div className="animate-slide relative bg-fixed bg-cover bg-left md:bg-center min-h-screen w-full m-0" 
      style={{backgroundImage: "url('https://cdn.discordapp.com/attachments/1205228548986511420/1207393226311344128/proximo-do-delicioso-churrasco-mexicano.jpg?ex=65df7b91&is=65cd0691&hm=7cfcb8bcdf4bae3f2a1d629806f5ac7583ce2d4a67f5f16928e0db17b2250119&')" ,  backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)' }}
      >
        <Header/>
        <Home/>
        <Comp/>
        <TextContainet/>
      </div>

      <div className="animate-slide bg-cover bg-gradient-to-tr bg-no-repeat from-Cinzaescuro  h-full" style={{backgroundImage: "url('https://cdn.discordapp.com/attachments/1205228548986511420/1208132729515016232/bife-suculento-carne-rara-medio-com-especiarias-e-legumes-grelhados.jpg?ex=65e22c48&is=65cfb748&hm=0520007e631bede78db6e2e5df31a9cf602ff78ac6d2e3b9930ef6f93c8accdc&')" ,  backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)'}}>
          <div className="max-w-[1440px] w-full mx-auto p-5">
           <MainCard/>
           <About/>
          </div>
          {/* <div className=" -mt-48 h-96 w-full bg-gradient-to-b from-transparent to-Cinzaescuro"></div> */}
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