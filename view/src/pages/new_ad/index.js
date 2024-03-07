import { useEffect, useState, useContext } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InformationAd from "../../components/info_ad";
import Breadcrumbs from "../../templates/breadcrumbs";
import Container from "../../templates/container";

import Timeline from "../../templates/timeline";
import Buttons from "../../templates/buttons";
import Team from "../../templates/team";
import FAQ from "../../components/faq";

import UserContext from "../../context";
import Options from "../../templates/options";
import Select from "../../templates/select";

export default function NewAd(props) {

    const { user } = useContext(UserContext);


    const [ad, setAd] = useState({});
    const [type, setType] = useState(1);

    useEffect(() => {
        document.scrollingElement.scrollTop = 0;
    }, [])


    const convertBase64 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setAd({ ...ad, image: reader.result })
        };
    };


    const maskCoin = (event) => {
        const onlyDigits = event.target.value
            .split("")
            .filter(s => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        return maskCurrency(digitsFloat);
    }

    const maskCurrency = (valor, locale = 'pt-BR', currency = 'BRL') => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency
        }).format(valor)
    }

    const categories = [
        { "label": "Criptomoedas e NFT", "value": "criptomoedas_e_nft", "image": "https://th.bing.com/th/id/R.46afadddcc08be483a971581981f2b04?rik=5zZqzokQPvp5Ww&riu=http%3a%2f%2fstore-images.s-microsoft.com%2fimage%2fapps.17518.9007199266525906.711fe06b-31fe-48b3-85b2-9147c65d66ce.8e1c2c26-16e6-413b-926e-b785d38b915a&ehk=FJgCYuMHrIquhx9LbTCEvce5QbFloAQ8SsjBlH0T1ys%3d&risl=&pid=ImgRaw&r=0" },
        { "label": "Assinaturas e Premium", "value": "assinaturas_e_premium", "image": "https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003" },
        { "label": "Emails", "value": "emails", "image": "https://th.bing.com/th/id/R.5325dd3e2e9e014060752a1dc40f7027?rik=anVZXWRbZbY6JA&pid=ImgRaw&r=0" },
        { "label": "Discord", "value": "discord", "image": "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" },
        { "label": "Gift Cards", "value": "gift_cards", "image": "https://static.vecteezy.com/system/resources/previews/022/484/501/original/google-play-store-icon-logo-symbol-free-png.png" },
        { "label": "Redes Sociais", "value": "redes_sociais", "image": "https://th.bing.com/th/id/R.cc86a3353385063cc55b2675261f87d8?rik=yktDKaDmO08LXg&pid=ImgRaw&r=0" },
        { "label": "Serviços Digitais", "value": "servicos_digitais", "image": "" },
        { "label": "Softwares e Licenças", "value": "softwares_e_licencas", "image": "https://th.bing.com/th/id/R.5d11a8c34d6896da7660200637fccc76?rik=OsrU52SK1JpTQg&pid=ImgRaw&r=0" },
        { "label": "Apostas", "value": "apostas", "image": "https://th.bing.com/th/id/R.1766fe9dbd7d016d03bff30f8ffdd154?rik=1LD%2ftaV0C96w2g&pid=ImgRaw&r=0" },
        { "label": "eBooks", "value": "ebooks", "image": "" },
        { "label": "Doações", "value": "doacoes", "image": "" },
        { "label": "Outros", "value": "outros", "image": "" },
        { "label": "8 Ball Pool", "value": "8_ball_pool", "image": "/imgs/categories/8 Ball Pool.png" },
        { "label": "A3: Still Alive", "value": "a3:_still_alive", "image": "/imgs/categories/A3 Still Alive.png" },
        { "label": "Adventure Quest World", "value": "adventure_quest_world", "image": "/imgs/categories/Adventure Quest World.png" },
        { "label": "Aika", "value": "aika", "image": "/imgs/categories/Aika.png" },
        { "label": "Aion", "value": "aion", "image": "/imgs/categories/Aion.png" },
        { "label": "Albion Online", "value": "albion_online", "image": "/imgs/categories/Albion Online.png" },
        { "label": "Apex Legends", "value": "apex_legends", "image": "/imgs/categories/Apex Legends.png" },
        { "label": "Avakin Life", "value": "avakin_life", "image": "/imgs/categories/Avakin Life.png" },
        { "label": "Black Clover Mobile", "value": "black_clover_mobile", "image": "/imgs/categories/Black Clover Mobile.png" },
        { "label": "Black Desert", "value": "black_desert", "image": "/imgs/categories/Black Desert.png" },
        { "label": "Blade and Soul", "value": "blade_and_soul", "image": "/imgs/categories/Blade and Soul.png" },
        { "label": "Brawl Stars", "value": "brawl_stars", "image": "/imgs/categories/Brawl Stars.png" },
        { "label": "Brawlhalla", "value": "brawlhalla", "image": "/imgs/categories/Brawlhalla.png" },
        { "label": "Cabal Online", "value": "cabal_online", "image": "/imgs/categories/Cabal Online.png" },
        { "label": "Call of Duty", "value": "call_of_duty", "image": "/imgs/categories/Call of Duty.png" },
        { "label": "Clash of Clans", "value": "clash_of_clans", "image": "/imgs/categories/Clash of Clans.png" },
        { "label": "Clash Royale", "value": "clash_royale", "image": "/imgs/categories/Clash Royale.png" },
        { "label": "Coin Master", "value": "coin_master", "image": "/imgs/categories/Coin Master.png" },
        { "label": "Combat Arms", "value": "combat_arms", "image": "/imgs/categories/Combat Arms.png" },
        { "label": "Counter Strike", "value": "counter_strike", "image": "/imgs/categories/Counter Strike.png" },
        { "label": "Crossfire", "value": "crossfire", "image": "/imgs/categories/Crossfire.png" },
        { "label": "Dark and Darker", "value": "dark_and_darker", "image": "/imgs/categories/Dark and Darker.png" },
        { "label": "DDTank", "value": "ddtank", "image": "/imgs/categories/DDTank.png" },
        { "label": "Dead by Daylight", "value": "dead_by_daylight", "image": "/imgs/categories/Dead by Daylight.png" },
        { "label": "Diablo Immortal", "value": "diablo_immortal", "image": "/imgs/categories/Diablo Immortal.png" },
        { "label": "Diablo IV", "value": "diablo_iv", "image": "/imgs/categories/Diablo IV.png" },
        { "label": "Digimon Masters Online", "value": "digimon_masters_online", "image": "/imgs/categories/Digimon Masters Online.png" },
        { "label": "Dofus", "value": "dofus", "image": "/imgs/categories/Dofus.png" },
        { "label": "DOTA 2", "value": "dota_2", "image": "/imgs/categories/DOTA 2.png" },
        { "label": "Dragon Ball Legends", "value": "dragon_ball_legends", "image": "/imgs/categories/Dragon Ball Legends.png" },
        { "label": "Dragon City Mobile", "value": "dragon_city_mobile", "image": "/imgs/categories/Dragon City Mobile.png" },
        { "label": "Elden Ring", "value": "elden_ring", "image": "/imgs/categories/Elden Ring.png" },
        { "label": "Epic Games", "value": "epic_games", "image": "/imgs/categories/Epic Games.png" },
        { "label": "Epic Seven", "value": "epic_seven", "image": "/imgs/categories/Epic Seven.png" },
        { "label": "Escape from Tarkov", "value": "escape_from_tarkov", "image": "/imgs/categories/Escape from Tarkov.png" },
        { "label": "Farlight 84", "value": "farlight_84", "image": "/imgs/categories/Farlight 84.png" },
        { "label": "FIFA", "value": "fifa", "image": "/imgs/categories/FIFA.png" },
        { "label": "For Honor", "value": "for_honor", "image": "/imgs/categories/For Honor.png" },
        { "label": "Fortnite", "value": "fortnite", "image": "/imgs/categories/Fortnite.png" },
        { "label": "Forza Horizon", "value": "forza_horizon", "image": "/imgs/categories/Forza Horizon.png" },
        { "label": "Free Fire", "value": "free_fire", "image": "/imgs/categories/Free Fire.png" },
        { "label": "Genshin Impact", "value": "genshin_impact", "image": "/imgs/categories/Genshin Impact.png" },
        { "label": "GOG", "value": "gog", "image": "/imgs/categories/GOG.png" },
        { "label": "Grand Chase", "value": "grand_chase", "image": "/imgs/categories/Grand Chase.png" },
        { "label": "Grand Fantasia", "value": "grand_fantasia", "image": "/imgs/categories/Grand Fantasia.png" },
        { "label": "GTA", "value": "gta", "image": "/imgs/categories/GTA.png" },
        { "label": "Guild Wars 2", "value": "guild_wars_2", "image": "/imgs/categories/Guild Wars 2.png" },
        { "label": "Habbo", "value": "habbo", "image": "/imgs/categories/Habbo.png" },
        { "label": "Hay Day", "value": "hay_day", "image": "/imgs/categories/Hay Day.png" },
        { "label": "Heartwood Online", "value": "heartwood_online", "image": "/imgs/categories/Heartwood Online.png" },
        { "label": "Honkai Impact", "value": "honkai_impact", "image": "/imgs/categories/Honkai Impact.png" },
        { "label": "Honkai: Star Rail", "value": "honkai_star_rail", "image": "/imgs/categories/Honkai Star Rail.png" },
        { "label": "Honor of Kings", "value": "honor_of_kings", "image": "/imgs/categories/Honor of Kings.png" },
        { "label": "Icarus Online", "value": "icarus_online", "image": "/imgs/categories/Icarus Online.png" },
        { "label": "IMVU", "value": "imvu", "image": "/imgs/categories/IMVU.png" },
        { "label": "Kakele Online", "value": "kakele_online", "image": "/imgs/categories/Kakele Online.png" },
        { "label": "League of Legends", "value": "league_of_legends", "image": "/imgs/categories/League of Legends.png" },
        { "label": "League of Legends: Wild Rift", "value": "league_of_legends_wild_rift", "image": "/imgs/categories/League of Legends Wild Rift.png" },
        { "label": "Legend Online", "value": "legend_online", "image": "/imgs/categories/Legend Online.png" },
        { "label": "Legends of Runeterra", "value": "legends_of_runeterra", "image": "/imgs/categories/Legends of Runeterra.png" },
        { "label": "Lords Mobile", "value": "lords_mobile", "image": "/imgs/categories/Lords Mobile.png" },
        { "label": "Lost Ark", "value": "lost_ark", "image": "/imgs/categories/Lost Ark.png" },
        { "label": "Magic The Gathering", "value": "magic_the_gathering", "image": "/imgs/categories/Magic The Gathering.png" },
        { "label": "Metin 2", "value": "metin_2", "image": "/imgs/categories/Metin 2.png" },
        { "label": "Minecraft", "value": "minecraft", "image": "/imgs/categories/Minecraft.png" },
        { "label": "MIR4", "value": "mir4", "image": "/imgs/categories/MIR4.png" },
        { "label": "Mobile Legends", "value": "mobile_legends", "image": "/imgs/categories/Mobile Legends.png" },
        { "label": "MU Legend", "value": "mu_legend", "image": "/imgs/categories/MU Legend.png" },
        { "label": "MU Online", "value": "mu_online", "image": "/imgs/categories/MU Online.png" },
        { "label": "My Hero Academia", "value": "my_hero_academia", "image": "/imgs/categories/My Hero Academia.png" },
        { "label": "Naruto Online", "value": "naruto_online", "image": "/imgs/categories/Naruto Online.png" },
        { "label": "New World", "value": "new_world", "image": "/imgs/categories/New World.png" },
        { "label": "Ni No Kuni", "value": "ni_no_kuni", "image": "/imgs/categories/Ni No Kuni.png" },
        { "label": "Noahs Heart", "value": "noahs_heart", "image": "/imgs/categories/Noahs Heart.png" },
        { "label": "Origin", "value": "origin", "image": "/imgs/categories/Origin.png" },
        { "label": "Overwatch", "value": "overwatch", "image": "/imgs/categories/Overwatch.png" },
        { "label": "Palworld", "value": "palworld", "image": "/imgs/categories/Palworld.png" },
        { "label": "Path of Exile", "value": "path_of_exile", "image": "/imgs/categories/Path of Exile.png" },
        { "label": "Perfect World", "value": "perfect_world", "image": "/imgs/categories/Perfect World.png" },
        { "label": "PES", "value": "pes", "image": "/imgs/categories/PES.png" },
        { "label": "Playstation", "value": "playstation", "image": "/imgs/categories/Playstation.png" },
        { "label": "Point Blank", "value": "point_blank", "image": "/imgs/categories/Point Blank.png" },
        { "label": "Pokemon GO", "value": "pokemon_go", "image": "/imgs/categories/Pokemon GO.png" },
        { "label": "Pokemon Unite", "value": "pokemon_unite", "image": "/imgs/categories/Pokemon Unite.png" },
        { "label": "PokeXGames", "value": "pokexgames", "image": "/imgs/categories/PokeXGames.png" },
        { "label": "Priston Tale", "value": "priston_tale", "image": "/imgs/categories/Priston Tale.png" },
        { "label": "PUBG", "value": "pubg", "image": "/imgs/categories/PUBG.png" },
        { "label": "Ragnarok", "value": "ragnarok", "image": "/imgs/categories/Ragnarok.png" },
        { "label": "Rainbow Six", "value": "rainbow_six", "image": "/imgs/categories/Rainbow Six.png" },
        { "label": "Ravendawn", "value": "ravendawn", "image": "/imgs/categories/Ravendawn.png" },
        { "label": "Red Dead Online", "value": "red_dead_online", "image": "/imgs/categories/Red Dead Online.png" },
        { "label": "Roblox", "value": "roblox", "image": "/imgs/categories/Roblox.png" },
        { "label": "Rocket League", "value": "rocket_league", "image": "/imgs/categories/Rocket League.png" },
        { "label": "Rucoy Online", "value": "rucoy_online", "image": "/imgs/categories/Rucoy Online.png" },
        { "label": "Runescape", "value": "runescape", "image": "/imgs/categories/Runescape.png" },
        { "label": "Rush Royale", "value": "rush_royale", "image": "/imgs/categories/Rush Royale.png" },
        { "label": "Saint Seiya Awakening", "value": "saint_seiya_awakening", "image": "/imgs/categories/Saint Seiya Awakening.png" },
        { "label": "Seafight", "value": "seafight", "image": "/imgs/categories/Seafight.png" },
        { "label": "Seven Deadly Sins", "value": "seven_deadly_sins", "image": "/imgs/categories/Seven Deadly Sins.png" },
        { "label": "Smite", "value": "smite", "image": "/imgs/categories/Smite.png" },
        { "label": "Standoff 2", "value": "standoff_2", "image": "/imgs/categories/Standoff 2.png" },
        { "label": "Steam", "value": "steam", "image": "/imgs/categories/Steam.png" },
        { "label": "Stumble Guys", "value": "stumble_guys", "image": "/imgs/categories/Stumble Guys.png" },
        { "label": "Subway Surfers", "value": "subway_surfers", "image": "/imgs/categories/Subway Surfers.png" },
        { "label": "Summoners War", "value": "summoners_war", "image": "/imgs/categories/Summoners War.png" },
        { "label": "Tibia", "value": "tibia", "image": "/imgs/categories/Tibia.png" },
        { "label": "Tower of Fantasy", "value": "tower_of_fantasy", "image": "/imgs/categories/Tower of Fantasy.png" },
        { "label": "Transformice", "value": "transformice", "image": "/imgs/categories/Transformice.png" },
        { "label": "Ubisoft", "value": "ubisoft", "image": "/imgs/categories/Ubisoft.png" },
        { "label": "Valorant", "value": "valorant", "image": "/imgs/categories/Valorant.png" },
        { "label": "Wakfu", "value": "wakfu", "image": "/imgs/categories/Wakfu.png" },
        { "label": "Warface", "value": "warface", "image": "/imgs/categories/Warface.png" },
        { "label": "Warframe", "value": "warframe", "image": "/imgs/categories/Warframe.png" },
        { "label": "Warspear", "value": "warspear", "image": "/imgs/categories/Warspear.png" },
        { "label": "With Your Destiny", "value": "with_your_destiny", "image": "/imgs/categories/With Your Destiny.png" },
        { "label": "World of Tanks", "value": "world_of_tanks", "image": "/imgs/categories/World of Tanks.png" },
        { "label": "World of Warcraft", "value": "world_of_warcraft", "image": "/imgs/categories/World of Warcraft.png" },
        { "label": "Xbox", "value": "xbox", "image": "/imgs/categories/Xbox.png" },
        { "label": "Outros Jogos", "value": "outros_jogos", "image": "/imgs/categories/Outros Jogos.png" },
        { "label": "Sugerir Jogo", "value": "sugerir_jogo", "image": "/imgs/bull/icone.png" }
    ];
    

    return (
        <div className="bg-white dark:bg-stone-950 overflow-x-hidden">

            <Header />

            <Container className="w-full md:w-[calc(100%-326px)] min-h-screen">

                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Projeto', path: '/ad' }, { title: 'Novo Projeto', path: '/ad/new' }]} />
                <InformationAd type="new" ad={ad} setAd={setAd} user={user} />


                <div className="w-full mt-4 flex flex-col">

                    <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">Anúncio</span>

                    <div className="flex flex-col">
                        <span className="font-ibm text-xs text-stone-600">Titulo do anúncio</span>

                        <input onChange={(e) => { setAd({ ...ad, title: e.target.value }) }} placeholder="Digite o titulo do anúncio" className="border dark:border-stone-700 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600" />
                    </div>

                    <div className="flex flex-col mt-4 ">
                        <span className="font-ibm text-xs text-stone-600">Descrição</span>
                        <textarea onChange={(e) => { setAd({ ...ad, description: e.target.value }) }} placeholder="Digite a descrição do anúncio" className="border dark:border-stone-700 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 xl:h-36 xl:overflow-auto font-ibm text-lg text-stone-700 dark:text-stone-400 outline-none resize-none dark:placeholder:text-stone-600" />

                    </div>

                </div>


                <div className="w-full flex flex-col mt-6">

                    <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">Tipo do Anúncio</span>

                    <Options setType={setType} type={type} />

                </div>

                <div className="w-full flex flex-col mt-6">
                    <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">Informações do Anúncio</span>

                    <div className="flex flex-col">
                        <span className="font-ibm text-xs text-stone-600">Valor do anúncio</span>

                        <input value={ad?.price} onChange={(e) => {
                            setAd({ ...ad, unprice: e.target.value })
                            var value = maskCoin(e)
                            setAd({ ...ad, price: value })
                        }} className="border dark:border-stone-700 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600" />
                    </div>

                    <div className="flex flex-col mt-5">
                        <span className="font-ibm text-xs text-stone-600">Quantidade em estoque</span>

                        <input onChange={(e) => { setAd({ ...ad, qtd: e.target.value }) }} className="border dark:border-stone-700 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600" />
                    </div>

                    <div className="flex flex-col mt-5">
                        <span className="font-ibm text-xs text-stone-600">Categoria</span>

                        <Select onChange={(e) => { setAd({ ...ad, category }) }} options={categories} />
                    </div>

                    <div className="mt-10 border dark:border-stone-700 h-56 object-cover rounded-xl flex items-center justify-center cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-900 text-stone-500 text-lg relative">
                        <input id="file" type="file" className="absolute w-full h-full hidden" onChange={(e) => { convertBase64(e) }} />
                        <label for="file" className="cursor-pointer absolute w-full h-full flex items-center justify-center" />

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-4">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                        </svg>
                        <span>Adicionar imagem</span>
                    </div>

                </div>

            </Container>
            <Footer />
        </div>
    )
    
}