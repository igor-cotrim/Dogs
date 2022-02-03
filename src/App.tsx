import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Home from "./pages/Home"

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App