import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/auth/Login'
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import HomeAdmin from "./pages/HomeAdmin"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<HomeAdmin />} />
      </Routes>
    </Router>
  )
}

export default App
