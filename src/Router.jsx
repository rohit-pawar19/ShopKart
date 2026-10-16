import App from "./App";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { createBrowserRouter } from "react-router-dom";

const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children:[
                {path:"",element:<Home/>},
                {path:"/product",element:<Product/>}
            ]
        }
    ]
)


export default router;
