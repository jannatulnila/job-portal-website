import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/home";
import CompanyDetails from "../pages/CompanyDetails";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
           
            children:[
                {
                    path:"",
                    element:<Home></Home>,
                    loader:()=>fetch("/public/howItWorks.json"),
                },
                {
                    path:"/company/:id",
                    element:<CompanyDetails></CompanyDetails>
                },
                {
                    path:"/profile",
                    element:<Profile></Profile>
                },
                
            ]
        },
        {
            path:"/auth",
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>
                },
            ]
        },
        {
            path:"/jobs",
            element:<h2>jobs layout</h2>
        },
        {
            path:"/*",
            element:<h2>error404</h2>
        },
    ]
)
export default router;