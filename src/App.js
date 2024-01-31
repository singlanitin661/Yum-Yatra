import React, { Suspense, lazy, useEffect } from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Gorcery"));
const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: "Nitin" }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            }, {
                path: "/about",
                element: <About />
            }, {
                path: "/contact",
                element: <Contact />
            }, {
                path: "/grocery",
                element: <Suspense fallback={<h1>Code is being loaded</h1>}><Grocery /></Suspense>
            },{
                path : "/cart" ,
                element : <Cart/>
            },           
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);