import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AuthContextProvider from  "./context/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth";
import Home from "./pages/Home";
import SmsPage from "./pages/Sms"
import ProfilePage from "./pages/Profile";
import SeansPage from "./pages/seans";
import DetailPage from "./pages/Detail";


const queryClient = new QueryClient();

function App() {
  return (
    <div className="max-w-[1360px] w-full mx-auto">
      <QueryClientProvider client={queryClient}>
        {/* <AuthContextProvider> */}
          <ToastContainer />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/login/sms" element={<SmsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/seans" element={<SeansPage />} />
              <Route path="/:id" element={<DetailPage />} />
            </Routes>
          </BrowserRouter>
        {/* </AuthContextProvider> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
