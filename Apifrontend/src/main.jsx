import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App';
import Options from './components/Options';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Waittres from './components/Waittres';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Options',
    element: <Options />
  },
  {
    path: '/orders',
    element: <Waittres/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
