import {Outlet, createBrowserRouter} from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import HomeRoute from "./HomeRoute";
import ErrorRoute from "./ErrorRoute";
import React from "react";
import ShopCardRoute from "./ShopCardRoute";

const HomeRouter = {index:true,element:<HomeRoute></HomeRoute>};
const ShopCardRouter = {path:"shop-card",element:<ShopCardRoute></ShopCardRoute>};
export const IndexRouter = createBrowserRouter([{path:"/",errorElement:<ErrorRoute></ErrorRoute>,element:<GeneralRouteComponents></GeneralRouteComponents>,children:[HomeRouter,ShopCardRouter]}]);

function GeneralRouteComponents(){

    return (
        <React.Fragment>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </React.Fragment>
    );
}