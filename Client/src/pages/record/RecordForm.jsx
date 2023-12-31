import {useForm} from "react-hook-form";
import { UseRecord } from "../../context/RecordContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {Link} from 'react-router-dom'

function RecordForm() {
  
  const {register, handleSubmit, setValue} = useForm();
  const {createRecord, getOneRecord, updateRecord} = UseRecord();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadRecord(){
      if(params.id){ 
        const record = await getOneRecord(params.id)
        console.log(record)
        setValue('name', record.name);
        setValue('lastname', record.lastname);
        setValue('phone', record.phone);
        setValue('ubication', record.ubication);
        setValue('cause', record.cause);
        setValue('description', record.description);
        setValue('date', record.date);
      }
    }
    loadRecord();
  },[params.id, getOneRecord, setValue]);

  const onSubmit = handleSubmit((data) =>{
    if(params.id){
      updateRecord(params.id, data);
    }else{
      createRecord(data);
    }
    navigate('/recordPage');
  });


  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center mt-10"> <div/> 
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <h1 className="text-2xl text-center text-white font-bold mt-10">Ingresar Registro</h1>
        <form onSubmit={onSubmit}>
          
          <p>
          <label>Nombre</label>
          <input type="text" {... register('name', {required: true})} 
            placeholder="Ingrese nombre" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1 " 
          />
          <input type="text" {... register('lastname', {required: true})} 
            placeholder="Ingrese apellido" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1" 
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
          
          <div className="text-center text-white">
            <button type='submit' 
            className="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mb-2"> 
            Enviar
            </button>
            <br/>
            <Link to='/recordPage'>
              <button type='submit' 
              className="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                Regresar
              </button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RecordForm