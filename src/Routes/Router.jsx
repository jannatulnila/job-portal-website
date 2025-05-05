import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>
        },
        {
            path:"/auth",
            element:<h2>authentication layout</h2>
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