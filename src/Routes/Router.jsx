import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/home";
import CompanyDetails from "../pages/CompanyDetails";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Companies from "../Components/Companies/Companies";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
            loader:()=>fetch("/howItWorks.json"),
            children:[
                {
                    path:"",
                    element:<Home></Home>,
                    loader:()=>fetch("/job.json"),
                },
                {
                    path:"/company/:id",
                    element:<Companies></Companies>,
                     
                 },
                 {
                    path:"company/:companyId",
                    element:<CompanyDetails></CompanyDetails>,
                    loader:()=>fetch("/job.json"),
                 }
               
                
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
                {
                    path:"/auth/profile",
                    element:<Profile></Profile>,
                    loader:()=>fetch("/job.json"),
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