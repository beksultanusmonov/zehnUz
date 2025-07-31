import React, { useContext, useEffect, useState } from 'react'
import { useGetBooks } from '../hooks/useGetBooks'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'



function Books() {
  const {dispatch} = useContext(GlobalContext)
  const books = useGetBooks()
  const navigate = useNavigate()
  const [uiBooks, setUiBooks] = useState(books)

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    const searchet = []
    books.forEach(book => {
      if(book.name.toLowerCase().includes(search)){
        searchet.push(book)
      }
    })
    setUiBooks(searchet)
  }

  const selectBook = (book) => {
    dispatch({type: "ADD_BOOK", payload: book})
    navigate('/book/')
  }

  return (
    <div className='h-full'>
      <h1 className='text-2xl text-center uppercase mb-3 f-c font-bold'>Kitoblar:</h1>
      <label className="input w-full">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search" onChange={handleSearch} />
      </label>
      <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {uiBooks.length != 0 &&
          uiBooks.map(book => {
            return <li key={book.id} className="py-3 sm:py-4 cursor-pointer" onClick={() => selectBook(book)}>
            <div className="flex items-center">
              <div className="shrink-0">
                <img src={`../books/${book.img}`} className="w-16" />
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
  )
}

export default Books
