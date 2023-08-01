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
              <div className="relative h-8">
                <div
                  className="absolute bottom-[2.08%] left-[4.17%] right-[2.08%] top-[4.17%]"
                >
                  <svg
                    width="100%"
                    height="100%"
    
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 29.667 7 V 1.667 C 29.667 1.313 29.526 0.974 29.276 0.724 C 29.026 0.474 28.687 0.333 28.333 0.333 H 1.667 C 1.313 0.333 0.974 0.474 0.724 0.724 C 0.474 0.974 0.333 1.313 0.333 1.667 V 7 H 29.667 Z"
                      fill="#778D45"
                    />
                    <path
                      d="M 0.333 9.667 V 28.333 C 0.333 28.687 0.474 29.026 0.724 29.276 C 0.974 29.526 1.313 29.667 1.667 29.667 H 8.333 V 9.667 H 0.333 Z"
                      fill="#564734"
                    />
                    <path
                      d="M 11 29.667 H 28.333 C 28.687 29.667 29.026 29.526 29.276 29.276 C 29.526 29.026 29.667 28.687 29.667 28.333 V 9.667 H 11 V 29.667 Z"
                      fill="#FEE3A2"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="w-[286px] text-2xl font-[600] leading-8">Analisis</p>
                <p className="w-[286px] text-base font-[400] leading-[26px]">
                  Aquí se realiza el análisis para tener la información
                  necesaria para acudir a emergencia.
                </p>
              </div>
            </div>
            <div>
              <div
                className="font-inter inline-flex items-center gap-2 text-left font-[500] text-[#FFA570]"
              >
                 <Link to="/analysis">
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
                    width="100%"
                    height="100%"
    
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 26 32 H 14 C 13.646 32 13.307 31.86 13.057 31.61 C 12.807 31.359 12.667 31.02 12.667 30.667 V 28 C 12.667 27.646 12.807 27.307 13.057 27.057 C 13.307 26.807 13.646 26.667 14 26.667 H 26 C 26.354 26.667 26.693 26.807 26.943 27.057 C 27.193 27.307 27.333 27.646 27.333 28 V 30.667 C 27.333 31.02 27.193 31.359 26.943 31.61 C 26.693 31.86 26.354 32 26 32 Z"
                      fill="#564734"
                    />
                    <path
                      d="M 26 0 H 2 C 1.646 0 1.307 0.14 1.057 0.391 C 0.807 0.641 0.667 0.98 0.667 1.333 V 4 C 0.667 4.354 0.807 4.693 1.057 4.943 C 1.307 5.193 1.646 5.333 2 5.333 H 26 C 26.354 5.333 26.693 5.193 26.943 4.943 C 27.193 4.693 27.333 4.354 27.333 4 V 1.333 C 27.333 0.98 27.193 0.641 26.943 0.391 C 26.693 0.14 26.354 0 26 0 Z"
                      fill="#564734"
                    />
                    <path
                      d="M 26 8 H 2 C 1.646 8 1.307 8.14 1.057 8.391 C 0.807 8.641 0.667 8.98 0.667 9.333 V 22.667 C 0.667 23.02 0.807 23.359 1.057 23.61 C 1.307 23.86 1.646 24 2 24 H 26 C 26.354 24 26.693 23.86 26.943 23.61 C 27.193 23.359 27.333 23.02 27.333 22.667 V 9.333 C 27.333 8.98 27.193 8.641 26.943 8.391 C 26.693 8.14 26.354 8 26 8 Z"
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
                  Aquí puedes evaluar el rendimiento de las respuestas para
                  almacenar información relevante y utilizar en un futuro para
                  nuevas emergencias.
                </p>
              </div>
            </div>
            <div>
              <div
                className="font-inter inline-flex items-center gap-2 text-left font-[500] text-[#FFA570]"
              >
                <Link to="/evaluation">
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
                    width="100%"
                    height="100%"
    
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 5.667 0.333 H 1.667 C 1.313 0.333 0.974 0.474 0.724 0.724 C 0.474 0.974 0.333 1.313 0.333 1.667 V 28.333 C 0.333 28.687 0.474 29.026 0.724 29.276 C 0.974 29.526 1.313 29.667 1.667 29.667 H 5.667 V 0.333 Z"
                      fill="#778D45"
                    />
                    <path
                      d="M 8.333 29.667 H 21.667 V 0.333 H 8.333 V 29.667 Z M 15 24.333 C 14.646 24.333 14.307 24.193 14.057 23.943 C 13.807 23.693 13.667 23.354 13.667 23 C 13.667 22.646 13.807 22.307 14.057 22.057 C 14.307 21.807 14.646 21.667 15 21.667 C 15.354 21.667 15.693 21.807 15.943 22.057 C 16.193 22.307 16.333 22.646 16.333 23 C 16.333 23.354 16.193 23.693 15.943 23.943 C 15.693 24.193 15.354 24.333 15 24.333 Z M 15 5.667 C 15.354 5.667 15.693 5.807 15.943 6.057 C 16.193 6.307 16.333 6.646 16.333 7 C 16.333 7.354 16.193 7.693 15.943 7.943 C 15.693 8.193 15.354 8.333 15 8.333 C 14.646 8.333 14.307 8.193 14.057 7.943 C 13.807 7.693 13.667 7.354 13.667 7 C 13.667 6.646 13.807 6.307 14.057 6.057 C 14.307 5.807 14.646 5.667 15 5.667 Z M 15 13.667 C 15.354 13.667 15.693 13.807 15.943 14.057 C 16.193 14.307 16.333 14.646 16.333 15 C 16.333 15.354 16.193 15.693 15.943 15.943 C 15.693 16.193 15.354 16.333 15 16.333 C 14.646 16.333 14.307 16.193 14.057 15.943 C 13.807 15.693 13.667 15.354 13.667 15 C 13.667 14.646 13.807 14.307 14.057 14.057 C 14.307 13.807 14.646 13.667 15 13.667 Z"
                      fill="#FEE3A2"
                    />
                    <path
                      d="M 28.333 0.333 H 24.333 V 29.667 H 28.333 C 28.687 29.667 29.026 29.526 29.276 29.276 C 29.526 29.026 29.667 28.687 29.667 28.333 V 1.667 C 29.667 1.313 29.526 0.974 29.276 0.724 C 29.026 0.474 28.687 0.333 28.333 0.333 Z"
                      fill="#778D45"
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
          <div
            className="font-inter absolute left-[380px] top-[377px] inline-flex flex-col items-start gap-10 rounded-lg bg-[#313236] px-8 py-10 text-left text-[#F3F3FB] transition-all"
          >
            <div className="flex flex-col items-start gap-14">
              <div className="relative h-8">
                <div className="absolute inset-x-0 bottom-[2.08%] top-[4.17%]">
                  <svg
                    width="100%"
                    height="100%"
    
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 31.467 0.6 C 31.2 0.333 30.667 0.333 30.267 0.333 L 22.667 2.6 V 29.4 L 31.067 27 C 31.6 26.867 32 26.333 32 25.667 V 1.667 C 32 1.267 31.867 0.867 31.467 0.6 Z"
                      fill="#564734"
                    />
                    <path
                      d="M 20 2.6 L 12 0.6 V 27.4 L 20 29.4 V 2.6 Z"
                      fill="#778D45"
                    />
                    <path
                      d="M 9.333 0.6 L 0.933 3 C 0.4 3.267 0 3.8 0 4.333 V 28.333 C 0 28.733 0.133 29.133 0.533 29.4 C 0.8 29.533 1.067 29.667 1.333 29.667 H 1.733 L 9.333 27.4 V 0.6 Z"
                      fill="#FEE3A2"
                    />
                  </svg>
                </div>
              </div>
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



