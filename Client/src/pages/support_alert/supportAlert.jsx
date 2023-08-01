import {useForm} from "react-hook-form";
import { supportAlertRequest } from "../../api/auth";

function supportAlertPage() {
  
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(async (values) =>{
    const res = await supportAlertRequest(values)
    console.log(res)
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center "> <div/> 
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <h1 className="text-2xl text-center text-white font-bold mt-10">Registro</h1>
        <form onSubmit={onSubmit}>
          
          <p>
          <label>Recursos asignados</label>
          <input type="text" {... register('assignedResources', {required: true})} 
            placeholder="ID del recurso" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1 " 
          />
          <input type="text" {... register('TDR', {required: true})} 
            placeholder="Tipo de recurso" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1" 
          />
          <input type="text" {... register('EDR', {required: true})} 
            placeholder="Estado del recurso" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1" 
          />
          </p>
          <br/>

          <p>Registro de acciones</p>
          <input type="text" {... register('Description', {required: true})} 
            placeholder="descripcion de la accion" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
          <input type="date" {... register('ActionsDates', {required: true})} 
            placeholder="AAAA/MM/DD" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />

          <br/>
          
          <p>Registro de recursos adicionales solicitados</p>
          <input type="text" {... register('typeOfSources', {required: true})} 
            placeholder="Tipo de recurso" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
           <input type="text" {... register('reason', {required: true})} 
            placeholder="Razon para la solicitud" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
          
          <br/>
          
          <p>Notas y observaciones</p>
          <textarea {... register('Notes', {required: false})} 
            placeholder="Alguna nota u observacion" rows="4" cols="2"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 resize-none" 
          />
          
          <button type='submit'> 
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default supportAlertPage

