import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetBooks } from "../hooks/useGetBooks";
import { GlobalContext } from "../context/GlobalContext";

function Groups() {
  const [select, setSelect] = useState('yes');
  const {group, dispatch} = useContext(GlobalContext)
  const books = useGetBooks();
  const navigate = useNavigate();
  const selectGroup = (group) => {
    dispatch({type: "ADD_GROUP", payload: group})
    navigate('/group/')
  }
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
              {books.length != 0 &&
              books.map(book => {
                return <li key={book.id} className="py-3 sm:py-4 cursor-pointer" onClick={() => selectGroup(book)}>
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <i className="fa-solid fa-book text-4xl f-c"></i>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate capitalize">
                        {book.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate capitalize">
                        {book.author}
                      </p>
                    </div>
                    
                  </div>
              </li>
              })
              }
              
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Groups;
