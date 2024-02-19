import {Routes, Route,BrowserRouter} from "react-router-dom";
import Storage from "./pages/Storage";
import Login from "./pages/Login";
import Barbecuemeter from "./pages/Barbecuemeter";
import Register from "./pages/Register";
import BaseLayout from "./pages/BaseLayout";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";




function App() {
  


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseLayout />} errorElement={<ErrorPage/>} />
      <Route path="/storage" element={<Storage />}  errorElement={<ErrorPage/>}  />
      <Route path="/login" element={<Login />}  errorElement={<ErrorPage/>} />
      <Route path="/barbecuemeter" element={<Barbecuemeter />}  errorElement={<ErrorPage/>}  />
      <Route path="/register" element={<Register />}  errorElement={<ErrorPage/>}  />
      <Route path="/blog" element={<Blog />}  errorElement={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
