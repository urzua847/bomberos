import {useForm} from "react-hook-form";
import { inventoryRequest } from "../../api/auth";

function InventoryPage() {
  
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(async (values) =>{
    const res = await inventoryRequest(values)
    console.log(res)
  });
 //equipment_name, equipment_code, equipment_description, quantity_available, expiration_date
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center "> <div/> 
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <h1 className="text-2xl text-center text-white font-bold mt-10">Add inventario</h1>
        <form onSubmit={onSubmit}>
          
          <p>
          <label>Pieza de equipo</label>
          <input type="text" {... register('equipment_name', {required: true})} 
            placeholder="nombre del equipo" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1 " 
          />
          </p>
          <br/>

          <p>Codigo</p>
          <input type="number" {... register('equipment_code', {required: true})} 
            placeholder="12345" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
          <p>Descripcion</p>
          <input type="text" {... register('equipment_description', {required: true})} 
            placeholder="ingrese decripcion aqui" 
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
          <p>Disponible</p>
          <input type="number"{... register('quantity_available', {required: true})} 
            placeholder="indique cantidad a ingresar"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />

          <p>Expiracion</p>
          <input type="date"{... register('expiration_date', {required: false})} 
            placeholder="indique fecha de expiracion si es que posee"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
          
          <button type='submit'> 
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default InventoryPage