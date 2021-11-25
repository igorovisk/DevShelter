import "./App.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import InterfaceLogado from "./pages/InterfaceLogado"
import { Route, Routes } from "react-router-dom"


//
function App() {
    
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/cadastro" element={<Cadastro />}></Route>
                <Route exact path="/interface" element={<InterfaceLogado />}></Route>
            </Routes>
        </div>
    )
}

export default App
