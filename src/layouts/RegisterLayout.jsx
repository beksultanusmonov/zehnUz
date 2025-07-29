import { useState } from "react"

function RegisterLayout() {
    const [main, setMain] = useState('signIn')
    const [viewPass, setViewPass] = useState('no')
  return (
    <div>
        {main == 'signUp' &&
        <div className="flex h-auto min-h-screen items-center justify-center overflow-x-hidden bg-cover bg-center bg-no-repeat py-10">
            <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="bg-base-100 shadow-base-300/20 z-1 w-full space-y-6 rounded-xl p-6 shadow-md sm:min-w-md lg:p-8">
                    <div className="flex items-center gap-3">
                    <img src="images/logo.png" className="size-8" alt="brand-logo" />
                    <h2 className="text-base-content text-xl font-bold">ZehnUz</h2>
                    </div>
                    <div>
                    <h3 className="text-base-content mb-1.5 text-2xl font-semibold">Accaunt yaratish</h3>
                    </div>
                    <div className="space-y-4">
                    <form className="mb-4 space-y-4" onsubmit="return false;">
                        <div>
                            <label className="label-text" for="userName">Ism Familiya:</label>
                            <input type="text" placeholder="Ism va Familiyangiz...." className="input w-full" required />
                        </div>
                        <div>
                            <label className="label-text" for="userEmail">Email:</label>
                            <input type="email" placeholder="Emailingiz..." className="input w-full" required />
                        </div>
                        <div>
                            <label className="label-text" for="userEmail">Parol:</label>
                            <input type={viewPass == 'no' ? "password" : 'text'} placeholder="Parol yarating..." className="input w-full" required />
                        </div>
                        <div>
                            <label className="label-text" for="userEmail">Tasdiq Parol:</label>
                            <input type={viewPass == 'no' ? "password" : 'text'} placeholder="Parolingizni qayta yozing..." className="input w-full" required />
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" className="w-10" checked={viewPass != 'no' ? true : false } onClick={() => setViewPass( viewPass == 'no' ? 'yes' : 'no')} />
                            <span>Parolni ko'rsatish</span>
                        </div>
                        <button className="btn btn-lg btn-primary btn-gradient btn-block">Yaratish</button>
                    </form>
                    <p className="text-base-content/80 mb-4 text-center">
                        Accauntingiz bormi?
                        <a href="#" className="link link-animated link-primary font-normal" onClick={() => setMain('signIn')}> Kirish</a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        }
        {main == 'signIn' &&
        <div className="flex h-auto min-h-screen items-center justify-center overflow-x-hidden bg-cover bg-center bg-no-repeat py-10">
            <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="bg-base-100 shadow-base-300/20 z-1 w-full space-y-6 rounded-xl p-6 shadow-md sm:min-w-md lg:p-8">
                    <div className="flex items-center gap-3">
                    <img src="images/logo.png" className="size-8" alt="brand-logo" />
                    <h2 className="text-base-content text-xl font-bold">ZehnUz</h2>
                    </div>
                    <div>
                    <h3 className="text-base-content mb-1.5 text-2xl font-semibold">Accauntga kirish</h3>
                    </div>
                    <div className="space-y-4">
                    <form className="mb-4 space-y-4" onsubmit="return false;">
                        <div>
                            <label className="label-text" for="userEmail">Email:</label>
                            <input type="email" placeholder="Emailingiz..." className="input w-full" required />
                        </div>
                        <div>
                            <label className="label-text" for="userEmail">Parol:</label>
                            <input type={viewPass == 'no' ? "password" : 'text'} placeholder="Parol yarating..." className="input w-full" required />
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" className="w-10" checked={viewPass != 'no' ? true : false } onClick={() => setViewPass( viewPass == 'no' ? 'yes' : 'no')} />
                            <span>Parolni ko'rsatish</span>
                        </div>
                        <button className="btn btn-lg btn-primary btn-gradient btn-block">Kirish</button>
                    </form>
                    <p className="text-base-content/80 mb-4 text-center">
                        Accauntingiz yo'qmi?
                        <a href="#" className="link link-animated link-primary font-normal" onClick={() => setMain('signUp')}> Yaratish</a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        }
    </div>
  )
}

export default RegisterLayout
