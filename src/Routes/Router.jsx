import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import UpdateProduct from "../pages/Update/UpdateProduct";
import ProductDetails from "../pages/Details/ProductDetails";
import BrandDetails from "../pages/BrandDetails/BrandDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/myCart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/brand/:id",
        element: <BrandDetails />,
      },
    ],
  },
]);

export default Router;
