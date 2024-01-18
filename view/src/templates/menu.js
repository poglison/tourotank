import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../context";
import { useContext } from "react";

export default function Menu() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);


    return (
        <div className="relative flex items-center justify-center">
            <div onClick={() => { setOpen(!open) }} className="w-11 h-full flex items-center justify-center rounded-full bg-white text-primary px-4 p-2 border-[1.5px] border-primary hover:bg-primary hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 min-w-5 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            {open &&
                <div className="mt-72 mr-40 absolute w-52 min-h-52 border-[1.5px] bg-white   rounded-xl">


                    <Link to={"/profile/" + user.id}>
                        <div className="w-full flex items-center h-16 border-b-[1.5px]   rounded-t-xl hover:bg-zinc-50 p-4 cursor-pointer">
                            <div className="w-10 min-w-10 h-10 rounded-full bg-zinc-500 mr-2">

                                {/* <img src='https://avatars.githubusercontent.com/u/7' className='w-full h-full object-cover rounded-full' /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full object-cover rounded-full text-white fill-white p-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>

                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs w-32 truncate">Olá, {user?.displayName?.split(" ")[0]}!</span>

                                <span className="text-xs font-medium text-zinc-800">Ver perfil</span>
                            </div>
                        </div>
                    </Link>

                    <div className="font-ibm">
                        <div className="relative w-full h-12 p-3 border-b-[1.5px]   hover:bg-zinc-50 flex items-center px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-zinc-600">
                                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                            </svg>


                            <span className="text-sm ml-3 text-zinc-600">Meus investimentos</span>
                        </div>

                        <div className="w-full h-12 p-3 border-b-[1.5px]   hover:bg-zinc-50 flex items-center px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-zinc-600">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>



                            <span className="text-sm ml-3 text-zinc-600">Meus favoritos</span>
                        </div>

                        <div onClick={() => {setUser({}); navigate("/login")}} className="w-full h-12 p-3 hover:bg-zinc-50 flex items-center px-4 cursor-pointer rounded-b-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-zinc-600">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                            </svg>


                            <span className="text-sm ml-3 text-zinc-600">Sair</span>
                        </div>
                    </div>

                </div>
            }
        </div >
    )
}