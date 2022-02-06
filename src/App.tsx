import { BrowserRouter, Route, Routes } from "react-router-dom"

import { UserStorage } from "./contexts/UserContext"
import ProtectedRoute from "./helper/ProtectedRoute"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Home from "./pages/Home"
import User from "./pages/User"

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            } />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
