import {useForm} from "react-hook-form";
//import { recordRequest } from "../../api/auth";
import { UseEvaluation } from "../../context/EvaluationContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 

function EvaluationForm() {
  
  const {register, handleSubmit} = useForm();
  const {createEvaluation} = UseEvaluation();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) =>{
    createEvaluation(data);
    navigate('/evaluationPage');
  });

  return (
<div>
      
 <div className="h-[72px] w-full max-width:1080px bg-[#313236] drop-shadow-lg ">
          <div
            className="font-poppins absolute left-[0] top-[0] inline-flex flex-col items-start gap-2.5 text-left font-[700] text-[#F3F3FB] transition-all"
          >
            <div
              className="relative h-[72px] w-[1440px] bg-[#313236] drop-shadow-lg"
            />
            <div className="absolute left-[812px] top-[23px] gap-8">

              <div className="flex items-center gap-8">
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <Link to="/record">
                  <button className="text-sm leading-5">Registro</button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                     <Link to="/evaluationForm">
                  <button className="text-sm leading-5">Evaluacion</button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <Link to="/inventory">
                  <button className="text-sm leading-5">Inventario</button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <Link to="/user">
                  <button className="text-sm leading-5">Perfil</button>
                    </Link>
                  </div>
                </div>
                <div
                  className="font-inter inline-flex items-start gap-1 text-left font-[500] text-[#F3F3FB]"
                >
                  <Link to="/supportalert">
                  <button className="text-sm leading-5">Solicitar Equipo</button>
                  </Link>
                  <div className="h-[18px] w-[18px]">
                    <svg
                      width="100%"
                      height="100%"

                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M 3.97 6.22 C 4.263 5.927 4.737 5.927 5.03 6.22 L 9 10.189 L 12.97 6.22 C 13.263 5.927 13.737 5.927 14.03 6.22 C 14.323 6.513 14.323 6.987 14.03 7.28 L 9.53 11.78 C 9.237 12.073 8.763 12.073 8.47 11.78 L 3.97 7.28 C 3.677 6.987 3.677 6.513 3.97 6.22 Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="absolute left-[72px] top-6 h-[21.57px] w-[205px] text-3xl uppercase"
            >
              FUEGOVision
            </p>
            <img className="w-14 h-12 left-[10px] top-[18px] absolute" src="https://1000marcas.net/wp-content/uploads/2022/06/Fire-Department-Logo.png" />
            <div className="relative left-0.5 top-2.5 h-12 w-[53px] overflow-clip">
              <div
               className="bg-image-1bg-0x absolute inset-0 bg-cover bg-center opacity-[0.45]"
              />
            </div>
          </div>
</div>     

<div className="flex h-[calc(130vh-2px)] items-center justify-center mt-20">
<div className="bg-zinc-800 max-w-md p-10 rounded-md">
<label className="text-4xl text-center text-white font-bold mt-6 mb-8">Evaluación</label>

    <form onSubmit={onSubmit} className="space-y-9">

      <div>
        <label htmlFor="Tipo_de_Incendio" className="text-white font-bold block mb-1">Tipo de Incendio</label>
        <select
          {...register('Tipo_de_Incendio', { required: true })}
          id="Tipo_de_Incendio"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        >
          <option value="">Selecciona una opción...</option>
          <option value="Urbano">Urbano</option>
          <option value="Industrial">Industrial</option>
          <option value="Total">Total</option>
        </select>
      </div>

      <div>
        <label htmlFor="Clase_de_incendio" className="text-white font-bold block mb-1">Clase de Incendio</label>
        <select
          {...register('Clase_de_Incendio', { required: true })}
          id="Clase de Incendio"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        >
          <option value="">Selecciona una opción...</option>
          <option value="A">Clase A</option>
          <option value="B">Clase B</option>
          <option value="C">Clase C</option>
          <option value="D">Clase D</option>
          <option value="F">Clase F</option>
        </select>
      </div>

      <div>
        <label htmlFor="Tamaño" className="text-white font-bold block mb-1">Tamaño de Incendio</label>
        <select
          {...register('Tamaño', { required: true })}
          id="Tamaño"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        >
          <option value="">Selecciona una opción...</option>
          <option value="Bajo">Bajo</option>
          <option value="Moderado">Moderado</option>
          <option value="Alto">Alto</option>
          <option value="Muy_Alto">Muy Alto</option>
          <option value="Extremo">Extremo</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="Brigadistas_a_desplegar" className="text-white font-bold block mb-1">Brigadistas a desplegar</label>
        <input
          type="number" min="4" max="13"
          {...register("Camiones_a_desplegar", { required: true })}
          id="Brigadistas_a_desplegar"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          placeholder='4 a 13'
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Camiones_a_desplegar" className="text-white font-bold block mb-1">Camiones a desplegar</label>
        <input
          type="number" min="1" max="6"
          {...register("Camiones_a_desplegar", { required: true })}
          id="Camiones_a_desplegar"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          placeholder='1 a 6'
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Colaboracion_otras_brigadas" className="text-white font-bold block mb-1">Colaboración con otras brigadas</label>
        <select
          {...register('Colaboracion_otras_brigadas', { required: true })}
          id="Colaboracion otras brigadas"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        >
          <option value="">Selecciona una opción...</option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="criterio7" className="text-white font-bold block mb-1">Criterio 7</label>
        <input
          type="text"
          {...register("criterio7", { required: true })}
          id="criterio7"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          placeholder='Criterio de evaluacion 7'
        />
      </div>
    

      <button
        className="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
        type="submit"
      >
        Generar
      </button>

    </form>
  </div>
</div> 


   
</div>
 )

}

export default EvaluationForm