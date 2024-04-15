import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { games, others } from "../utils/jsons";

import UserContext from "../utils/context";
import { useContext } from "react";

export default function Categories() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex items-center justify-center">
            <div onClick={() => { setOpen(!open) }} className="h-full flex items-center justify-center text-stone-500 dark:text-stone-400 hover:dark:text-stone-100 px-6 cursor-pointer">

                <span className="hidden sm:flex">
                    Categorias
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="ml-2 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>

            {open &&
                <div className="overflow-auto h-[calc(100%-120px)] left-5 md:left-10 top-20 mr-40 fixed w-[calc(100%-40px)] md:w-[calc(100%-80px)] border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-850 rounded-xl">

                    <div className="w-full flex items-center h-16 border-b dark:border-b-stone-800 border-b-stone-300 rounded-t-xl hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-400">Outros</span>
                    </div>

                    <div className="font-ibm flex flex-wrap pb-6 pt-6 items-center justify-center">
                        {others.map((other, index) => {
                            return (
                                <Link key={index} to={"/category/" + other.value} className="w-72 relative h-14 p-3 hover:bg-stone-50 border border-transparent dark:hover:border-stone-700 hover:border-stone-300 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-lg">
                                    <div className="w-10 h-10 rounded-lg">
                                        {other.image ?
                                            < img src={other.image} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-stone-600 dark:text-stone-400 rounded-md object-cover" />
                                            :
                                            null
                                        }
                                    </div>

                                    <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">{other.label}</span>
                                </Link>
                            )
                        })}
                    </div>


                    <div className="w-full flex items-center h-16 border-b border-t border-stone-300 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-400">Jogos</span>
                    </div>

                    <div className="font-ibm flex flex-wrap pb-6 pt-6 items-center justify-center">

                        {games.map((game, index) => {
                            return (
                                <Link key={index} to={"/category/" + game.value} className="w-72 relative h-14 p-3 hover:bg-stone-50 border border-transparent dark:hover:border-stone-700 hover:border-stone-300 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-lg">
                                    <img src={game.image} alt="Imagem da categoria" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-stone-600 dark:text-stone-400 rounded-md object-cover">
                                    </img>

                                    <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">{game.label}</span>
                                </Link>
                            )
                        })}


                    </div>


                </div>
            }
        </div >
    )
}