import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/auth/Login'
import SingUp from "./pages/auth/SingUp"
import Home from "./pages/Home"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  )
}

export default App
