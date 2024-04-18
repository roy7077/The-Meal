import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Searched_meal from './components/Searched_meal';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Favourite from './components/Favourite';
import Error from './components/Error';
import SignupForm from './components/SignupForm';
import Login from './components/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
const approuter=createBrowserRouter([
  {
    path:"/app",
    //element:<Login/>,
    //element:<SignupForm/>,
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
      path:"/app",
      element:<Body/>
    },
    {
      path:"/app/about",
      element:<About/>
    },
    {
      path:"/app/contact",
      element:<Contact/>
    },
    {
      path:"/app/searched/:id",
      element:<Searched_meal/>
    },
    {
      path:"/app/favourite/searched/:id",
      element:<Searched_meal/>
    },
    {
      path:"/app/favourite",
      element:<Favourite/>,
    }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/",
    element:<SignupForm/>
  }
])



root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>
);
