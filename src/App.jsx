import React, { createContext } from 'react'
import { createBrowserRouter } from 'react-router'
import RegisterLayout from './layouts/RegisterLayout'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ChatLayout from './layouts/ChatLayout'
import Error from './pages/Error'
import Books from './pages/Books'
import Groups from './pages/Groups'
import Profil from './pages/Profil'
import Notification from './pages/Notification'
import Group from './pages/Group'
import Book from './pages/Book'


export const Context = createContext();


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RegisterLayout />
    },
    {
      path: 'main/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Books />
        },
        {
          path: 'groups/',
          element: <Groups />
        },
        {
          path: 'profil/',
          element: <Profil />
        },
        {
          path: 'notifications/',
          element: <Notification />
        },
      ]
    },
    {
      path: 'group/',
      element: <Group />
    },
    {
      path: 'book/',
      element: <Book />
    },
    {
      path: 'chat/',
      element: <ChatLayout />
    },
    {
      path: '*',
      element: <Error />,
    }
  ])
  return (
    <div className='w-sm max-w-[96vw] sm:w-md h-screen bg-[#fff]'>
      <RouterProvider router={routes} />
    </div>
  )
}
export default App