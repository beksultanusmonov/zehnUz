import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profil() {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/')
  }
  return (
    <div className='py-2'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">ZehnUz</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <i class="fa-solid fa-list"></i>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between text-red-500 text-xl" onClick={logout}>
                  <span className="badge"><i class="fa-solid fa-angles-left"></i></span>
                  Chiqish
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center my-6">
          <div className="shrink-0">
            <img src="../../images/male.png" className="w-25 rounded-full" />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-xl font-medium text-gray-900 truncate">
              Beksulton Usmonov
            </p>
            <p className="text-md text-gray-500 truncate">
              beksulton@gmail.com
            </p>
          </div>          
      </div>  
    </div>
  )
}

export default Profil
