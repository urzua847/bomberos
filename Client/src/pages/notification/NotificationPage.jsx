import {useForm} from "react-hook-form";
import { notificationRequest } from "../../api/auth";

function NotificationPage() {
  
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(async (values) =>{
    const res = await notificationRequest(values)
    console.log(res)
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center "> 
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <h1 className="text-2xl text-center text-white font-bold">Notificación</h1>

        <form onSubmit={onSubmit}>
          
          <p>
          <label>Tipo</label>
          <input type="text" {... register('tipe', {required: true})} 
            placeholder="Tipe" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1" 
          />
          </p>

          <br/>
          
          <p>Direccion</p>
          <input type="text" {... register('ubication', {required: true})} 
            placeholder="Ingrese la direccion del incendio" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
          
          <br/>
          
          <p>Nivel de gravedad</p>
          <input type="text" {... register('gravity_level', {required: true})} 
            placeholder="ingrese el nivel de gravedad del incendio" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />
          
          <br/>
          
          <p>Estado actual</p>
          <input type="text" {... register('actual_state', {required: true})} 
            placeholder="ingrese el estado actual del incendio" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
          />

          <br/>
          
          <p>Informacion adicional</p>
          <input type="text" {... register('additional_information', {required: false})} 
            placeholder="Indique informacion adicional de ser necesario" 
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

export default NotificationPage