import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../context";
import { useContext } from "react";

export default function Categories() {

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
            <div onClick={() => { setOpen(!open) }} className="h-full flex items-center justify-center text-stone-800 dark:text-stone-400 hover:text-stone-200 px-6 cursor-pointer">
                <span>
                    Categories
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>

            {open &&
                <div className="left-5 md:left-10 top-20 mr-40 fixed w-[calc(100%-40px)] md:w-[calc(100%-80px)] border-[1.5px] dark:border-stone-800 bg-white dark:bg-stone-950 rounded-xl">


                    <div className="w-full flex items-center h-16 border-b-[1.5px] dark:border-b-stone-800 rounded-t-xl hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-400">Jogos</span>
                    </div>

                    <div className="font-ibm flex-wrap">
                        <div className="relative h-12 p-3 border-b-[1.5px] dark:border-b-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-stone-600 dark:text-stone-400">
                                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                            </svg>

                            <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">Meus investimentos</span>
                        </div>


                    </div>

                </div>
            }
        </div >
    )
}