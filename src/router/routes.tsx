import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        // errorElement: <ErrorPage/>,
        children:[
            { index:true, element: <HomePage/> },
            // { path: 'games/:slug' , element: <GameDetailPage/> },
        ]
    }
])

export default router;