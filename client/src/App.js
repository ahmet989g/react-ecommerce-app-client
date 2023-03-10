import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css';

import ProtectedRoute from "./Pages/ProtectedRoute";

import RootLayout from "./routes/RootLayout";
import ErrorElement from "./Pages/ErrorElement";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Profile from "./Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorElement/>,
    children: [
      {
        path: "/",
        element: <Products/>
      },
      {
        path: "/product/:product_id",
        element: <ProductDetail />
      },
      {
        path: "/signin",
        element: <SignIn/>
      },
      {
        path: "/signup", 
        element: <SignUp />
      },
      {
        path: "/profile",
        element: <ProtectedRoute><Profile/></ProtectedRoute>
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
