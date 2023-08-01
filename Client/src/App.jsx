import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvaluationPage from "./pages/evaluation/evaluationPage.jsx";
import RecordPage from "./pages/record/RecordPage";
import InventoryPage from "./pages/inventory/inventory.jsx";

function App(){
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<h1>home page </h1>} />
        <Route path='/evaluation' element={<EvaluationPage />} />
        <Route path='/inventory' element={<InventoryPage />} />
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
