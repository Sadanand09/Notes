import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './view/Home/Home';
import NewNote from './view/NewNote/NewNote';
import { Toaster } from 'react-hot-toast';
import UpdateNote from './view/UpdateNote/UpdateNote';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/new",
    element: <NewNote/>
  },
  {
    path: "/update",
    element: <UpdateNote/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  
  <Toaster/>
  <RouterProvider router={router}/>
  </>
  
);


