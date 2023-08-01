import {useForm} from "react-hook-form";
//import { recordRequest } from "../../api/auth";
import { UseRecord } from "../../context/RecordContext";
import { useNavigate } from "react-router-dom";

function RecordForm() {
  
  const {register, handleSubmit} = useForm();
  const {createRecord} = UseRecord();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) =>{
    createRecord(data);
    navigate('/recordPage');
  });
  /*const onSubmit = handleSubmit(async (values) =>{
    const res = await recordRequest(values)
    console.log(res)
  });*/

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center "> <div/> 
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <h1 className="text-2xl text-center text-white font-bold mt-10">Registro</h1>
        <form onSubmit={onSubmit}>
          
          <p>
          <label>Nombre</label>
          <input type="text" {... register('name', {required: true})} 
            placeholder="Name" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1 " 
          />
          <input type="text" {... register('lastname', {required: true})} 
            placeholder="Lastname" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1" 
          />
          </p>
          <br/>

          <p>Telefono</p>
          <input type="number" {... register('phone', {required: true})} 
            placeholder="956854269" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />

          <br/>
          
          <p>Direccion</p>
          <input type="text" {... register('ubication', {required: true})} 
            placeholder="Ingrese la direccion del incendio" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
          
          <br/>
          
          <p>Causa</p>
          <textarea {... register('cause', {required: false})} 
            placeholder="Indique la posible causa que pudo probocar el incendio" rows="4" cols="2"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 resize-none" 
          />

          <p>Descripción</p>
          <textarea {... register('description', {required: false})} 
            placeholder="Describa los hechos del accidente y la situacion actual" rows="4" cols="2"
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

export default RecordForm