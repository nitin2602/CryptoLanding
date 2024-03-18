import React from 'react'
import Dashboard from './Pages/Dashboard/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TransactionPage from './Pages/Trans/TransactionPage';
import SupportPage from './Pages/Support/SupportPage';


const router = createBrowserRouter([
  {
    path: "/Dashboard",
    element: <Dashboard />
  },
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/transactions",
    element: <TransactionPage />
  },
  {
    path: "/Supportpage",
    element: <SupportPage />
  },
]);

const App = () => {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App