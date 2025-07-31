import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Book() {
    const [inform, setInform] = useState('tushuncha')
    const navigate = useNavigate();
  return (
    <div className='relative h-[100vh] overflow-hidden overflow-y-auto px-4'>
        <i className='fa-solid fa-arrow-left f-c text-3xl my-2' onClick={() => navigate('/main/')}></i>
        <hr className='f-c mb-5' />
        <div className="flex">
            <div className="flex gap-2 items-center">
                <div className="w-[100px] h-[150px] p-1 shadow-sm rounded-sm">
                    <img src="../books/ikki-eshik-orasi.jpg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-medium text-gray-900 truncate capitalize">
                      Ikki eshik orasi
                    </p>
                    <p className="text-xl text-gray-500 truncate capitalize">
                      O'tkir Hoshimov
                    </p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3 my-5">
            <button className='bg-f-c text-[#fff] border-none h-10 rounded-[25px] cursor-pointer'> O'qish </button>
            {/* <button className='border f-b f-c border-none h-10 rounded-[25px] cursor-pointer'> O'qishga qo'shilgan </button> */}
            <button className='bg-f-c text-[#fff] border-none h-10 rounded-[25px] cursor-pointer'> Muhokama</button>
        </div>
        <div className='flex flex-col'>
            <div className="grid grid-cols-2">
                <h1 className={`text-xl cursor-pointer ${inform == 'tushuncha' && 'f-c f-b-b'}`} onClick={() => setInform('tushuncha')}>Tushuncha</h1>
                <h1 className={`text-xl cursor-pointer ${inform == 'taqriz' && 'f-c f-b-b'}`} onClick={() => setInform('taqriz')}>Taqrizlar</h1>
            </div>
            {inform == 'tushuncha' &&
                <p className='my-2 text-xl'>Rost bilan yolg'onning  o'rtasi - to'rt enlik, degan gap bor. Gap shundaki ko'z bilan quloqning orasi - to'rt enlik ekan. Eshitganingga emas, ko'rganingga ishon... Maqsad - Shu.</p>
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
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-12"
                                        title="February 12th, 2022">30.7.2025</time></p>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">Juda ham o'qishga arzirli va muhokamali. U yerdagi bo'ladigon jarayonlar, personajlar va go'yalar juda yaxshi tuzilgan</p>
                    </article>
                    <article className="py-4 mb-3">
                        <footer className="flex mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-90 font-semibold"><img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src="../images/fermale.png"
                                        alt="Jese Leos" />Abdulxamidova Osiyoxon</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-12"
                                        title="February 12th, 2022">31.7.2025</time></p>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">Asarda insonlar taqdiri va inson umrining murakkabligini mahorat bilan tasvirlangan. Adib, birinchi navbatda, tinchlikka rahna solgan urushni tilga oladi.</p>
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
