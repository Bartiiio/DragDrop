import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

function App() {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 0,
         },
      },
   });
   return (
      <QueryClientProvider client={queryClient}>
         <main className="h-screen w-screen">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Navigate to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
               </Routes>
            </BrowserRouter>
            <Toaster
               position="top-center"
               gutter={12}
               containerStyle={{ margin: "8px" }}
               toastOptions={{
                  success: {
                     duration: 1500,
                  },
                  error: {
                     duration: 2500,
                  },
                  style: {
                     fontSize: "16px",
                     maxWidth: "500px",
                     padding: "16px 24px",
                     backgroundColor: "whitesmoke",
                     color: "gray",
                  },
               }}
            />
         </main>
      </QueryClientProvider>
   );
}

export default App;
