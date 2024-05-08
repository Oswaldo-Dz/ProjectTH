//StylesMDB
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../src/index.css'
//
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './routes/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './routes/Dashboard';
import SignUp from './routes/SignUp';
import { AuthProvider } from './auth/AuthProvider';
import CreateProduct from './routes/CreateProduct';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableProduct from './routes/TableProduct';
import CreateOrder from './routes/CreateOrder';
import { CartProvider } from './context/CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  { 
    path: "/createProduct",
    element: <CreateProduct />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
      path: "/dashboard",
      element: <Dashboard />,
      },
      { 
        path: "/tableproduct",
        element: <TableProduct />,
      },
      { 
        path: "/createorder",
        element: <CreateOrder />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
      <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
