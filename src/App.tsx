import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
   return (
      <main className="h-screen w-screen">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Navigate to="dashboard" />} />
               <Route path="dashboard" element={<Dashboard />} />
            </Routes>
         </BrowserRouter>
      </main>
   );
}

export default App;
