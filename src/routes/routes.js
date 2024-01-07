import { createBrowserRouter } from "react-router-dom";
import App from "../pages/home/App";
import { Erro404 } from "../pages/erro404";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
const routesApp = createBrowserRouter(
    [
        {
            path:"*",
            element:<Erro404/>
        },
        {
            path:"/",
            element:<App/>
        },
        {
            path:"/login",
            element:<LoginPage/>
        },
        {
            path:"/register",
            element:<RegisterPage/>
        }
    ]
)
export {routesApp}