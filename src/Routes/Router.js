//REACT
import { HashRouter, Routes, Route } from "react-router-dom";

//PÁGINAS
import Home from "../Pages/Home";
import Login from "../Pages/Login";


export const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route index path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<Login/>}/>
                {/* <Route path={"*"} element={<Erro/>}/> */}
            </Routes>
        </HashRouter>
    )
}