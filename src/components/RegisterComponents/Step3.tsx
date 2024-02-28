import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { variant1 } from "./VariantStep";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schemaFormAddress = z.object({
  address: z.object({
    zipCode: z.string().min(9, "Informe um CEP válido"),
    street: z.string().min(1, "Informe uma Rua válida"),
    number: z.string().min(1, "Informe um Numero válido"),
    district: z.string().min(1, "Informe um Bairro válido"),
    complement: z.string().min(1, "Informe um complemento válido"),
    city: z.string().min(1, "Informe uma Cidade válida"),
    state: z.string().min(1, "Informe um Estado válido"),
  })
})
.transform((field) => ({
  address: {
    zipCode: field.address.zipCode,
    street: field.address.street,
    number: field.address.number,
    state: field.address.state,
    city: field.address.city,
    complement: field.address.complement,
    district: field.address.district,
  }
}))

type schemaAddress =  z.infer<typeof schemaFormAddress>
type AddressProps = {
  logradouro: string;
  uf: string;
  localidade: string;
  bairro: string;
  complemento: string;
}

const Step3 = () => { 
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } , watch , setValue } = useForm<schemaAddress>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaFormAddress),
    defaultValues: {
      address: {
        city: "",
        complement: "",
        district: "",
        number: "",
        state: "",
        street: "",
        zipCode: ""
      }
    }
  });

  const handleSubmitForm = (data: schemaAddress) => {
    localStorage.setItem('userData', JSON.stringify(data));
    navigate("/step3")
  };

  const handleSetData = useCallback((data: AddressProps) => {
    setValue("address.city", data.localidade);
    setValue("address.street", data.logradouro);
    setValue("address.state", data.uf);
    setValue("address.district", data.bairro);
    setValue("address.complement", data.complemento)
  }, [setValue])

  const handleFetchAddress = useCallback(async (zipcode: string) => {
  const {data} =  await axios.get(
    `https://viacep.com.br/ws/${zipcode}/json/`
    );
    handleSetData(data)
  }, [handleSetData]);

  const zipCode = watch("address.zipCode");

  useEffect(() => {
    setValue("address.zipCode" , zipCode)
      if (zipCode.length !== 9) return;
      handleFetchAddress(zipCode)
 }, [handleFetchAddress , setValue , zipCode])

  return (
    <div className="flex justify-center items-center h-screen" style={{backgroundImage: "url('https://cdn.discordapp.com/attachments/1205228548986511420/1211426287311134780/proximo-do-delicioso-churrasco-mexicano.jpg?ex=65ee27a6&is=65dbb2a6&hm=4eb71d0e41ee6031444394646926180bc8ca8616bd9c163bb07464b983717655&')" ,  backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)' }}>
      <motion.div variants={variant1(0.5)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="bg-opacity-50 bg-black p-8 rounded-md">
        <h2 className='text-center text-white font-PermanentMarker font-medium text-3xl mb-4'>Cep - passo 3</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col items-center">
          <input 
            {...register("address.zipCode")}
            type="text"
            placeholder="Digite seu CEP"
            maxLength={9} 
            className="border border-yellow-400 text-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
          />
          {errors.address?.zipCode?.message && <p className="font-Mont text-white text-md" >{errors.address?.zipCode?.message}</p>}
          <input 
            {...register("address.street")}
            type="text"
            placeholder="Rua" 
            className="border border-yellow-400 text-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
          />
           {errors.address?.street?.message && <p className="font-Mont text-white text-md" >{errors.address?.street?.message}</p>}
           <input 
            {...register("address.district")}
            type="text"
            placeholder="Bairro"
            className="border border-yellow-400 text-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
          />
           {errors.address?.district?.message && <p className="font-Mont text-white text-md" >{errors.address?.district?.message}</p>}
           <input 
            {...register("address.complement")}
            type="text"
            placeholder="Complemento" 
            className="border border-yellow-400 text-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
          />
           {errors.address?.complement?.message && <p className="font-Mont text-white text-md" >{errors.address?.complement?.message}</p>}
           <input 
            {...register("address.city")}
            type="text"
            placeholder="Cidade" 
            className="border border-yellow-400 text-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
          />
           {errors.address?.city?.message && <p className="font-Mont text-white text-md" >{errors.address?.city?.message}</p>}
           <input 
            {...register("address.state")}
            type="text"
            placeholder="Estado"
            className="border border-yellow-400 text-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
          />
           {errors.address?.state?.message && <p className="font-Mont text-white text-md" >{errors.address?.state?.message}</p>}
          <button type="submit" className="bg-Amarelo text-white px-4 py-2 rounded-md hover:bg-Vermelhoescuro focus:outline-none focus:bg-azul-celeste">Enviar</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Step3;
