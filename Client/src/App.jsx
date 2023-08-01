import { BrowserRouter, Routes, Route } from "react-router-dom";

import EvaluationPage from "./pages/evaluation/evaluationPage.jsx";
import RecordForm from "./pages/record/RecordForm.jsx";
import NotificationPage from "./pages/notification/NotificationPage";
import InventoryPage from "./pages/inventory/inventory.jsx";
import HomePage from "./pages/home/homePage";
import SupportAlertPage from "./pages/support_alert/supportAlert.jsx";
import RecordPage from "./pages/record/RecordPage.jsx";
import { RecordProvider } from "./context/RecordContext.jsx";

function App(){
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<HomePage/>} />
        <Route path='/evaluation' element={<EvaluationPage/>} />
        <Route path='/inventory' element={<InventoryPage />} />
        <Route path='/notification' element={<NotificationPage />} />
        <Route path='/records' element={<RecordProvider><RecordForm /></RecordProvider>} />
        <Route path='/recordPage' element={<RecordProvider><RecordPage /></RecordProvider>} />
        <Route path='/user' element={<h1> Usuario </h1>} />
        <Route path='/analysis' element={<h1> Analisis </h1>} />
        <Route path='/supportAlert' element={<SupportAlertPage />} />
      </Routes>
    </BrowserRouter>  
  );
}     

export default App;
