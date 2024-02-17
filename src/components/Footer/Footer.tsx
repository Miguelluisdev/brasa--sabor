
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-10 bg-Vermelhoescuro">
      <div className="py-10 flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-10">
        <div className='md:flex-1 w-full mx-auto text-center md:text-left  p-5'>
          <h1 className='text-2xl text-Amarelo font-semibold mb-2 font-PermanentMarker'>Brasa&Sabor</h1>
          <p className='text-white text-sm font-Mont'>Somos uma loja especializada em utensílios de churrasco e carnes de qualidade premium. Aqui no nosso estabelecimento, você encontra tudo o que precisa para fazer um churrasco inesquecível, desde facas afiadas até os cortes mais suculentos de carne. </p>
        </div>
        <div className='md:flex-1 w-full mx-auto text-center md:text-left'>
          <h1 className='text-2xl text-white font-semibold mb-2 font-PermanentMarker'>Redes Sociais</h1>
          <div className="flex space-x-4">
            <FaFacebook className="text-white text-2xl cursor-pointer hover:text-azul-celeste" />
            <FaInstagram className="text-white text-2xl cursor-pointer hover:text-azul-celeste" />
            <FaTwitter className="text-white text-2xl cursor-pointer hover:text-azul-celeste" />
            <FaYoutube className="text-white text-2xl cursor-pointer hover:text-azul-celeste" />
          </div>
        </div>
      </div>
      <div className="text-sm text-center text-white font-Mont">© 2023 by Brasa&Sabor. Created on <span className='underline '>Miguel Luis.</span></div>
    </div>
  )
}

export default Footer;
