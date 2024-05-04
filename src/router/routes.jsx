import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Checkout from "../pages/Checkout";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/addproduct',
                element: <AddProduct />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
]);

export default routes;