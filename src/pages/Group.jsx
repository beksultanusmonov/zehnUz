import React from 'react'
import { Link } from 'react-router-dom'

function Group() {
  return (
    <div className='relative h-[99vh] overflow-hidden overflow-y-auto'>
      <div className="">
          <div className="navbar bg-base-100 shadow-sm mb-4 h-14 flex gap-3 sticky top-0 z-50">
              <Link to={'/main/groups/'} className="flex items-center justify-center fa-solid fa-arrow-left cursor-pointer f-c text-2xl"></Link>
              <div className="flex flex-col h-14 w-full">
                <a className="text-xl text-start">Ikki eshik orasi</a>
                <p className="text-muted-foreground text-gray-500">O'tkir Hoshimov</p>
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
            <div className="chat-bubble bg-f-c text-[#fff]">Dasturni ko'rinishi sizga maqulmi ? yoki boshqa rang tanlaymizmi ?</div>
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
            <div className="chat-bubble bg-f-c text-[#fff]">Men hali telegramga kirganim yo'q</div>
            {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
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
            <div className="chat-bubble bg-f-c text-[#fff]">Kirsam aytaman </div>
            {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
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
              G'aniyev Jabbor
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-f-c text-[#fff]">Hammaga salom</div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
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
              G'aniyev Jabbor
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-f-c text-[#fff]">Kim kitobni to'liq o'qib tugatdi</div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="../../images/fermale.png"
                />
              </div>
            </div>
            <div className="chat-header">
              Abdullayeva Dilnoza
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-f-c text-[#fff]">Men tugatdim !</div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
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
              Usmonov Beksulton
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-f-c text-[#fff]">Men ham !</div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
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
              Usmonov Beksulton
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-f-c text-[#fff]">Taqriz yozganlar bormi !</div>
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
            <div className="chat-bubble bg-f-c text-[#fff]">Ha men yozdim </div>
            {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
          </div>
          <form className="sticky w-full h-10 border border-gray-600 bottom-0 mt-5 flex justify-between rounded-md bg-[#fff]">
            <input type="text" placeholder="Xabar yozing..." className="pl-2 w-full" required />
            <button className="border w-10 h-10 bg-f-c text-[#fff] flex items-center justify-center cursor-pointer"><i className="fa-solid fa-paper-plane text-xl"></i></button>
          </form>
        </div>
    </div>
  )
}

export default Group
