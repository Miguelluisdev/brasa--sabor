import { BrowserRouter, Routes, Route } from "react-router-dom";
import Storage from "./pages/Storage";
import Login from "./pages/Login";
import Barbecuemeter from "./pages/Barbecuemeter";
import Register from "./pages/Register";
import BaseLayout from "./pages/BaseLayout";
import Blog from "./pages/Blog";



function App() {
  


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseLayout />} />
      <Route path="/storage" element={<Storage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/barbecuemeter" element={<Barbecuemeter />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
