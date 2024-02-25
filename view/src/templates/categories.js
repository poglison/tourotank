import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../context";
import { useContext } from "react";

export default function Categories() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const games = [
        { "name": "8 Ball Pool", "image": "imgs/categories/8 Ball Pool.png" },
        { "name": "A3: Still Alive", "image": "imgs/categories/A3 Still Alive.png" },
        { "name": "Adventure Quest World", "image": "imgs/categories/Adventure Quest World.png" },
        { "name": "Aika", "image": "imgs/categories/Aika.png" },
        { "name": "Aion", "image": "imgs/categories/Aion.png" },
        { "name": "Albion Online", "image": "imgs/categories/Albion Online.png" },
        { "name": "Apex Legends", "image": "imgs/categories/Apex Legends.png" },
        { "name": "Avakin Life", "image": "imgs/categories/Avakin Life.png" },
        { "name": "Black Clover Mobile", "image": "imgs/categories/Black Clover Mobile.png" },
        { "name": "Black Desert", "image": "imgs/categories/Black Desert.png" },
        { "name": "Blade and Soul", "image": "imgs/categories/Blade and Soul.png" },
        { "name": "Brawl Stars", "image": "imgs/categories/Brawl Stars.png" },
        { "name": "Brawlhalla", "image": "imgs/categories/Brawlhalla.png" },
        { "name": "Cabal Online", "image": "imgs/categories/Cabal Online.png" },
        { "name": "Call of Duty", "image": "imgs/categories/Call of Duty.png" },
        { "name": "Clash of Clans", "image": "imgs/categories/Clash of Clans.png" },
        { "name": "Clash Royale", "image": "imgs/categories/Clash Royale.png" },
        { "name": "Coin Master", "image": "imgs/categories/Coin Master.png" },
        { "name": "Combat Arms", "image": "imgs/categories/Combat Arms.png" },
        { "name": "Counter Strike", "image": "imgs/categories/Counter Strike.png" },
        { "name": "Crossfire", "image": "imgs/categories/Crossfire.png" },
        { "name": "Dark and Darker", "image": "imgs/categories/Dark and Darker.png" },
        { "name": "DDTank", "image": "imgs/categories/DDTank.png" },
        { "name": "Dead by Daylight", "image": "imgs/categories/Dead by Daylight.png" },
        { "name": "Diablo Immortal", "image": "imgs/categories/Diablo Immortal.png" },
        { "name": "Diablo IV", "image": "imgs/categories/Diablo IV.png" },
        { "name": "Digimon Masters Online", "image": "imgs/categories/Digimon Masters Online.png" },
        { "name": "Dofus", "image": "imgs/categories/Dofus.png" },
        { "name": "DOTA 2", "image": "imgs/categories/DOTA 2.png" },
        { "name": "Dragon Ball Legends", "image": "imgs/categories/Dragon Ball Legends.png" },

        { "name": "Dragon City Mobile", "image": "imgs/categories/Dragon City Mobile.png" },
        { "name": "Epic Games", "image": "imgs/categories/Epic Games.png" },
        { "name": "Epic Seven", "image": "imgs/categories/Epic Seven.png" },
        { "name": "Escape from Tarkov", "image": "imgs/categories/Escape from Tarkov.png" },
        { "name": "Farlight 84", "image": "imgs/categories/Farlight 84.png" },
        { "name": "FIFA", "image": "imgs/categories/FIFA.png" },
        { "name": "For Honor", "image": "imgs/categories/For Honor.png" },
        { "name": "Fortnite", "image": "imgs/categories/Fortnite.png" },
        { "name": "Forza Horizon", "image": "imgs/categories/Forza Horizon.png" },
        { "name": "Free Fire", "image": "imgs/categories/Free Fire.png" },
        { "name": "Genshin Impact", "image": "imgs/categories/Genshin Impact.png" },
        { "name": "GOG", "image": "imgs/categories/GOG.png" },
        { "name": "Grand Chase", "image": "imgs/categories/Grand Chase.png" },
        { "name": "Grand Fantasia", "image": "imgs/categories/Grand Fantasia.png" },
        { "name": "GTA", "image": "imgs/categories/GTA.png" },
        { "name": "Guild Wars 2", "image": "imgs/categories/Guild Wars 2.png" },
        { "name": "Habbo", "image": "imgs/categories/Habbo.png" },
        { "name": "Hay Day", "image": "imgs/categories/Hay Day.png" },
        { "name": "Heartwood Online", "image": "imgs/categories/Heartwood Online.png" },
        { "name": "Honkai Impact", "image": "imgs/categories/Honkai Impact.png" },
        { "name": "Honkai: Star Rail", "image": "imgs/categories/Honkai Star Rail.png" },
        { "name": "Honor of Kings", "image": "imgs/categories/Honor of Kings.png" },
        { "name": "Icarus Online", "image": "imgs/categories/Icarus Online.png" },
        { "name": "IMVU", "image": "imgs/categories/IMVU.png" },
        { "name": "Kakele Online", "image": "imgs/categories/Kakele Online.png" },
        { "name": "League of Legends", "image": "imgs/categories/League of Legends.png" },
        { "name": "League of Legends: Wild Rift", "image": "imgs/categories/League of Legends Wild Rift.png" },
        { "name": "Legend Online", "image": "imgs/categories/Legend Online.png" },
        { "name": "Legends of Runeterra", "image": "imgs/categories/Legends of Runeterra.png" },

        { "name": "Lords Mobile", "image": "https://lh3.googleusercontent.com/Wu1r-8NOJB30zU8z8iga33irXFFLnyEFmDgjYLPTfrE1yVaLLNnxgWUqMRk7SjK8fupM=w300" },
        { "name": "Lost Ark", "image": "https://th.bing.com/th/id/OIP.7cTHAcEsAGkUsmYtXZCjZwHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Magic The Gathering", "image": "https://cdn11.bigcommerce.com/s-fg272t4iw0/images/stencil/500x659/products/5186/5439/C-15233__84973.1557817126.jpg?c=2" },
        { "name": "Metin 2", "image": "https://pbs.twimg.com/profile_images/915889465998102528/f_H2JPRA_400x400.jpg" },
        { "name": "Minecraft", "image": "https://th.bing.com/th/id/R.9cb1d1a9eb6575147d6990e2700fb75c?rik=EAV4QVg5mVXELA&pid=ImgRaw&r=0" },
        { "name": "MIR4", "image": "https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/70/a8/e3/70a8e34a-8e9b-831d-8aa5-83bdbd2a9842/source/512x512bb.jpg" },
        { "name": "Mobile Legends", "image": "https://th.bing.com/th/id/R.b4a89ea961cd76b53e171dad85d369d4?rik=Y%2fFrPSPkwHlwDA&pid=ImgRaw&r=0" },
        { "name": "MU Legend", "image": "https://th.bing.com/th/id/OIP.Wp3fOj44yrzo9WrVBftAMAHaHa?rs=1&pid=ImgDetMain" },
        { "name": "MU Online", "image": "https://th.bing.com/th/id/R.be55e652df12e61fbd95778d779ea8a0?rik=gJe5n6zpbYFXlQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-XNSud0BBcVU%2fTyrrw3UTsWI%2fAAAAAAAAAyc%2fcj-uoEbha5M%2fs1600%2fMuonline%2bLogo%2b1.png&ehk=MmSlyFTlAzsKi14XRYPgzuthx8wKX%2fnyJT77yqGJ%2fxs%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "My Hero Academia", "image": "https://i.pinimg.com/736x/9d/22/d2/9d22d2659fb899bb226a315ec6c659bd.jpg" },
        { "name": "Naruto Online", "image": "https://i.vimeocdn.com/portrait/6747767_640x640" },
        { "name": "New World", "image": "https://th.bing.com/th/id/OIP.rIiUjRGXKf-9D3N6L4FoGAHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Ni No Kuni", "image": "https://th.bing.com/th/id/OIP.ArE2uCxwlUFhvk9kASQ2zwHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Noahs Heart", "image": "https://www.gamegrin.com/assets/game/noahs-heart/logos/noahs-heart-logos-1.png" },
        { "name": "Origin", "image": "https://th.bing.com/th/id/R.68406dde13963e4c150bf8fd68090b06?rik=1VY61L2y6FEfDg&pid=ImgRaw&r=0" },
        { "name": "Overwatch", "image": "https://res.cloudinary.com/teepublic/image/private/s--dzAEC90f--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1488911584/production/designs/1298385_1.jpg" },
        { "name": "Palworld", "image": "https://img.gamewith.net/assets/images/games/icons/1a2b46487f112da7a25685e844d0fc4e.png" },
        { "name": "Path of Exile", "image": "https://th.bing.com/th/id/OIP.6YZtIYjaRUKNmClcXcmz5gAAAA?rs=1&pid=ImgDetMain" },
        { "name": "Perfect World", "image": "https://mobimg.b-cdn.net/v2/fetch/59/59d8f5a2b021d2006cbdcd98e203db7f.png" },
        { "name": "PES", "image": "https://cdn-icons-png.flaticon.com/512/588/588274.png" },
        { "name": "Playstation", "image": "https://yt3.googleusercontent.com/j6v2yAsxFSWpoTEwyBrBojCjDsztU5CejyLAEbu6GIrt5A6OUoJxLuacuQblrYz9lmBGrdpxZZ4=s900-c-k-c0x00ffffff-no-rj" },
        { "name": "Point Blank", "image": "https://th.bing.com/th/id/R.e147df22ae4f6af637a4c66fcfcc015b?rik=YZRFjSePLxEwNg&riu=http%3a%2f%2fimages.sftcdn.net%2fimages%2ft_optimized%2cf_auto%2fp%2f7f6c69ec-96d0-11e6-a38e-00163ed833e7%2f3800438192%2fpoint-blank-logo.png&ehk=2dnGbgTPguSupvXQ9YdQN%2fTq%2ffjNrxSt%2b37llEMnfPQ%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Pokemon GO", "image": "https://www.pikpng.com/pngl/b/53-533826_pokemon-go-icon-png-pokemon-go-custom-icon.png" },
        { "name": "Pokemon Unite", "image": "https://th.bing.com/th/id/OIP.KfDdPN0bObSWxxacBLwsFgAAAA?rs=1&pid=ImgDetMain" },
        { "name": "PokeXGames", "image": "https://yt3.ggpht.com/a/AATXAJw1nZb51IUYj9IT1oAfWFfTqcoEIE8M8VFrLg=s900-c-k-c0xffffffff-no-rj-mo" },
        { "name": "Priston Tale", "image": "https://www.mmos.com.br/f/2016/01/Priston-Tale-7-600x600.jpg" },
        { "name": "PUBG", "image": "https://2.bp.blogspot.com/-qAt0q1wBaHI/XH6E1SHY_1I/AAAAAAAAAXw/PC0cgt4so0U9UD2h1AmuPzUqmPuTEjJ_QCKgBGAs/w2248-h2248-p-k-no-nu/pubg-playerunknowns-battlegrounds-explosion-98.jpg" },
        { "name": "Ragnarok", "image": "https://images.hive.blog/DQmT5duhWJC3cn1WJe7qjPu3CK2qGJTCBRLyJJkXN24ER6k/ragnarok%20logo.png" },
        { "name": "Rainbow Six", "image": "https://th.bing.com/th/id/OIP.DJhRwWz96natK3XFweZU7AHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Ravendawn", "image": "https://www.giantbomb.com/a/uploads/square_small/127/1275141/3430929-ravendawn-image.jpg" },
        { "name": "Red Dead Online", "image": "https://th.bing.com/th/id/OIP.Ca60oyPDps5lqsTnP2kZwAHaHa?w=512&h=512&rs=1&pid=ImgDetMain" },
        { "name": "Roblox", "image": "https://th.bing.com/th/id/OIP.RGkadpPBEXG2eZKKwakqbgHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Rocket League", "image": "https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-1024.png" },
        { "name": "Rucoy Online", "image": "https://th.bing.com/th/id/R.c5245fdf926c4b50e32ff652bb0b8634?rik=H20LDgnHRlyucw&pid=ImgRaw&r=0&sres=1&sresct=1" },
        { "name": "Runescape", "image": "https://th.bing.com/th/id/OIP.Ywjcam8xcdNZ7jwTOPwFowHaHv?rs=1&pid=ImgDetMain" },
        { "name": "Rush Royale", "image": "https://th.bing.com/th/id/R.597d7195b761bf8f409ea19dc3bf60e2?rik=%2fv6eC7eW8eOWeQ&pid=ImgRaw&r=0" },
        { "name": "Saint Seiya Awakening", "image": "https://media.pocketgamer.com/artwork/na-34139-1651200415/saint-seiya-awakening.jpg" },
        { "name": "Seafight", "image": "https://th.bing.com/th/id/OIP.Kow9dK-pKYseeNPZ66ROwwHaHU?rs=1&pid=ImgDetMain" },
        { "name": "Seven Deadly Sins", "image": "https://th.bing.com/th/id/OIP.QWq6nsEEBucJob4yXSwFAwHaII?rs=1&pid=ImgDetMain" },
        { "name": "Smite", "image": "https://th.bing.com/th/id/R.059ba52a50be5fcccb30a9704fcf4e9f?rik=BICATBvy99EQnw&pid=ImgRaw&r=0" },
        { "name": "Standoff 2", "image": "https://th.bing.com/th/id/R.b3f8ec827d8d1e0f6f34c8b4e4615d76?rik=hwnkBbOH5%2b%2b0NA&riu=http%3a%2f%2fklubmama.ru%2fuploads%2fposts%2f2022-08%2f1661949249_29-klubmama-ru-p-podelki-standoff-2-foto-32.jpg&ehk=sBC5FRMdmRYGHCdNcbUysgIISMZO13ki%2bJh4074Z9kg%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Steam", "image": "https://th.bing.com/th/id/R.93a4a65e7693d8b1739c9fb203089801?rik=0SXpP4ELODKVDw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fSteam_icon_logo_logotype.png&ehk=Ya5ZQkkpV3rYH47HN9szTQIGNfhSUD5XF9CKYLZtQzc%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Stumble Guys", "image": "https://th.bing.com/th/id/OIP.O70rxO8mXrmYQZrOCrndkAHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Subway Surfers", "image": "https://th.bing.com/th/id/OIP.e0lkj3dn15lIFeL2r6jm5wHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Summoners War", "image": "https://th.bing.com/th/id/OIP.5wvFMMNbPl5pnblW8aQFrgHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Tibia", "image": "https://www.tibiawiki.com.br/images/7/76/Tibia_icon.png" },
        { "name": "Tower of Fantasy", "image": "https://styles.redditmedia.com/t5_49l0yy/styles/communityIcon_9l74a3loujt61.png?width=256&s=150a5906bcce4446e6acea0de1d2e40086dd063a" },
        { "name": "Transformice", "image": "https://best-free-games.de/wp-content/uploads/games/transformice/_thumb_200x200.png" },
        { "name": "Ubisoft", "image": "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/b0ec10166fcb5fd6d95ead1c3d735324/32/1024x1024.png" },
        { "name": "Valorant", "image": "https://img.icons8.com/color/452/valorant.png" },
        { "name": "Wakfu", "image": "https://yoolk.ninja/wp-content/uploads/2017/02/Apps-Wakfu.png" },
        { "name": "Warface", "image": "https://cdn2.iconfinder.com/data/icons/mixd/512/27_Warface-1024.png" },
        { "name": "Warframe", "image": "https://th.bing.com/th/id/R.9a4de73ca4ddcf62df6650f49880f855?rik=su17QAt9u9cm1Q&pid=ImgRaw&r=0" },
        { "name": "Warspear", "image": "https://th.bing.com/th/id/OIP.SCMINY6wGkyy9BrRrXoK0gHaHa?rs=1&pid=ImgDetMain" },
        { "name": "With Your Destiny", "image": "https://th.bing.com/th/id/R.708cc1803597c69789de2b05571db3f0?rik=s5WuFnh2BE8MRQ&riu=http%3a%2f%2fwww.game-hiroba.com%2fphoto%2foutline%2fg00043-3.jpg&ehk=7Y4c78UosmCi8yIzoOOWKki9CqJoi%2bx%2fM8wLVLWrbRw%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "World of Tanks", "image": "https://th.bing.com/th/id/R.ae7c3ac2e7301f5a71f0be4cd2f83592?rik=SprTka9wx2YyTQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f09%2fworld_of_tanks_red_Logo.png&ehk=%2fcqQDA6FyZWGzKpEyaxJXtg3NSvfFocT1pUoCpy%2fudM%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "World of Warcraft", "image": "https://logos-download.com/wp-content/uploads/2016/02/WOW_logo.png" },
        { "name": "Xbox", "image": "https://th.bing.com/th/id/R.851a746f7b3145942810bff7f03eaa8b?rik=vqjOG6e7m7P7OQ&pid=ImgRaw&r=0" },
        { "name": "Outros Jogos", "image": "https://th.bing.com/th/id/R.f9a513ff78897679e55878d9425c78fb?rik=KHD9KGMMrFDBpA&pid=ImgRaw&r=0" },
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
            <div onClick={() => { setOpen(!open) }} className="h-full flex items-center justify-center text-stone-800 dark:text-stone-400 hover:dark:text-stone-100 px-6 cursor-pointer">
                <span>
                    Categorias
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>

            {open &&
                <div className="overflow-auto h-[calc(100%-120px)] left-5 md:left-10 top-20 mr-40 fixed w-[calc(100%-40px)] md:w-[calc(100%-80px)] border-[1.5px] dark:border-stone-800 bg-white dark:bg-stone-950 rounded-xl">

                    <div className="w-full flex items-center h-16 border-b-[1.5px] dark:border-b-stone-800 rounded-t-xl hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-400">Outros</span>
                    </div>

                    <div className="font-ibm flex flex-wrap pb-6 pt-6 items-center justify-center">
                        {others.map((other, index) => {
                            return (
                                <div className="w-72 relative h-14 p-3 hover:bg-stone-50 border border-transparent dark:hover:border-stone-800 hover:border-stone-300 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-lg">

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


                    <div className="w-full flex items-center h-16 border-b-[1.5px] border-t-[1.5px] dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 p-4 cursor-pointer">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-400">Jogos</span>
                    </div>

                    <div className="font-ibm flex flex-wrap pb-6 pt-6 items-center justify-center">

                        {games.map((game, index) => {
                            return (
                                <div className="w-72 relative h-14 p-3 hover:bg-stone-50 border border-transparent dark:hover:border-stone-800 hover:border-stone-300 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-lg">
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