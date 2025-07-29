import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
    const [active, setActive] = useState('main')
  return (
    <div className='w-full h-screen relative'>
        <nav className='w-full h-16 absolute bottom-0 right-0 flex items-center justify-evenly menu f-c'>
            <Link to={'/main'} className={'flex flex-col items-center justify-center'}>
                <i className="fa-solid fa-book-bookmark text-3xl"></i>
                <span className='text-x'>Kitoblar</span>
            </Link>
            <Link to={'groups/'} className={'flex flex-col items-center justify-center'}>
                <i className="fa-solid fa-comment text-3xl"></i>
                <span className='text-x'>Guruhlar</span>
            </Link>
            <Link to={'profil/'} className={'flex flex-col items-center justify-center'}>
                <i className="fa-solid fa-user text-3xl"></i>
                <span className='text-x'>Profil</span>
            </Link>
            <Link to={'notifications/'} className={'flex flex-col items-center justify-center'}>
                <i className="fa-solid fa-bell text-3xl"></i>
                <span className='text-x'>Bil-noma</span>
            </Link>
        </nav>
        <main className='absolute w-full h-[calc(100vh-65px)] overflow-hidden overflow-y-auto p-3'>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout
