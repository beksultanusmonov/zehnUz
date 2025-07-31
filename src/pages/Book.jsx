import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext';

function Book() {
    const navigate = useNavigate();
    const {book, dispatch }  = useContext(GlobalContext)    
    const [inform, setInform] = useState('tushuncha')
    const enterGroup = () => {
        dispatch({type: "ADD_GROUP", payload: book})
        navigate('/group/')
    }
    useEffect(() => {
        if(!book){
            navigate('/main/')
        }
    }, [book])
  return (
    <div className='relative h-[100vh] overflow-hidden overflow-y-auto px-4'>
        <i className='fa-solid fa-arrow-left f-c text-3xl my-2 cursor-pointer' onClick={() => dispatch({type: "DELETE_BOOK"})}></i>
        <hr className='f-c mb-5' />
        <div className="flex">
            <div className="flex gap-2 items-center">
                <div className="w-[100px] h-[150px] p-1 shadow-sm rounded-sm">
                    <img src={`../books/${book.img}`} alt="" className='w-full h-full object-cover' />
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-medium text-gray-900 truncate capitalize">
                      {book.name}
                    </p>
                    <p className="text-xl text-gray-500 truncate capitalize">
                      {book.author}
                    </p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 my-5">
            <button className='bg-f-c text-[#fff] border-none h-10 rounded-[25px] cursor-pointer' onClick={enterGroup}> Muhokama</button>
        </div>
        <div className='flex flex-col'>
            <div className="grid grid-cols-2">
                <h1 className={`text-xl cursor-pointer ${inform == 'tushuncha' && 'f-c f-b-b'}`} onClick={() => setInform('tushuncha')}>Tushuncha</h1>
                <h1 className={`text-xl cursor-pointer ${inform == 'taqriz' && 'f-c f-b-b'}`} onClick={() => setInform('taqriz')}>Taqrizlar</h1>
            </div>
            {inform == 'tushuncha' &&
                <p className='my-2 text-xl'>{book.about}</p>
            }
            {inform == 'taqriz' &&
                <>
                <div className='h-[53vh] overflow-hidden overflow-y-auto'>
                    <article className="py-4 mb-3">
                        <footer className="flex mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-90 font-semibold"><img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src="../images/male.png"
                                        alt="Jese Leos" />Usmonov Beksulton</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time>30.7.2025</time></p>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">Hali dastur bazaga ulanmadi !</p>
                    </article>
                    <article className="py-4 mb-3">
                        <footer className="flex mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-90 font-semibold"><img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src="../images/fermale.png"
                                        alt="Jese Leos" />Abdulxamidova Osiyoxon</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time>31.7.2025</time></p>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">Ha, ulanganda malumotlar chiqadi</p>
                    </article>
                </div>
                <form className="sticky w-full h-10 border border-gray-600 bottom-1 mt-5 flex justify-between rounded-md bg-[#fff]">
                    <input type="text" placeholder="Taqriz yozing..." className="pl-2 w-full" required />
                    <button className="border w-10 h-10 bg-f-c text-[#fff] flex items-center justify-center cursor-pointer"><i className="fa-solid fa-paper-plane text-xl"></i></button>
                </form>
                </>
            }
        </div>
    </div>
  )
}

export default Book
