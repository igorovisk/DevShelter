import "./App.css"
import Home from "./components/Home"
import Login from "./components/Login"
import Cadastro from "./components/Cadastro"
import { Route, Switch, Routes } from "react-router-dom"

//
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
            </Routes>
        </div>
    )
}

export default App
