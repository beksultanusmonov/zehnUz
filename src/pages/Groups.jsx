import React, { useState } from "react";

function Groups() {
  const [select, setSelect] = useState('yes');
  return (
    <div>
      {select == 'no' &&
        <div class="w-full max-w-md p-4 bg-white sm:p-8">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Kitoblar guruhlari
            </h5>
            <a
              href="/main/"
              class="text-sm font-medium f-c hover:underline dark:text-blue-500"
            >
              Kitoblar
            </a>
          </div>
          <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
              <li class="py-3 sm:py-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                      Ikki eshik orasi
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                      O'tkir Hoshimov
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4 cursor-pointer">
                <div class="flex items-center ">
                  <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    O'tkan kunlar
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Abdulla Qodiriy
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4 cursor-pointer">
                <div class="flex items-center">
                <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    Ibtido
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Den Braun
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4 cursor-pointer">
                <div class="flex items-center ">
                <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    Choliqushi
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Rashod Nuri Guntekin
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    Molxona
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Jorj Oruell
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                  <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    Alkimyogar
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Paulo Koelo
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                  <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    kichkina shahzoda 
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Antuan de-Sent Ekzyuperi
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                  <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    jinoyat va jazo
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Lev Tolstoy
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                  <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    Yashamoq
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Yuy Xua
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                  <div class="shrink-0">
                    <i class="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate capitalize">
                    Maymunlar sayyorasi
                    </p>
                    <p class="text-sm text-gray-500 truncate capitalize">
                    Pyer Bul
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold">
                    ✓
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      }
      {select != 'no' &&
        <div className="relative">
          <div className="navbar bg-base-100 shadow-sm mb-4 h-14 flex gap-3 sticky top-0 z-50">
              <i class="flex items-center justify-center fa-solid fa-arrow-left cursor-pointer f-c text-2xl"></i>
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
          <form className="sticky w-full h-10 border border-gray-600 -bottom-3 mt-5 flex justify-between rounded-md bg-[#fff]">
            <input type="text" placeholder="Xabar yozing..." className="pl-2 w-full" required />
            <button className="border w-10 h-10 bg-f-c text-[#fff] flex items-center justify-center cursor-pointer"><i class="fa-solid fa-paper-plane text-xl"></i></button>
          </form>
        </div>
      }
    </div>
  );
}

export default Groups;
