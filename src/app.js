import React from "react";
import * as ReactDOM from "react-dom/client";
import { LandingPage } from "./screens/LandingPage";
import  Signin from "./screens/signin/signin";
import { SignUp } from "./screens/signup/signup";
import MarketPage from "./screens/marketpage/marketpage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Vendors } from "./screens/vendors_page/vendors_page";


const router = createBrowserRouter([
  {
    path: "/",
    element:<LandingPage/>,
  },
  {
    path: "signup",
    element:<SignUp/>,
  },
  {
    path: "signin",
    element:<Signin/>,
  },
  {
   path:"market",
   element:<MarketPage/>,
   children:[
   ]
  },
  {
   path:"vendors",
   element:<Vendors/>
  }
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}


export function Fallback() {
  return <p>Performing initial data load</p>;
}

