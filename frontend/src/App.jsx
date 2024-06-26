
import './App.css'
import Navbar from './components/Navbar'
import Inbox from './components/Inbox'
import Mail from './components/Mail'
import Body from './components/Body'
import SendEmail from './components/SendEmail'

import { RouterProvider } from 'react-router-dom'

import { createBrowserRouter } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import {Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

{/*Routing the app to a specific location*/ }
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />

      },

      {
        path: "/mail/:id",
        element: <Mail />

      },

    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },




])


function App() {


  return (
    <div className='bg-[#F6F8FC] h-screen'>
      {/*first step build navbar*/}
      
      <RouterProvider router={appRouter} />
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
        <SendEmail />
      </div>
      <Toaster/>
    </div>
  )
}

export default App
