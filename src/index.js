import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Searched_meal from './components/Searched_meal';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // errorElement:<Error/>,
    children:[
      {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/searched/:id",
      element:<Searched_meal/>
    }
    ]
  }
])



root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>
);
