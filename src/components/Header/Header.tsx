import { motion } from "framer-motion";
import { navVariants } from "./navVariants";
import { useState } from "react";
import { navbar } from "./NavBar";
import { Link} from "react-router-dom"; 
import { FaBars, FaTimes } from 'react-icons/fa';
import UserComponent from "./UserComponent";

const Header = () => {
    const [click, setClick] = useState<boolean>(false);

    return (
        <motion.div variants={navVariants} initial='hidden' whileInView='show' className="fixed top-0 left-0 right-0 mr-[3%] bg-tranparent p-5 max-w-[1440px] w-full mx-auto flex justify-around z-50">
            <h1 className="font-semibold font-PermanentMarker text-2xl text-Amarelo  my-3">{navbar.logo}</h1>
            <div className="flex gap-3 flex-col-reverse items-end md:flex-row  p-5 rounded-md ">
                <div className={`${click ? 'w-52 text-center sm:text-center py-10 sm:py-0 sm:w-fit px-5 opacity-100' : 'w-0 px-0 opacity-0'} overflow-hidden duration-200 sm:duration-1000  rounded-lg  flex flex-col sm:flex-row p-5 sm:items-center sm:justify-between gap-4 bg-black`}>
                    {navbar.links.map(({ url, text }) => (
                        <Link to={url} className="text-md hover:text-Verdeescuro duration-500 font-Mont"  key={text}>{text}</Link>
                    ))}
                </div>
                <div onClick={() => setClick(!click)} className="w-14 h-14 bg-teal-200 rounded-xl flex items-center justify-center cursor-pointer bg-black">
                {click ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                <UserComponent/>
            </div>
        </motion.div>
    );
}

export default Header;
