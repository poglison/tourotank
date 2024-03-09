import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../context";
import { useContext } from "react";

export default function Categories() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const games = [
        { "name": "8 Ball Pool", "image": "/imgs/categories/8 Ball Pool.png" },
        { "name": "A3: Still Alive", "image": "/imgs/categories/A3 Still Alive.png" },
        { "name": "Adventure Quest World", "image": "/imgs/categories/Adventure Quest World.png" },
        { "name": "Aika", "image": "/imgs/categories/Aika.png" },
        { "name": "Aion", "image": "/imgs/categories/Aion.png" },
        { "name": "Albion Online", "image": "/imgs/categories/Albion Online.png" },
        { "name": "Apex Legends", "image": "/imgs/categories/Apex Legends.png" },
        { "name": "Avakin Life", "image": "/imgs/categories/Avakin Life.png" },
        { "name": "Black Clover Mobile", "image": "/imgs/categories/Black Clover Mobile.png" },
        { "name": "Black Desert", "image": "/imgs/categories/Black Desert.png" },
        { "name": "Blade and Soul", "image": "/imgs/categories/Blade and Soul.png" },
        { "name": "Brawl Stars", "image": "/imgs/categories/Brawl Stars.png" },
        { "name": "Brawlhalla", "image": "/imgs/categories/Brawlhalla.png" },
        { "name": "Cabal Online", "image": "/imgs/categories/Cabal Online.png" },
        { "name": "Call of Duty", "image": "/imgs/categories/Call of Duty.png" },
        { "name": "Clash of Clans", "image": "/imgs/categories/Clash of Clans.png" },
        { "name": "Clash Royale", "image": "/imgs/categories/Clash Royale.png" },
        { "name": "Coin Master", "image": "/imgs/categories/Coin Master.png" },
        { "name": "Combat Arms", "image": "/imgs/categories/Combat Arms.png" },
        { "name": "Counter Strike", "image": "/imgs/categories/Counter Strike.png" },
        { "name": "Crossfire", "image": "/imgs/categories/Crossfire.png" },
        { "name": "Dark and Darker", "image": "/imgs/categories/Dark and Darker.png" },
        { "name": "DDTank", "image": "/imgs/categories/DDTank.png" },
        { "name": "Dead by Daylight", "image": "/imgs/categories/Dead by Daylight.png" },
        { "name": "Diablo Immortal", "image": "/imgs/categories/Diablo Immortal.png" },
        { "name": "Diablo IV", "image": "/imgs/categories/Diablo IV.png" },
        { "name": "Digimon Masters Online", "image": "/imgs/categories/Digimon Masters Online.png" },
        { "name": "Dofus", "image": "/imgs/categories/Dofus.png" },
        { "name": "DOTA 2", "image": "/imgs/categories/DOTA 2.png" },
        { "name": "Dragon Ball Legends", "image": "/imgs/categories/Dragon Ball Legends.png" },

        { "name": "Dragon City Mobile", "image": "/imgs/categories/Dragon City Mobile.png" },
        { "name": "Elden Ring", "image": "/imgs/categories/Elden Ring.png" },
        { "name": "Epic Games", "image": "/imgs/categories/Epic Games.png" },
        { "name": "Epic Seven", "image": "/imgs/categories/Epic Seven.png" },
        { "name": "Escape from Tarkov", "image": "/imgs/categories/Escape from Tarkov.png" },
        { "name": "Farlight 84", "image": "/imgs/categories/Farlight 84.png" },
        { "name": "FIFA", "image": "/imgs/categories/FIFA.png" },
        { "name": "For Honor", "image": "/imgs/categories/For Honor.png" },
        { "name": "Fortnite", "image": "/imgs/categories/Fortnite.png" },
        { "name": "Forza Horizon", "image": "/imgs/categories/Forza Horizon.png" },
        { "name": "Free Fire", "image": "/imgs/categories/Free Fire.png" },
        { "name": "Genshin Impact", "image": "/imgs/categories/Genshin Impact.png" },
        { "name": "GOG", "image": "/imgs/categories/GOG.png" },
        { "name": "Grand Chase", "image": "/imgs/categories/Grand Chase.png" },
        { "name": "Grand Fantasia", "image": "/imgs/categories/Grand Fantasia.png" },
        { "name": "GTA", "image": "/imgs/categories/GTA.png" },
        { "name": "Guild Wars 2", "image": "/imgs/categories/Guild Wars 2.png" },
        { "name": "Habbo", "image": "/imgs/categories/Habbo.png" },
        { "name": "Hay Day", "image": "/imgs/categories/Hay Day.png" },
        { "name": "Heartwood Online", "image": "/imgs/categories/Heartwood Online.png" },
        { "name": "Honkai Impact", "image": "/imgs/categories/Honkai Impact.png" },
        { "name": "Honkai: Star Rail", "image": "/imgs/categories/Honkai Star Rail.png" },
        { "name": "Honor of Kings", "image": "/imgs/categories/Honor of Kings.png" },
        { "name": "Icarus Online", "image": "/imgs/categories/Icarus Online.png" },
        { "name": "IMVU", "image": "/imgs/categories/IMVU.png" },
        { "name": "Kakele Online", "image": "/imgs/categories/Kakele Online.png" },
        { "name": "League of Legends", "image": "/imgs/categories/League of Legends.png" },
        { "name": "League of Legends: Wild Rift", "image": "/imgs/categories/League of Legends Wild Rift.png" },
        { "name": "Legend Online", "image": "/imgs/categories/Legend Online.png" },
        { "name": "Legends of Runeterra", "image": "/imgs/categories/Legends of Runeterra.png" },

        { "name": "Lords Mobile", "image": "/imgs/categories/Lords Mobile.png" },
        { "name": "Lost Ark", "image": "/imgs/categories/Lost Ark.png" },
        { "name": "Magic The Gathering", "image": "/imgs/categories/Magic The Gathering.png" },
        { "name": "Metin 2", "image": "/imgs/categories/Metin 2.png" },
        { "name": "Minecraft", "image": "/imgs/categories/Minecraft.png" },
        { "name": "MIR4", "image": "/imgs/categories/MIR4.png" },
        { "name": "Mobile Legends", "image": "/imgs/categories/Mobile Legends.png" },
        { "name": "MU Legend", "image": "/imgs/categories/MU Legend.png" },
        { "name": "MU Online", "image": "/imgs/categories/MU Online.png" },
        { "name": "My Hero Academia", "image": "/imgs/categories/My Hero Academia.png" },
        { "name": "Naruto Online", "image": "/imgs/categories/Naruto Online.png" },
        { "name": "New World", "image": "/imgs/categories/New World.png" },
        { "name": "Ni No Kuni", "image": "/imgs/categories/Ni No Kuni.png" },
        { "name": "Noahs Heart", "image": "/imgs/categories/Noahs Heart.png" },
        { "name": "Origin", "image": "/imgs/categories/Origin.png" },
        { "name": "Overwatch", "image": "/imgs/categories/Overwatch.png" },
        { "name": "Palworld", "image": "/imgs/categories/Palworld.png" },
        { "name": "Path of Exile", "image": "/imgs/categories/Path of Exile.png" },
        { "name": "Perfect World", "image": "/imgs/categories/Perfect World.png" },
        { "name": "PES", "image": "/imgs/categories/PES.png" },
        { "name": "Playstation", "image": "/imgs/categories/Playstation.png" },
        { "name": "Point Blank", "image": "/imgs/categories/Point Blank.png" },
        { "name": "Pokemon GO", "image": "/imgs/categories/Pokemon GO.png" },
        { "name": "Pokemon Unite", "image": "/imgs/categories/Pokemon Unite.png" },
        { "name": "PokeXGames", "image": "/imgs/categories/PokeXGames.png" },
        { "name": "Priston Tale", "image": "/imgs/categories/Priston Tale.png" },
        { "name": "PUBG", "image": "/imgs/categories/PUBG.png" },
        { "name": "Ragnarok", "image": "/imgs/categories/Ragnarok.png" },
        { "name": "Rainbow Six", "image": "/imgs/categories/Rainbow Six.png" },
        { "name": "Ravendawn", "image": "/imgs/categories/Ravendawn.png" },
        { "name": "Red Dead Online", "image": "/imgs/categories/Red Dead Online.png" },

        { "name": "Roblox", "image": "/imgs/categories/Roblox.png" },
        { "name": "Rocket League", "image": "/imgs/categories/Rocket League.png" },
        { "name": "Rucoy Online", "image": "/imgs/categories/Rucoy Online.png" },
        { "name": "Runescape", "image": "/imgs/categories/Runescape.png" },
        { "name": "Rush Royale", "image": "/imgs/categories/Rush Royale.png" },
        { "name": "Saint Seiya Awakening", "image": "/imgs/categories/Saint Seiya Awakening.png" },
        { "name": "Seafight", "image": "/imgs/categories/Seafight.png" },
        { "name": "Seven Deadly Sins", "image": "/imgs/categories/Seven Deadly Sins.png" },
        { "name": "Smite", "image": "/imgs/categories/Smite.png" },
        { "name": "Standoff 2", "image": "/imgs/categories/Standoff 2.png" },
        { "name": "Steam", "image": "/imgs/categories/Steam.png" },
        { "name": "Stumble Guys", "image": "/imgs/categories/Stumble Guys.png" },
        { "name": "Subway Surfers", "image": "/imgs/categories/Subway Surfers.png" },
        { "name": "Summoners War", "image": "/imgs/categories/Summoners War.png" },
        { "name": "Tibia", "image": "/imgs/categories/Tibia.png" },
        { "name": "Tower of Fantasy", "image": "/imgs/categories/Tower of Fantasy.png" },
        { "name": "Transformice", "image": "/imgs/categories/Transformice.png" },
        { "name": "Ubisoft", "image": "/imgs/categories/Ubisoft.png" },
        { "name": "Valorant", "image": "/imgs/categories/Valorant.png" },
        { "name": "Wakfu", "image": "/imgs/categories/Wakfu.png" },
        { "name": "Warface", "image": "/imgs/categories/Warface.png" },
        { "name": "Warframe", "image": "/imgs/categories/Warframe.png" },
        { "name": "Warspear", "image": "/imgs/categories/Warspear.png" },
        { "name": "With Your Destiny", "image": "/imgs/categories/With Your Destiny.png" },
        { "name": "World of Tanks", "image": "/imgs/categories/World of Tanks.png" },
        { "name": "World of Warcraft", "image": "/imgs/categories/World of Warcraft.png" },
        { "name": "Xbox", "image": "/imgs/categories/Xbox.png" },
        { "name": "Outros Jogos", "image": "/imgs/categories/Outros Jogos.png" },
        { "name": "Sugerir Jogo", "image": "/imgs/bull/icone.png" },

    ]

    const others = [
        { "name": "Criptomoedas e NFT", "image": "https://th.bing.com/th/id/R.46afadddcc08be483a971581981f2b04?rik=5zZqzokQPvp5Ww&riu=http%3a%2f%2fstore-images.s-microsoft.com%2fimage%2fapps.17518.9007199266525906.711fe06b-31fe-48b3-85b2-9147c65d66ce.8e1c2c26-16e6-413b-926e-b785d38b915a&ehk=FJgCYuMHrIquhx9LbTCEvce5QbFloAQ8SsjBlH0T1ys%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Assinaturas e Premium", "image": "https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003" },
        { "name": "Emails", "image": "https://th.bing.com/th/id/R.5325dd3e2e9e014060752a1dc40f7027?rik=anVZXWRbZbY6JA&pid=ImgRaw&r=0" },
        { "name": "Discord", "image": "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" },
        { "name": "Gift Cards", "image": "https://static.vecteezy.com/system/resources/previews/022/484/501/original/google-play-store-icon-logo-symbol-free-png.png" },
        { "name": "Redes Sociais", "image": "https://th.bing.com/th/id/R.cc86a3353385063cc55b2675261f87d8?rik=yktDKaDmO08LXg&pid=ImgRaw&r=0" },
        { "name": "Serviços Digitais", "image": "" },
        { "name": "Softwares e Licenças", "image": "https://th.bing.com/th/id/R.5d11a8c34d6896da7660200637fccc76?rik=OsrU52SK1JpTQg&pid=ImgRaw&r=0" },
        { "name": "Apostas", "image": "https://th.bing.com/th/id/R.1766fe9dbd7d016d03bff30f8ffdd154?rik=1LD%2ftaV0C96w2g&pid=ImgRaw&r=0" },
        { "name": "eBooks", "image": "" },
        { "name": "Doações", "image": "" },
        { "name": "Outros", "image": "" },
    ]


    return (
        <div className="relative flex items-center justify-center">
            <div onClick={() => { setOpen(!open) }} className="h-full flex items-center justify-center text-stone-500 dark:text-stone-400 hover:dark:text-stone-100 px-6 cursor-pointer">
                <span>
                    Categorias
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="ml-2 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>

            {open &&
                <div className="overflow-auto h-[calc(100%-120px)] left-5 md:left-10 top-20 mr-40 fixed w-[calc(100%-40px)] md:w-[calc(100%-80px)] border dark:border-stone-700 bg-white dark:bg-stone-950 rounded-xl">

                    <div className="w-full flex items-center h-16 border-b dark:border-b-stone-800 rounded-t-xl hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-400">Outros</span>
                    </div>

                    <div className="font-ibm flex flex-wrap pb-6 pt-6 items-center justify-center">
                        {others.map((other, index) => {
                            return (
                                <div className="w-72 relative h-14 p-3 hover:bg-stone-50 border border-transparent dark:hover:border-stone-700 hover:border-stone-300 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-lg">

                                    <div className="w-10 h-10 rounded-lg">
                                        {other.image ?
                                            < img src={other.image} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-stone-600 dark:text-stone-400 rounded-md object-cover" />
                                            :
                                            null
                                        }
                                    </div>

                                    <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">{other.name}</span>
                                </div>
                            )
                        })}
                    </div>


                    <div className="w-full flex items-center h-16 border-b border-t dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-400">Jogos</span>
                    </div>

                    <div className="font-ibm flex flex-wrap pb-6 pt-6 items-center justify-center">

                        {games.map((game, index) => {
                            return (
                                <div className="w-72 relative h-14 p-3 hover:bg-stone-50 border border-transparent dark:hover:border-stone-700 hover:border-stone-300 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-lg">
                                    <img src={game.image} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-stone-600 dark:text-stone-400 rounded-md object-cover">
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