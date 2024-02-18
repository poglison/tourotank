import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../context";
import { useContext } from "react";

export default function Menu() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);

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
            <div onClick={() => { setOpen(!open) }} className="w-11 h-full flex items-center justify-center rounded-full text-primary px-4 p-2 border-[1.5px] border-primary hover:bg-primary hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 min-w-5 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            {open &&
                <div className="mt-72 mr-40 absolute w-52 min-h-52 border-[1.5px] dark:border-stone-800 bg-white dark:bg-stone-950 rounded-xl">


                    <Link to={"/profile/" + user.id}>
                        <div className="w-full flex items-center h-16 border-b-[1.5px] dark:border-b-stone-800 rounded-t-xl hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                            <div className="w-10 min-w-10 h-10 rounded-full bg-stone-500 mr-2">

                                {user?.image ?
                                    <img src={user.image} className='w-full h-full object-cover rounded-full' />
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
                        <div className="relative w-full h-12 p-3 border-b-[1.5px] dark:border-b-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-stone-600 dark:text-stone-400">
                                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                            </svg>

                            <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">Meus investimentos</span>
                        </div>

                        <div onClick={() => { changeTheme() }} className="w-full h-12 p-3 border-b-[1.5px] dark:border-b-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer">
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