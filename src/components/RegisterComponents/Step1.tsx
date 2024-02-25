import { useState } from "react";
import { motion } from "framer-motion";
import { variant1 } from "./VariantStep";
import { Link } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import {useForm} from "react-hook-form"


type Inputs = {
    name: string;
    password: string;
    email:string;
}

export default function Step1() {
    const { register, handleSubmit } = useForm<Inputs>();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const createUser = (data: Inputs) => {
        localStorage.setItem('userData', JSON.stringify(data));
    };


    
    return (
        <motion.div variants={variant1(0.5)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
            <div className="flex justify-center items-center h-screen">
                <form className="w-full md:w-3/4 lg:w-2/4 xl:w-1/3 p-8 bg-black rounded-lg shadow-lg" onSubmit={handleSubmit(createUser)}>
                    <h2 className="text-2xl font-semibold mb-4 text-center text-white">Cadastro - Passo 1</h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-white">Nome</label>
                            <input
                                id="name"
                                className="input rounded-md bg-gray-800 px-3 text-black focus:outline-none focus:bg-gray-700 transition-colors duration-300 w-full"
                                type="text"
                                placeholder="First name"
                                required
                                {...register("name")}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-white">Email</label>
                            <input
                                id="email"
                                className="input rounded-md px-3 bg-gray-800 text-black focus:outline-none focus:bg-gray-700 transition-colors duration-300 w-full"
                                type="email"
                                placeholder="Email"
                                required
                                {...register("email")}
                            />
                        </div>
                        <div className="space-y-2 relative">
                            <label htmlFor="password" className="block text-white">Senha</label>
                            <input
                                id="password"
                                className="input rounded-md bg-gray-800 text-black focus:outline-none focus:bg-gray-700 transition-colors duration-300 w-full pr-12 px-3"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password")}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-5%)',
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    color: "#8B0000"
                                }}
                            >
                                {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
                            </button>
                        </div>

                        <button className="button bg-Vermelhoescuro w-full transform hover:scale-105 transition duration-300 ease-in-out">
                            Cadastro
                        </button>
                        <Link to="/login" className="underline text-white">Se já fez o cadastro, faça o login</Link>
                    </div>
                </form>
            </div>
        </motion.div>
    )
}
