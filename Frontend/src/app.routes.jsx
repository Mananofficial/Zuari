import { createBrowserRouter } from "react-router";
import Homepage from "./pages/homepage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },

   
]) 