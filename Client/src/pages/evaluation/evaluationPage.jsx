import {useForm} from 'react-hook-form';
function EvaluationPage() {

  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={ handleSubmit((values) => console.log(values)
        )}>

        <input type="text" {...register("criterio1", { required: true })} 
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 1'/>
        
        <input type="text" {...register("criterio2", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 2' />
       
        <input type="text"  {...register("criterio3", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 3' />
        
        <input type="text"  {...register("criterio4", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 4' />
        
        <input type="text"  {...register("criterio5", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 5' />
       
        <input type="text"  {...register("criterio6", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 6' />
       
        <input type="text"  {...register("criterio7", { required: true })}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder='Criterio de evaluacion 7' />
       
        <button type="submit">Generar</button>
     
      </form>
   
    </div>
 
 )

}

export default EvaluationPage