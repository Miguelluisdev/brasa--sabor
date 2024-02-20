import { useState } from "react";
import { nomesAlimentos } from "../../types/Types";
import { nomesBebidas } from "../../types/Types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { GiSodaCan } from "react-icons/gi";
import ResultBarbecue from "../ResultBarbecue/ResultBarbecue"; 

const CalculatorBarbecue = () => {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen pt-9">
      <Formik
        initialValues={{
          pessoas: 0,
          selecaoAlimentos: [],
          selecaoBebidas: [],
        }}
        onSubmit={() => {
          setShowResult(true);
          console.log("teste");
        }}
      >
        <Form className="w-full max-w-lg bg-gradient-to-t from-Cinzaescuro to-Verdeescuro rounded-lg p-8">
          <h1 className="font-PermanentMarker font-bold text-2xl text-black">
            Calcule seu Churrasco
          </h1>
          <div className="mb-4">
            <label
              htmlFor="pessoas"
              className="text-black text-xl font-PermanentMarker mb-2 flex flex-row "
            >
              Numero de Pessoas: <FaPeopleGroup size={30} />
            </label>
            <Field
              name="pessoas"
              type="number"
              className=" text-black block w-full mt-1 px-4 py-2 border border-Vermelhoescuro  rounded-md focus:outline-none focus:border-Vermelhoescuro"
            ></Field>
          </div>

          <h2 className="text-black text-xl font-PermanentMarker mb-2 flex flex-row ">
            Selecione os Alimentos para o churrasco: <FaBowlFood size={30} />
          </h2>

          {Object.keys(nomesAlimentos).map((alimento) => (
            <div key={alimento} className="mb-2">
              <label htmlFor="selecaoAlimentos" className="">
                {nomesAlimentos[alimento]}
              </label>
              <Field
                type="checkbox"
                name="selecaoAlimentos"
                value={alimento}
                className="ml-2"
              ></Field>
            </div>
          ))}

          <h2 className="text-black text-xl font-PermanentMarker mb-2 flex flex-row ">
            Selecione as Bebidas: <GiSodaCan size={30} />
          </h2>
          {Object.keys(nomesBebidas).map((bebida) => (
            <div key={bebida} className="mb-2">
              <label htmlFor="selecaoBebidas" className="">
                {nomesBebidas[bebida]}
              </label>
              <Field
                type="checkbox"
                name="selecaoBebidas"
                value={bebida}
                className="ml-2"
              ></Field>
            </div>
          ))}

          <button
            type="submit"
            className="bg-Amarelo hover:bg-azul-celeste text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            {" "}
            Calcular
          </button>
          {showResult && <ResultBarbecue />}
        </Form>
      </Formik>
    </div>
  );
};

export default CalculatorBarbecue;
