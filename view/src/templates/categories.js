import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../context";
import { useContext } from "react";

export default function Categories() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const games = [
        { "name": "8 Ball Pool", "image": "https://th.bing.com/th/id/R.f7afadf49e069466d3821f5f8091206e?rik=GRBrQbmY48ajWQ&pid=ImgRaw&r=0" },
        { "name": "A3: Still Alive", "image": "https://th.bing.com/th/id/OIP.CooINcpv01yz-PCETqy9VQAAAA?rs=1&pid=ImgDetMain" },
        { "name": "Adventure Quest World", "image": "url imagem do jogo" },
        { "name": "Aika", "image": "url imagem do jogo" },
        { "name": "Aion", "image": "url imagem do jogo" },
        { "name": "Albion Online", "image": "url imagem do jogo" },
        { "name": "Apex Legends", "image": "https://th.bing.com/th/id/R.68817bdf3fbd5fb0f423bda5631812fb?rik=jX%2bbcx2m6285wQ&pid=ImgRaw&r=0" },
        { "name": "Avakin Life", "image": "url imagem do jogo" },
        { "name": "Black Clover Mobile", "image": "url imagem do jogo" },
        { "name": "Black Desert", "image": "url imagem do jogo" },
        { "name": "Blade and Soul", "image": "url imagem do jogo" },
        { "name": "Brawl Stars", "image": "url imagem do jogo" },
        { "name": "Brawlhalla", "image": "https://th.bing.com/th/id/OIP.GCWs0KUpRtpk-_sgmxqfUAHaFo?rs=1&pid=ImgDetMain" },
        { "name": "Cabal Online", "image": "url imagem do jogo" },
        { "name": "Call of Duty", "image": "url imagem do jogo" },
        { "name": "Clash of Clans", "image": "url imagem do jogo" },
        { "name": "Clash Royale", "image": "url imagem do jogo" },
        { "name": "Coin Master", "image": "url imagem do jogo" },
        { "name": "Combat Arms", "image": "url imagem do jogo" },
        { "name": "Counter Strike", "image": "url imagem do jogo" },
        { "name": "Criptomoedas e NFT", "image": "url imagem do jogo" },
        { "name": "Crossfire", "image": "url imagem do jogo" },
        { "name": "Dark and Darker", "image": "url imagem do jogo" },
        { "name": "DDTank", "image": "url imagem do jogo" },
        { "name": "Dead by Daylight", "image": "url imagem do jogo" },
        { "name": "Diablo Immortal", "image": "url imagem do jogo" },
        { "name": "Diablo IV", "image": "url imagem do jogo" },
        { "name": "Digimon Masters Online", "image": "url imagem do jogo" },
        { "name": "Dofus", "image": "url imagem do jogo" },
        { "name": "DOTA 2", "image": "url imagem do jogo" },
        { "name": "Dragon Ball Legends", "image": "url imagem do jogo" },
        { "name": "Dragon City Mobile", "image": "url imagem do jogo" },
        { "name": "Epic Games", "image": "url imagem do jogo" },
        { "name": "Epic Seven", "image": "url imagem do jogo" },
        { "name": "Escape from Tarkov", "image": "url imagem do jogo" },
        { "name": "Farlight 84", "image": "url imagem do jogo" },
        { "name": "FIFA", "image": "url imagem do jogo" },
        { "name": "For Honor", "image": "url imagem do jogo" },
        { "name": "Fortnite", "image": "url imagem do jogo" },
        { "name": "Forza Horizon", "image": "url imagem do jogo" },
        { "name": "Free Fire", "image": "url imagem do jogo" },
        { "name": "Genshin Impact", "image": "url imagem do jogo" },
        { "name": "GOG", "image": "url imagem do jogo" },
        { "name": "Grand Chase", "image": "url imagem do jogo" },
        { "name": "Grand Fantasia", "image": "url imagem do jogo" },
        { "name": "GTA", "image": "url imagem do jogo" },
        { "name": "Guild Wars 2", "image": "url imagem do jogo" },
        { "name": "Habbo", "image": "url imagem do jogo" },
        { "name": "Hay Day", "image": "url imagem do jogo" },
        { "name": "Hearthstone", "image": "url imagem do jogo" },
        { "name": "Heartwood Online", "image": "url imagem do jogo" },
        { "name": "Honkai Impact", "image": "url imagem do jogo" },
        { "name": "Honkai: Star Rail", "image": "url imagem do jogo" },
        { "name": "Honor of Kings", "image": "url imagem do jogo" },
        { "name": "Icarus Online", "image": "url imagem do jogo" },
        { "name": "IMVU", "image": "url imagem do jogo" },
        { "name": "Kakele Online", "image": "url imagem do jogo" },
        { "name": "League of Legends", "image": "url imagem do jogo" },
        { "name": "League of Legends: Wild Rift", "image": "url imagem do jogo" },
        { "name": "Legend Online", "image": "url imagem do jogo" },
        { "name": "Legends of Runeterra", "image": "url imagem do jogo" },
        { "name": "Lords Mobile", "image": "url imagem do jogo" },
        { "name": "Lost Ark", "image": "url imagem do jogo" },
        { "name": "Magic The Gathering", "image": "url imagem do jogo" },
        { "name": "Metin 2", "image": "url imagem do jogo" },
        { "name": "Minecraft", "image": "url imagem do jogo" },
        { "name": "MIR4", "image": "url imagem do jogo" },
        { "name": "Mobile Legends", "image": "url imagem do jogo" },
        { "name": "MU Legend", "image": "url imagem do jogo" },
        { "name": "MU Online", "image": "url imagem do jogo" },
        { "name": "My Hero Academia", "image": "url imagem do jogo" },
        { "name": "Naruto Online", "image": "url imagem do jogo" },
        { "name": "New World", "image": "url imagem do jogo" },
        { "name": "Ni No Kuni", "image": "url imagem do jogo" },
        { "name": "Noahs Heart", "image": "url imagem do jogo" },
        { "name": "Origin", "image": "url imagem do jogo" },
        { "name": "Outros Jogos", "image": "url imagem do jogo" },
        { "name": "Overwatch", "image": "url imagem do jogo" },
        { "name": "Palworld", "image": "url imagem do jogo" },
        { "name": "Path of Exile", "image": "url imagem do jogo" },
        { "name": "Perfect World", "image": "url imagem do jogo" },
        { "name": "PES", "image": "url imagem do jogo" },
        { "name": "Playstation", "image": "url imagem do jogo" },
        { "name": "Point Blank", "image": "url imagem do jogo" },
        { "name": "Pokemon GO", "image": "url imagem do jogo" },
        { "name": "Pokemon Unite", "image": "url imagem do jogo" },
        { "name": "PokeXGames", "image": "url imagem do jogo" },
        { "name": "Priston Tale", "image": "url imagem do jogo" },
        { "name": "PUBG", "image": "url imagem do jogo" },
        { "name": "Ragnarok", "image": "url imagem do jogo" },
        { "name": "Rainbow Six", "image": "url imagem do jogo" },
        { "name": "Ravendawn", "image": "url imagem do jogo" },
        { "name": "Red Dead Online", "image": "url imagem do jogo" },
        { "name": "Roblox", "image": "url imagem do jogo" },
        { "name": "Rocket League", "image": "url imagem do jogo" },
        { "name": "Rucoy Online", "image": "url imagem do jogo" },
        { "name": "Runescape", "image": "url imagem do jogo" },
        { "name": "Rush Royale", "image": "url imagem do jogo" },
        { "name": "Saint Seiya Awakening", "image": "url imagem do jogo" },
        { "name": "Seafight", "image": "url imagem do jogo" },
        { "name": "Seven Deadly Sins", "image": "url imagem do jogo" },
        { "name": "Smite", "image": "url imagem do jogo" },
        { "name": "Standoff 2", "image": "url imagem do jogo" },
        { "name": "Steam", "image": "url imagem do jogo" },
        { "name": "Stumble Guys", "image": "url imagem do jogo" },
        { "name": "Subway Surfers", "image": "url imagem do jogo" },
        { "name": "Summoners War", "image": "url imagem do jogo" },
        { "name": "Tibia", "image": "url imagem do jogo" },
        { "name": "Tower of Fantasy", "image": "url imagem do jogo" },
        { "name": "Transformice", "image": "url imagem do jogo" },
        { "name": "Ubisoft", "image": "url imagem do jogo" },
        { "name": "Valorant", "image": "url imagem do jogo" },
        { "name": "Wakfu", "image": "url imagem do jogo" },
        { "name": "Warface", "image": "url imagem do jogo" },
        { "name": "Warframe", "image": "url imagem do jogo" },
        { "name": "Warspear", "image": "url imagem do jogo" },
        { "name": "With Your Destiny", "image": "url imagem do jogo" },
        { "name": "World of Tanks", "image": "url imagem do jogo" },
        { "name": "World of Warcraft", "image": "url imagem do jogo" },
        { "name": "Xbox", "image": "url imagem do jogo" }
    ]


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
                <div className="overflow-auto h-[calc(100%-120px)] left-5 md:left-10 top-20 mr-40 fixed w-[calc(100%-40px)] md:w-[calc(100%-80px)] border-[1.5px] dark:border-stone-800 bg-white dark:bg-stone-950 rounded-xl">


                    <div className="w-full flex items-center h-16 border-b-[1.5px] dark:border-b-stone-800 rounded-t-xl hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-400">Jogos</span>
                    </div>

                    <div className="font-ibm flex flex-wrap">

                        {games.map((game, index) => {
                            return (
                                <div className="w-72 relative h-12 p-3 border-b-[1.5px] dark:border-b-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer">
                                    <img src={game.image} viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-stone-600 dark:text-stone-400 rounded-sm">
                                    </img>

                                    <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">{game.name}</span>
                                </div>
                            )
                        })}


                    </div>

                </div>
            }
        </div >
    )
}