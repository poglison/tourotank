import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../utils/context";
import { useContext } from "react";

export default function Menu() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [moneyVisible, setMoneyVisible] = useState(false);

    const changeTheme = () => {
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
        } else {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        }
    }

    return (
        <div className="relative flex items-center justify-center">
            {/* <div onClick={() => { setOpen(!open) }} className="w-11 h-full flex items-center justify-center rounded-full text-primary px-4 p-2 border border-primary hover:bg-primary hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 min-w-5 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div> */}

            <img onClick={() => { setOpen(!open) }} src={user?.image} alt="Imagem de perfil" className="w-10 min-w-10 h-10 rounded-full cursor-pointer" />


            {open &&
                <div className="mt-80 mr-40 absolute w-52 min-h-52 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-850 rounded-xl">


                    <Link to={"/profile/" + user.id}>
                        <div className="w-full flex items-center h-16 border-b dark:border-b-stone-800 border-stone-300 rounded-t-xl hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                            <div className="w-10 min-w-10 h-10 rounded-full bg-stone-500 mr-2">

                                {user?.image ?
                                    <img src={user.image} alt="Imagem de perfil" className='w-full h-full object-cover rounded-full' />
                                    :
                                    <div></div>
                                }

                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs w-32 truncate dark:text-white">Olá, {user?.displayName?.split(" ")[0]}!</span>

                                <span className="text-xs font-medium text-stone-800 dark:text-stone-400">Ver perfil</span>
                            </div>
                        </div>
                    </Link>

                    <div className="font-ibm">
                        <div className="relative w-full h-12 p-3 border-b border-stone-300 dark:border-b-stone-800 flex items-center px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 min-w-5 h-5 text-stone-600 dark:text-stone-400">
                                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                            </svg>

                            <div className="flex w-full mr-2 items-center justify-between">
                                {moneyVisible ?
                                    <span className="w-20 h-4 rounded bg-stone-400 text-sm ml-4 text-stone-600 dark:text-stone-500"></span>
                                    :
                                    <span className="text-sm ml-4 text-stone-600 dark:text-stone-400">0,0</span>
                                }

                                <svg onClick={() => setMoneyVisible(!moneyVisible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="relative -mr-4 ml-4 text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer w-10 min-w-10 h-10 p-2.5 rounded-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </div>
                        </div>


                        <div className="relative w-full h-12 p-3 border-b border-stone-300 dark:border-b-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-stone-600 dark:text-stone-400">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>


                            <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">Minhas compras</span>
                        </div>

                        <div onClick={() => { changeTheme() }} className="w-full h-12 p-3 border-b border-stone-300 dark:border-b-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-stone-600 dark:text-stone-400">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                            </svg>


                            <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">Mudar tema</span>
                        </div>

                        <div onClick={() => { setUser({}); sessionStorage.clear(); navigate("/login") }} className="w-full h-12 p-3 hover:bg-stone-50 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-b-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-stone-600 dark:text-stone-400">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                            </svg>

                            <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">Sair</span>
                        </div>
                    </div>

                </div>
            }
        </div >
    )
}