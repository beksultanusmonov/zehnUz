import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'


function Group() {
  const {group, dispatch} = useContext(GlobalContext)
  const navigate = useNavigate();
  useEffect(() => {
    if(!group){
      navigate('/main/')
    }
  }, [group])
  return (
    <div className='relative h-[99vh] overflow-hidden overflow-y-auto px-2'>
      <div className="h-full relative">
          <div className="navbar bg-base-100 shadow-sm mb-4 h-14 flex gap-3 sticky top-1 z-50">
              <a onClick={() => dispatch({type: "DELETE_GROUP"})} className="flex items-center justify-center fa-solid fa-arrow-left cursor-pointer f-c text-2xl"></a>
              <div className="flex flex-col h-14 w-full">
                <a className="text-xl text-start capitalize">{group.name}</a>
                <p className="text-muted-foreground text-gray-500 capitalize">{group.author}</p>
              </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="../../images/male.png"
                />
              </div>
            </div>
            <div className="chat-header">
              Beksulton Usmonov
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-f-c text-[#fff]">Hali dastur bazaga ulanmadi !</div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="../../images/fermale.png"
                />
              </div>
            </div>
            <div className="chat-header">
              Abdulxamidova Osiyoxon
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble bg-f-c text-[#fff]">Ha, ulanganda malumotlar chiqadi </div>
            {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
          </div>
          <form className="fixed w-sm max-w-[94vw] h-10 border border-gray-600 bottom-1 mt-5 flex justify-between rounded-md bg-[#fff]">
            <input type="text" placeholder="Xabar yozing..." className="pl-2 w-full" required />
            <button className="border w-10 h-10 bg-f-c text-[#fff] flex items-center justify-center cursor-pointer"><i className="fa-solid fa-paper-plane text-xl"></i></button>
          </form>
        </div>
    </div>
  )
}

export default Group
