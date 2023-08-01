import {useForm} from "react-hook-form";
import { notificationRequest } from "../../api/auth";

function NotificationPage() {
  
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(async (values) =>{
    const res = await notificationRequest(values)
    console.log(res)
  });

  return (
    <div>
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
            
            <button
                className="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                type="submit"
              >
              Generar
            </button>
          </form>
        </div>
      </div>
      <div
          className="absolute left-[0] top-[0] h-[72px] w-full [max-width:1440px]"
        >
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
                    <p className="text-sm leading-5">Registro</p>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <p className="text-sm leading-5">Analisis</p>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <p className="text-sm leading-5">Evaluacion</p>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <p className="text-sm leading-5">Inventario</p>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <p className="text-sm leading-5">Perfil</p>
                  </div>
                </div>
                <div
                  className="font-inter inline-flex items-start gap-1 text-left font-[500] text-[#F3F3FB]"
                >
                  <p className="text-sm leading-5">Solicitud equipo</p>
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
                        d="M 3.97 6.22 C 4.263 5.927 4.737 5.927 5.03 6.22 L 9 10.189 L 12.97 6.22 C 13.263 5.927 13.737 5.927 14.03 6.22 C 14.323 
                        6.513 14.323 6.987 14.03 7.28 L 9.53 11.78 C 9.237 12.073 8.763 12.073 8.47 11.78 L 3.97 7.28 C 3.677 6.987 3.677 6.513 3.97 6.22 Z"
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
            <div className="relative left-0.5 top-2.5 h-12 w-[53px] overflow-clip">
              <div
                className="bg-image-1bg-0x absolute inset-0 bg-cover bg-center opacity-[0.45]"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default NotificationPage