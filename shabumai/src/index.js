import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from './App';
import Select_t from './select_t';
import Selecttable from './admin/selecttable';
import Listorder from './admin/listorder';
import History from './admin/history'
import Addlist from './admin/addlist';
import Login from './admin/login';

const router = createBrowserRouter([
  {
    path: "/selecttable",element: <Selecttable/>,
  },
  {
    path: "/listorder",element: <Listorder/>,
  },
  {
    path: "/history",element: <History/>,
  },
  {
    path: "/",element: <App/>,
  },
  {
    path: "/select_t",element: <Select_t/>,
  },
  {
    path: "/addlist",element: <Addlist/>,
  },
  {
    path: "/login",element: <Login/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
