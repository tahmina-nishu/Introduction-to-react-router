import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello from react router</div>,
  },
  {
    path: '/about',
    element: <div> I am about page </div>
  },
  {
    path: '/second',
    element: <div> I am second page </div>
  },
  {
    path: '/home',
    element: <Home></Home>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
