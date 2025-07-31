import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Groups() {
  const [select, setSelect] = useState('yes');
  const navigate = useNavigate();
  return (
    <div>
        <div className="w-full max-w-md p-4 bg-white sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Muhokama guruhlari
            </h5>
            <a
              href="/main/"
              className="text-sm font-medium f-c hover:underline dark:text-blue-500"
            >
              Kitoblar
            </a>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4 cursor-pointer" onClick={() => navigate('/group/')}>
                <div className="flex items-center">
                  <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                      Ikki eshik orasi
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                      O'tkir Hoshimov
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="py-3 sm:py-4 cursor-pointer">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    O'tkan kunlar
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Abdulla Qodiriy
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="py-3 sm:py-4 cursor-pointer">
                <div className="flex items-center">
                <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    Ibtido
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Den Braun
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="py-3 sm:py-4 cursor-pointer">
                <div className="flex items-center ">
                <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    Choliqushi
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Rashod Nuri Guntekin
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    Molxona
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Jorj Oruell
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    Alkimyogar
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Paulo Koelo
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    kichkina shahzoda 
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Antuan de-Sent Ekzyuperi
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    jinoyat va jazo
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Lev Tolstoy
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    Yashamoq
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Yuy Xua
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="shrink-0">
                    <i className="fa-solid fa-book text-4xl f-c"></i>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate capitalize">
                    Maymunlar sayyorasi
                    </p>
                    <p className="text-sm text-gray-500 truncate capitalize">
                    Pyer Bul
                    </p>
                  </div>
                  
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Groups;
