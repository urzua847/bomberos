import {useForm} from "react-hook-form";
import { recorRequest } from "../../api/auth";

function RecordPage() {
  
  const {register, handleSubmit} = useForm();

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={handleSubmit(async (values) =>{
        console.log(values); 
        const res = await recorRequest(values)
        console.log(res)
        })}>
        <input type="text" {... register('name', {required: true})} 
          placeholder="Name" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="text" {... register('lastname', {required: true})} 
          placeholder="Lastname" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="number" {... register('rut', {required: true})} 
          placeholder="Rut" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="number" {... register('phone', {required: true})} 
          placeholder="Phone" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="text" {... register('ubication', {required: true})} 
          placeholder="Ubication" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="text" {... register('date', {required: true})} 
          placeholder="Date" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="text" {... register('TDI', {required: true})} 
          placeholder="Type" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="text" {... register('CDI', {required: true})} 
          placeholder="Class" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="text" {... register('size', {required: true})} 
          placeholder="Size" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <input type="text" {... register('cause', {required: false})} 
          placeholder="Cause" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
        />
        <button type='submit'> 
          Send
        </button>
      </form>
    </div>
  )
}

export default RecordPage