import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import ActorDetail from "../pages/ActorDetail";
import AllActor from "../pages/AllActor";
import PostDetail from "../pages/PostDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        // errorElement: <ErrorPage/>,
        children:[
            { index:true, element: <HomePage/> },
            { path: '/page/:page', element: <HomePage/> },
            { path: '/actor/:id' , element: <ActorDetail/> },
            { path: '/actors' , element: <AllActor/> },
            { path: '/post/:id/:type' , element: <PostDetail/> },
        ]
    }
])

export default router;