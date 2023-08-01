import { BrowserRouter, Routes, Route } from "react-router-dom";

import EvaluationForm from "./pages/evaluation/evaluationForm.jsx";
import EvaluationPage from "./pages/evaluation/evaluationPage.jsx";
import RecordForm from "./pages/record/RecordForm.jsx";
import NotificationPage from "./pages/notification/NotificationPage";
import InventoryPage from "./pages/inventory/inventory.jsx";
import HomePage from "./pages/home/homePage";
import SupportAlertPage from "./pages/support_alert/supportAlert.jsx";
import UserPage from "./pages/user/userPage";
import RecordPage from "./pages/record/RecordPage.jsx";
import { RecordProvider } from "./context/RecordContext.jsx";
import { EvaluationProvider } from "./context/EvaluationContext.jsx";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/evaluationForm' element={<EvaluationProvider><EvaluationForm/></EvaluationProvider>} />
        <Route path='/evaluationPage' element={<EvaluationProvider><EvaluationPage /></EvaluationProvider>} />
        <Route path='/inventory' element={<InventoryPage />} />
        <Route path='/notification' element={<NotificationPage />} />
        <Route path='/RecordForm' element={<RecordProvider><RecordForm /></RecordProvider>} />
        <Route path='/RecordPage' element={<RecordProvider><RecordPage /></RecordProvider>} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/analysis' element={<h1> Analisis </h1>} />
        <Route path='/supportAlert' element={<SupportAlertPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;