import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Body from './Components/Body';
import RestaurantMenu from './Components/RestaurantMenu';
import Cart from './Components/Cart';

const Grocery = lazy(()=>import('./Components/Grocery'));
const reactRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h2>loading...</h2>}> <Grocery/></Suspense>,
      },
      {
        path:'/restaurant/:restId',
        element:<RestaurantMenu/>,
      },
      
    ],
    errorElement:<Error/>
    
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={reactRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
