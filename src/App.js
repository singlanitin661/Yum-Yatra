import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">

        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Intro />
      },
      {
        path: "/home",
        element: <><Header /><Body /></>,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <><Header /><About /></>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (

          <><Header /><Contact /></>
        ),
      },
      {
        path: "/cart",
        element:
          <><Header /><Cart /></>,
      },
      {
        path: "/restaurant/:resId",
        element: <><Header /><RestaurantMenu /></>,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
