
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
      style={{backgroundImage: "url('https://cdn.discordapp.com/attachments/1205228548986511420/1207393226311344128/proximo-do-delicioso-churrasco-mexicano.jpg?ex=65f1f091&is=65df7b91&hm=0cb8b3069e30284748ac0aa6f9ecd04702fe165b0fbf6d5757f5c773a4481b5c&')" ,  backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)' }}
      >
        <Header/>
        <Home/>
        <Comp/>
        <TextContainet/>
      </div>

      <div className="animate-slide bg-cover bg-gradient-to-tr bg-no-repeat from-Cinzaescuro  h-full" style={{backgroundImage: "url('https://cdn.discordapp.com/attachments/1205228548986511420/1208132729515016232/bife-suculento-carne-rara-medio-com-especiarias-e-legumes-grelhados.jpg?ex=65f4a148&is=65e22c48&hm=1d5aef7477349538fc2febb6cfe434df9874ae2a02d57f59fe1feb28172dd8f9&')" ,  backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)'}}>
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