import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecordPage from "./pages/record/RecordPage";

function App(){
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<h1>home page </h1>} />
        <Route path='/evaluation' element={<h1>Evaluacion </h1>} />
        <Route path='/inventory' element={<h1> Inventario </h1>} />
        <Route path='/notification' element={<h1> Notificacion </h1>} />
        <Route path='/record' element={<RecordPage />} />
        <Route path='/user' element={<h1> Usuario </h1>} />
        <Route path='/analysis' element={<h1> Analisis </h1>} />
        <Route path='/support-alert' element={<h1> Solicitud de equipo extra </h1>} />
      </Routes>
    </BrowserRouter>  
  );
}     
export default App;
