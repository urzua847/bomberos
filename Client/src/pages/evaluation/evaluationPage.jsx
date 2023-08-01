import {useForm} from 'react-hook-form';
import { evaluationRequest } from '../../api/auth';
function EvaluationPage() {

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) =>{
    const res = await evaluationRequest(values)
    console.log(res)
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md"> 
    
      <h1 className="text-2xl text-center text-white font-bold mt-40">Evaluación</h1>
<br />
        <form onSubmit={onSubmit}>

        <label>Tipo de Incendio</label>
        <select {... register('Tipo_de_Incendio', {required: true})} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        >

          <option value="">Selecciona una opción...</option>
          <option value="Urbano">Urbano</option>
          <option value="Industrial">Industrial</option>
          <option value="Total">Total </option>
        </select>
      
        <label>Clase de Incendio</label>
        <input type="text" {...register("Clase_de_incendio", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 2' />
        
   
        <label>Tamaño de Incendio</label>
        <input type="text"  {...register("Tamaño", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 3' />
        
        
        <label>Brigadistas a desplegar</label>
        <input type="text"  {...register("Brigadistas_a_desplegar", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 4' />
        
        <label>Camniones a desplegar</label>

        <input type="text"  {...register("Camiones_a_desplegar", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 5' />
       
        <input type="text"  {...register("Colaboracion_otras_brigadas", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 6' />
       
        <input type="text"  {...register("criterio7", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 7' />
       
        <button type="submit">Generar</button>
     
      </form>
      </div>
   
    </div>
 
 )

}

export default EvaluationPage