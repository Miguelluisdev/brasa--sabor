import { motion } from "framer-motion"
import { variant6 } from "./ChurrasVariant"
import Button2 from "../Button/Button2"

const Churras = () => {
  return (
    <div className=" z-10 md:sticky top-10 my-10 flex gap-x-10 gap-y-20 items-center justify-evenly md:justify-between flex-wrap-reverse md:flex-nowrap">
    <motion.div variants={variant6(0.5)} initial='hidden' whileInView='show' className=" md:flex-1">
      <img className=" animate-pulse max-w-xl w-full" src="https://cdn.discordapp.com/attachments/1205228548986511420/1208184860787736668/12d7186dd5aac3d7d2f2233788e92b02.jpg?ex=65e25cd5&is=65cfe7d5&hm=312eb6abd75e3d354d531cf7e95468e0048fae56e88364e510434ed417468230&" alt="" />
    </motion.div>
    <motion.div variants={variant6(0.7)} initial='hidden' whileInView='show' className="flex-1 max-w-xl md:max-w-md w-full mx-auto md:mx-0 md:mt-36 text-center md:text-left">
      <h1 className=" text-white font-PermanentMarker text-3xl">Churrascometro</h1>
      <p className=" py-5 text-white font-Mont text-sm">Aprobeite e monte seu churrasco usando o churrascometro</p>
      <Button2 />
    </motion.div>
  </div>
  )
}

export default Churras