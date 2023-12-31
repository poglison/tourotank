import { useState } from "react"

export default function Menu() {

    const [open, setOpen] = useState(false);


    return (
        <div className="relative flex items-center justify-center">
            <div onClick={() => { setOpen(!open) }} className="w-11 h-full flex items-center justify-center rounded-full bg-white text-primary px-4 p-2 border-2 border-primary hover:bg-primary hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 min-w-5 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            {open &&
                <div className="mt-72 mr-40 absolute w-52 min-h-52 border bg-white border-zinc-300 rounded-2xl">
                    <div className="w-full flex items-center h-16 border-b border-zinc-300 rounded-t-2xl hover:bg-zinc-50 p-4 cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-zinc-500 mr-2">
                            {/* <img src="" className="w-full h-full object-cover rounded-full" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full object-cover rounded-full text-white fill-white p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs">Olá, touratank!</span>

                            <span className="text-xs font-medium">Ver perfil</span>
                        </div>
                    </div>


                    <div className="font-ibm">
                        <div className="relative w-full p-3 border-b border-zinc-300 hover:bg-zinc-50 flex items-center px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                            </svg>

                            <span className="text-sm ml-3 text-zinc-700">Meus investimentos</span>
                        </div>

                        <div className="w-full p-3 border-b border-zinc-300 hover:bg-zinc-50 flex items-center px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>


                            <span className="text-sm ml-3 text-zinc-700">Meus favoritos</span>
                        </div>

                        <div className="w-full p-3 hover:bg-zinc-50 flex items-center px-4 cursor-pointer rounded-b-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                            </svg>

                            <span className="text-sm ml-3 text-zinc-700">Sair</span>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}