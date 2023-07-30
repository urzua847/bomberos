import {useForm} from "react-hook-form";
import { recorRequest } from "../../api/auth";

function RecordPage() {
  
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(async (values) =>{
    const res = await recorRequest(values)
    console.log(res)
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        
        <p>
        <label>Nombre</label>
        <input type="text" {... register('name', {required: true})} 
          placeholder="Name" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1" 
        />
        <input type="text" {... register('lastname', {required: true})} 
          placeholder="Lastname" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1" 
        />
        </p>

        <p>Rut</p>
        <input type="number" {... register('rut', {required: true})} 
          placeholder="12345678" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />

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
        
        <p>Fecha</p>
        <input type="text" {... register('date', {required: true})} 
          placeholder="9999/99/99" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        
        <br/>
        
        <p>Tipo de Incendio</p>
        <select {... register('TDI', {required: true})} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        >
          <option value="">Selecciona una opción...</option>
          <option value="Urbano">Urbano</option>
          <option value="Industrial">Industrial</option>
          <option value="Total">Total </option>
        </select>

        <br/>
        
        <p>Clase de Incendio</p>
        <select {... register('CDI', {required: true})} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        >
          <option value="">Selecciona una opción...</option>
          <option value="Tipo A">Tipo A</option>
          <option value="Tipo B">Tipo B</option>
          <option value="Tipo C">Tipo C</option>
          <option value="Tipo D">Tipo D</option>
          <option value="Tipo E">Tipo E</option>
          <option value="Tipo F">Tipo F</option>
        </select>
        
        <br/>
        
        <p>Tamaño del Incendio</p>
        <select {... register('size', {required: true})} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        >
          <option value="">Selecciona una opción...</option>
          <option value="Cotano">Cotano</option>
          <option value="Parcia">Incendio Parcial</option>
          <option value="Total">Incedio Total</option>
        </select>
        
        <br/>
        
        <p>Causa</p>
        <input type="text" {... register('cause', {required: false})} 
          placeholder="Indique lo pudo probocar el incendio" 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        
        <button type='submit'> 
          Send
        </button>
      </form>
    </div>
  )
}

export default RecordPage