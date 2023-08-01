import { Link } from 'react-router-dom'; 

function homePage() {
  return (
 <div>

<div id="firejet-html-app">
      <div className="relative h-[1024px] w-[1440px] bg-[#212226]">
        <div
          className="absolute left-[133px] top-[150px] h-[733px] w-[83.89%] [max-width:1208px]"
        >
          <div
            className="font-inter absolute left-[0] top-[0] inline-flex flex-col items-start gap-10 rounded-lg bg-[#313236] px-8 py-10 text-left text-[#F3F3FB] transition-all"
          >
            <div className="flex flex-col items-start gap-14">
              <div className="h-8 w-8">
                <svg
                  width="100%"
                  height="100%"

                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_36_135)">
                    <path
                      d="M 24 13.333 H 32 L 28 8 L 24 13.333 Z M 24 18.667 H 32 L 28 24 L 24 18.667 Z"
                      fill="#D6B1FF"
                    />
                    <path
                      d="M 1.333 0 H 9.333 V 32 H 1.333 C 0.98 32 0.641 31.86 0.391 31.61 C 0.14 31.359 0 31.02 0 30.667 V 1.333 C 0 0.98 0.14 0.641 0.391 0.391 C 0.641 0.14 0.98 0 1.333 0 Z"
                      fill="#FEE3A2"
                    />
                    <path
                      d="M 12 0 H 20 C 20.354 0 20.693 0.14 20.943 0.391 C 21.193 0.641 21.333 0.98 21.333 1.333 V 30.667 C 21.333 31.02 21.193 31.359 20.943 31.61 C 20.693 31.86 20.354 32 20 32 H 12 V 0 Z"
                      fill="#778D45"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_135">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="w-[286px] text-2xl font-[600] leading-8">
                  Registro incidentes
                </p>
                <p className="w-[286px] text-base font-[400] leading-[26px]">
                  Aquí puedes realizar los registros de las emergencias y
                  gestionar la respuesta de bomberos.
                </p>
              </div>
            </div>
            <div>
              <div
                className="font-inter inline-flex items-center gap-2 text-left font-[500] text-[#FFA570]"
              >
                <Link to="/record">
                  <button className="text-xs leading-4">Acceder</button>
                </Link>
                <div className="h-4 w-4">
                  <svg
                    width="100%"
                    height="100%"
    
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 10.195 4.471 C 9.935 4.211 9.935 3.789 10.195 3.529 C 10.456 3.268 10.878 3.268 11.138 3.529 L 15.138 7.529 C 15.399 7.789 15.399 8.211 15.138 8.471 L 11.138 12.471 C 10.878 12.732 10.456 12.732 10.195 12.471 C 9.935 12.211 9.935 11.789 10.195 11.529 L 13.057 8.667 H 1.341 C 0.968 8.667 0.667 8.368 0.667 8 C 0.667 7.632 0.968 7.333 1.341 7.333 H 13.057 L 10.195 4.471 Z"
                      fill="#FFA570"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="font-inter absolute left-[380px] top-[0] inline-flex flex-col items-start gap-10 rounded-lg bg-[#313236] px-8 py-10 text-left text-[#F3F3FB] transition-all"
          >
      <div className="flex flex-col items-start gap-14">
      <svg
              className="relative overflow-visible"
              style={{}}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M29.6667 7.00001V1.66668C29.6667 1.31305 29.5262 0.973915 29.2762 0.723867C29.0261 0.473818 28.687 0.333344 28.3334 0.333344H1.66671C1.31309 0.333344 0.973946 0.473818 0.723897 0.723867C0.473849 0.973915 0.333374 1.31305 0.333374 1.66668V7.00001H29.6667Z"
                  fill="#778D45"
                />
                    <path
                    d="M0.333374 9.66669V28.3334C0.333374 28.687 0.473849 29.0261 0.723897 29.2762C0.973946 29.5262 1.31309 29.6667 1.66671 29.6667H8.33337V9.66669H0.333374Z"
                    fill="#564734"
                    />
                    <path
                d="M11 29.6667H28.3333C28.687 29.6667 29.0261 29.5262 29.2761 29.2762C29.5262 29.0261 29.6667 28.687 29.6667 28.3334V9.66669H11V29.6667Z"
                fill="#FEE3A2"
              />
      </svg>
                <div className="flex flex-col items-center gap-3">
                <p className="w-[286px] text-2xl font-[600] leading-8">
                  Solicitud equipo
                </p>
                <p className="w-[286px] text-base font-[400] leading-[26px]">
                  Aquí puedes solicitar equipo extra en caso de tener
                  dificultades o equipo defectuoso.
                </p>
              </div>
            </div>
            <div>
              <div
                className="font-inter inline-flex items-center gap-2 text-left font-[500] text-[#FFA570]"
              >
                 <Link to="/supportalert">
                  <button className="text-xs leading-4">Acceder</button>
                </Link>
                <div className="h-4 w-4">
                  <svg
                    width="100%"
                    height="100%"
    
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 10.195 4.471 C 9.935 4.211 9.935 3.789 10.195 3.529 C 10.456 3.268 10.878 3.268 11.138 3.529 L 15.138 7.529 C 15.399 7.789 15.399 8.211 15.138 8.471 L 11.138 12.471 C 10.878 12.732 10.456 12.732 10.195 12.471 C 9.935 12.211 9.935 11.789 10.195 11.529 L 13.057 8.667 H 1.341 C 0.968 8.667 0.667 8.368 0.667 8 C 0.667 7.632 0.968 7.333 1.341 7.333 H 13.057 L 10.195 4.471 Z"
                      fill="#FFA570"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="font-inter absolute left-[760px] top-[0] inline-flex flex-col items-start gap-10 rounded-lg bg-[#313236] px-8 py-10 text-left text-[#F3F3FB] transition-all"
          >
            <div className="flex flex-col items-start gap-14">
              <div className="relative h-8">
              <div className="absolute inset-y-0 left-[8.33%] right-[4.17%]">
                <svg
                className="relative overflow-visible"
                style={{}}
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 32H14C13.6463 32 13.3072 31.8595 13.0571 31.6095C12.8071 31.3594 12.6666 31.0203 12.6666 30.6667V28C12.6666 27.6464 12.8071 27.3072 13.0571 27.0572C13.3072 26.8071 13.6463 26.6667 14 26.6667H26C26.3536 26.6667 26.6927 26.8071 26.9428 27.0572C27.1928 27.3072 27.3333 27.6464 27.3333 28V30.6667C27.3333 31.0203 27.1928 31.3594 26.9428 31.6095C26.6927 31.8595 26.3536 32 26 32Z"
                  fill="#564734"
                />
                <path
                  d="M26 0H1.99996C1.64634 0 1.3072 0.140475 1.05715 0.390523C0.807101 0.640572 0.666626 0.979711 0.666626 1.33333V4C0.666626 4.35362 0.807101 4.69276 1.05715 4.94281C1.3072 5.19286 1.64634 5.33333 1.99996 5.33333H26C26.3536 5.33333 26.6927 5.19286 26.9428 4.94281C27.1928 4.69276 27.3333 4.35362 27.3333 4V1.33333C27.3333 0.979711 27.1928 0.640572 26.9428 0.390523C26.6927 0.140475 26.3536 0 26 0Z"
                  fill="#564734"
                />
                <path
                  d="M26 8H1.99996C1.64634 8 1.3072 8.14047 1.05715 8.39052C0.807101 8.64057 0.666626 8.97971 0.666626 9.33333V22.6667C0.666626 23.0203 0.807101 23.3594 1.05715 23.6095C1.3072 23.8595 1.64634 24 1.99996 24H26C26.3536 24 26.6927 23.8595 26.9428 23.6095C27.1928 23.3594 27.3333 23.0203 27.3333 22.6667V9.33333C27.3333 8.97971 27.1928 8.64057 26.9428 8.39052C26.6927 8.14047 26.3536 8 26 8Z"
                  fill="#FEE3A2"
                />
               </svg>
            </div>
            </div>
              <div className="flex flex-col items-center gap-3">
                <p className="w-[286px] text-2xl font-[600] leading-8">
                  Evaluación
                </p>
                <p className="w-[286px] text-base font-[400] leading-[26px]">
                  Aquí puedes almacenar información relevante y utilizar en un futuro para
                  nuevas emergencias.                 
                </p>
              </div>
            </div>
            <div>
              <div
                className="font-inter inline-flex items-center gap-2 text-left font-[500] text-[#FFA570]"
              >
                <Link to="/evaluationForm">
                  <button className="text-xs leading-4">Acceder</button>
                </Link>
                <div className="h-4 w-4">
                  <svg
                    width="100%"
                    height="100%"
    
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 10.195 4.471 C 9.935 4.211 9.935 3.789 10.195 3.529 C 10.456 3.268 10.878 3.268 11.138 3.529 L 15.138 7.529 C 15.399 7.789 15.399 8.211 15.138 8.471 L 11.138 12.471 C 10.878 12.732 10.456 12.732 10.195 12.471 C 9.935 12.211 9.935 11.789 10.195 11.529 L 13.057 8.667 H 1.341 C 0.968 8.667 0.667 8.368 0.667 8 C 0.667 7.632 0.968 7.333 1.341 7.333 H 13.057 L 10.195 4.471 Z"
                      fill="#FFA570"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="font-inter absolute left-[0] top-[377px] inline-flex flex-col items-start gap-10 rounded-lg bg-[#313236] px-8 py-10 text-left text-[#F3F3FB] transition-all"
          >
            <div className="flex flex-col items-start gap-14">
              <div className="relative h-8">
                <div
                  className="absolute bottom-[2.08%] left-[4.17%] right-[2.08%] top-[4.17%]"
                >
                  <svg
                    className="absolute left-0 top-[1.33px] overflow-visible"
                    style={{}}
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.4666 0.6C31.2 0.333333 30.6666 0.333332 30.2666 0.333332L22.6666 2.6V29.4L31.0666 27C31.6 26.8667 32 26.3333 32 25.6667V1.66667C32 1.26667 31.8666 0.866666 31.4666 0.6Z"
                      fill="#564734"
                    />
                    <path d="M20 2.6L12 0.599998V27.4L20 29.4V2.6Z" fill="#778D45" />
                    <path
                      d="M9.33333 0.599998L0.933334 3C0.400001 3.26666 0 3.8 0 4.33333V28.3333C0 28.7333 0.133333 29.1333 0.533333 29.4C0.799999 29.5333 1.06667 29.6667 1.33333 29.6667H1.73333L9.33333 27.4V0.599998Z"
                      fill="#FEE3A2"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="w-[286px] text-2xl font-[600] leading-8">
                  Inventario
                </p>
                <p className="w-[286px] text-base font-[400] leading-[26px]">
                  Acceso inventario de cuartel.
                </p>
              </div>
            </div>
            <div>
              <div
                className="font-inter inline-flex items-center gap-2 text-left font-[500] text-[#FFA570]"
              >
                <Link to="/inventory">
                  <button className="text-xs leading-4">Acceder</button>
                </Link>
                <div className="h-4 w-4">
                  <svg
                    width="100%"
                    height="100%"
    
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 10.195 4.471 C 9.935 4.211 9.935 3.789 10.195 3.529 C 10.456 3.268 10.878 3.268 11.138 3.529 L 15.138 7.529 C 15.399 7.789 15.399 8.211 15.138 8.471 L 11.138 12.471 C 10.878 12.732 10.456 12.732 10.195 12.471 C 9.935 12.211 9.935 11.789 10.195 11.529 L 13.057 8.667 H 1.341 C 0.968 8.667 0.667 8.368 0.667 8 C 0.667 7.632 0.968 7.333 1.341 7.333 H 13.057 L 10.195 4.471 Z"
                      fill="#FFA570"
                    />
                  </svg>
                </div>
              </div>
            </div>
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
                    <Link to="/record">
                  <button className="text-sm leading-5">Registro</button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                     <Link to="/evaluationForm">
                  <button className="text-sm leading-5">Evaluacion</button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <Link to="/inventory">
                  <button className="text-sm leading-5">Inventario</button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div
                    className="font-inter gap-2.5 text-left font-[500] text-[#F3F3FB]"
                  >
                    <Link to="/user">
                  <button className="text-sm leading-5">Perfil</button>
                    </Link>
                  </div>
                </div>
                <div
                  className="font-inter inline-flex items-start gap-1 text-left font-[500] text-[#F3F3FB]"
                >
                  <Link to="/supportalert">
                  <button className="text-sm leading-5">Solicitar Equipo</button>
                  </Link>
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
                        d="M 3.97 6.22 C 4.263 5.927 4.737 5.927 5.03 6.22 L 9 10.189 L 12.97 6.22 C 13.263 5.927 13.737 5.927 14.03 6.22 C 14.323 6.513 14.323 6.987 14.03 7.28 L 9.53 11.78 C 9.237 12.073 8.763 12.073 8.47 11.78 L 3.97 7.28 C 3.677 6.987 3.677 6.513 3.97 6.22 Z"
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
            <img className="w-14 h-12 left-[10px] top-[18px] absolute" src="https://1000marcas.net/wp-content/uploads/2022/06/Fire-Department-Logo.png" />
            <div className="relative left-0.5 top-2.5 h-12 w-[53px] overflow-clip">
              <div
               className="bg-image-1bg-0x absolute inset-0 bg-cover bg-center opacity-[0.45]"
              />
            </div>
          </div>
</div>     
  
      </div>
    </div>

 </div>
  )
}

export default homePage



