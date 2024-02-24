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
        { "name": "Adventure Quest World", "image": "https://assets-prd.ignimgs.com/2023/03/07/adventurequest-worlds-infinity-button-1678214843352.jpg" },
        { "name": "Aika", "image": "https://3.bp.blogspot.com/-ACMGNZeMLzQ/UAVxz51WEuI/AAAAAAAADmY/turmrtIhOjk/s1600/00.jpg" },
        { "name": "Aion", "image": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092011/aion_logo_special_for_designerstudio.ru_.png?itok=uK-U5BMF" },
        { "name": "Albion Online", "image": "https://assets.albiononline.com/uploads/media/default/media/91e735d16e33d81abc0efd175ab9a7921d0f3f71.png" },
        { "name": "Apex Legends", "image": "https://th.bing.com/th/id/R.68817bdf3fbd5fb0f423bda5631812fb?rik=jX%2bbcx2m6285wQ&pid=ImgRaw&r=0" },
        { "name": "Avakin Life", "image": "https://archive.org/download/avakin/avakin.png" },
        { "name": "Black Clover Mobile", "image": "https://cdn6.aptoide.com/imgs/5/7/8/578f1305869d3383c1972d602cc611f6_icon.png" },
        { "name": "Black Desert", "image": "https://yt3.googleusercontent.com/9fzD67GPsi79imLo4ktnUGUqFxcP0MY-MibB-NiFWdLuXZXLyYl9pR1X_ZKJEeonyXMu3VJoug=s900-c-k-c0x00ffffff-no-rj" },
        { "name": "Blade and Soul", "image": "https://www.freeiconspng.com/thumbs/blade-and-soul-icon/bs-blade-and-soul-red-icon-3.png" },
        { "name": "Brawl Stars", "image": "https://media.vandal.net/m/69040/brawl-stars-201812201015749_1.jpg" },
        { "name": "Brawlhalla", "image": "https://th.bing.com/th/id/OIP.GCWs0KUpRtpk-_sgmxqfUAHaFo?rs=1&pid=ImgDetMain" },
        { "name": "Cabal Online", "image": "https://play-lh.googleusercontent.com/SScJRTM8OBd7owU9rnUJM3zRTQAukjojj0TQqjQpVRsRF-BYxGQMZ479uJCrwiyfDXo" },
        { "name": "Call of Duty", "image": "https://seeklogo.com/images/C/call-of-duty-2023-logo-918F9E426C-seeklogo.com.png" },
        { "name": "Clash of Clans", "image": "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm" },
        { "name": "Clash Royale", "image": "https://th.bing.com/th/id/R.cb6769fb1aedef85ab18b16d01fd4d05?rik=PAcoilhQ4yAU%2fQ&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fclashroyale%2fimages%2f2%2f24%2fClash_Royale_Square_Icon.png%2frevision%2flatest%3fcb%3d20160116184427&ehk=4S6hGasXDeXDidFi2ak37z%2bnleLUY5HXpR8GS0bLbAM%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Coin Master", "image": "https://th.bing.com/th/id/R.fd10bff29fbcc3701fea5c0cbc430faf?rik=fTaUssskO0WX9Q&pid=ImgRaw&r=0" },
        { "name": "Combat Arms", "image": "https://2.bp.blogspot.com/-GGWQunHsmTA/Tz4op7uBJEI/AAAAAAAAATU/AxhQDxW2_kQ/s1600/combatarms-02.jpg" },
        { "name": "Counter Strike", "image": "https://th.bing.com/th/id/OIP.8o4AzrLmNu_nkwEC3CraTQHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Crossfire", "image": "https://i.pinimg.com/originals/a1/a2/92/a1a292c181e1b2b6b4484b621f161d13.jpg" },
        { "name": "Dark and Darker", "image": "https://cdn.icon-icons.com/icons2/3884/PNG/256/dark_and_darker_icon_245648.png" },
        { "name": "DDTank", "image": "https://th.bing.com/th/id/OIP.vilJ9Bqza7PcyRsUe7cD3gHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Dead by Daylight", "image": "https://cutewallpaper.org/24/dead-by-daylight-logo-png/414329833.jpg" },
        { "name": "Diablo Immortal", "image": "https://th.bing.com/th/id/R.0f027f4cd3433fee163a1f357c15aa4b?rik=J4Q6tkjaKyh6kA&pid=ImgRaw&r=0" },
        { "name": "Diablo IV", "image": "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/90918c5b8c17f80e32d5b155a7bf6197/32/256x256.png" },
        { "name": "Digimon Masters Online", "image": "https://pbs.twimg.com/profile_images/705650368605106176/GmAuD9SN_400x400.jpg" },
        { "name": "Dofus", "image": "https://th.bing.com/th/id/OIP.VVda1hW52NPfMgn_uLViywAAAA?rs=1&pid=ImgDetMain" },
        { "name": "DOTA 2", "image": "https://th.bing.com/th/id/R.4cb6bcc61397b0aa81645f4ed5599673?rik=OOf%2bfC9EaTBvFw&pid=ImgRaw&r=0" },
        { "name": "Dragon Ball Legends", "image": "https://i.pinimg.com/736x/a9/4a/e0/a94ae09b1ae1691d89baa43289950632.jpg" },
        { "name": "Dragon City Mobile", "image": "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/1d/71/0f/1d710f4f-9833-f4e9-5bd5-e041eacd0c90/source/1280x1280bb.jpg" },
        { "name": "Epic Games", "image": "https://static-00.iconduck.com/assets.00/epic-games-icon-512x512-7qpmojcd.png" },
        { "name": "Epic Seven", "image": "https://gamepress.gg/epicseven/sites/epicseven/files/e7-icon.png" },
        { "name": "Escape from Tarkov", "image": "https://riotpixels.net/wp/wp-content/uploads/2016/08/Escape-from-Tarkov__09-08-16.jpg" },
        { "name": "Farlight 84", "image": "https://th.bing.com/th/id/R.8228a67b73cc4dca43ac5c57b150a804?rik=SU7yST8kPPiTYQ&pid=ImgRaw&r=0" },
        { "name": "FIFA", "image": "https://th.bing.com/th/id/R.a80f87d5211f0939fbf34e75a317d457?rik=DP9V6zL5ycHsFA&riu=http%3a%2f%2fimages1.wikia.nocookie.net%2f__cb20121225170158%2flogopedia%2fimages%2f8%2f8d%2f2000px-Ea_Sports_logo_svg.png&ehk=VM2j%2f%2fdpfvI7n4QsCvwpWatjUJzl8S1TWvrFcVY63y4%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "For Honor", "image": "https://i.ytimg.com/vi/itlHgIdGki8/maxresdefault.jpg" },
        { "name": "Fortnite", "image": "https://th.bing.com/th/id/OIP.QOFo-vYrr5zIZwhISoBqtgAAAA?rs=1&pid=ImgDetMain" },
        { "name": "Forza Horizon", "image": "https://preview.redd.it/9qjkgtbndos81.png?width=256&format=png&auto=webp&s=3a0f74f2f703a40725f2ae906f671353e7fa6152" },
        { "name": "Free Fire", "image": "https://logospng.org/download/garena/logo-escudo-garena-1024.png" },
        { "name": "Genshin Impact", "image": "https://www.destockjapan.com/wp-content/uploads/2021/08/genshin-impact-logo.jpg" },
        { "name": "GOG", "image": "https://www.gogalaxy.com/favicons/android-icon-192x192.png" },
        { "name": "Grand Chase", "image": "https://th.bing.com/th/id/R.c40d036915b12ea8c65b4acd46f2a1e0?rik=WNo2T1OMUs2vqg&pid=ImgRaw&r=0" },
        { "name": "Grand Fantasia", "image": "https://pbs.twimg.com/profile_images/805565287/sprietava_400x400.jpg" },
        { "name": "GTA", "image": "https://yt3.googleusercontent.com/ytc/AGIKgqPPTEjRVg98FI1JEYF9ubwQ6JqeyHYR-ucMDxvg=s900-c-k-c0x00ffffff-no-rj" },
        { "name": "Guild Wars 2", "image": "https://th.bing.com/th/id/R.7488c48499f41de941747f91bc7a47ae?rik=rbLijUNmWjx%2b1A&pid=ImgRaw&r=0" },
        { "name": "Habbo", "image": "https://th.bing.com/th/id/OIP.6L0Yj9OX3Z8xalQ3Pi60mQAAAA?rs=1&pid=ImgDetMain" },
        { "name": "Hay Day", "image": "https://th.bing.com/th/id/R.25912b52848f592de77ccc7ebdab452c?rik=Dc58fT6EcanTBg&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fhayday%2fimages%2f6%2f6a%2fHay-Day-Icon.png%2frevision%2flatest%3fcb%3d20140920172358&ehk=3y6BKuX57yIy6YJQbs2QMUAnGyi2kXbX00mKVacOgDo%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Hearthstone", "image": "https://th.bing.com/th/id/R.7ec9453aeaeabf23dde154e0fdc28bfb?rik=pV5j%2b0A7huPz7Q&pid=ImgRaw&r=0" },
        { "name": "Heartwood Online", "image": "https://th.bing.com/th/id/OIP.9djRxXBP6jLxp3kBzd8R-QAAAA?rs=1&pid=ImgDetMain" },
        { "name": "Honkai Impact", "image": "https://freeappsforme.com/wp-content/uploads/2020/12/Honkai-Impact-3rd-logo-768x768.jpg" },
        { "name": "Honkai: Star Rail", "image": "https://th.bing.com/th/id/OIP.HrwRqp2QydmqNaPybnVH8QAAAA?rs=1&pid=ImgDetMain" },
        { "name": "Honor of Kings", "image": "https://play-lh.googleusercontent.com/73i1fY0ewi9PojudqwPzmGKxmhJ-MWaQR3UZvJxttIoVV4OwyK_wg-EG2q-c_JHZ50s" },
        { "name": "Icarus Online", "image": "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/926e263363c82458a9ae48883b7dc655/32/256x256.png" },
        { "name": "IMVU", "image": "https://th.bing.com/th/id/OIP.wx70YDfppvVzP9o2vPJJOAHaHa?rs=1&pid=ImgDetMain" },
        { "name": "Kakele Online", "image": "https://cdna.artstation.com/p/assets/images/images/056/275/144/large/caio-lucas-iconecapi512x512.jpg?1668856907" },
        { "name": "League of Legends", "image": "https://th.bing.com/th/id/R.100ceb3360e2449ec1898ba7c51c1c38?rik=ntoCi5r1kd81SQ&riu=http%3a%2f%2fwww.rw-designer.com%2ficon-image%2f21516-256x256x32.png&ehk=6ix06t6g2dgQwqXE1Pzv%2bAEnzkeYyqRc7YUh35FP%2beY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" },
        { "name": "League of Legends: Wild Rift", "image": "https://vsimse.ru/wp-content/uploads/2020/12/League-of-Legends-Wild-Rift.png" },
        { "name": "Legend Online", "image": "https://media.cdnandroid.com/item_images/736496/imagen-legend-online-classic-ultimate-0ori.jpg" },
        { "name": "Legends of Runeterra", "image": "https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/16/46/7a/16467aaa-e95c-2ed9-ab11-5aa54ef31fe8/source/512x512bb.jpg" },
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
        { "name": "Criptomoedas e NFT", "image": "https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-1-1.png" },
        { "name": "Assinaturas e Premium", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Emails", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Discord", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Gift Cards", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Redes Sociais", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Serviços Digitais", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Softwares e Licenças", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Apostas", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "eBooks", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Doações", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
        { "name": "Outros", "image": "https://th.bing.com/th/id/R.6f6a0b3e0b6e3f6d0f8e7e4e0b0b3e0b?rik=7p6%2bWl%2b5pW8G8w&riu=http%3a%2f%2fwww.aulasdeinglesgratis.net%2fwp-content%2fuploads%2f2016%2f08%2faulas-de-ingles-gratis.png&ehk=6g2%2f3U2dZ%2b6v0W%2f%2b5l%2f7g6%2f5" },
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
                                <div className="w-72 relative h-14 p-3 hover:bg-stone-50 border border-transparent hover:border-stone-300 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-lg">
                                    <img src={other.image} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-stone-600 dark:text-stone-400 rounded-md object-cover">
                                    </img>

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
                                <div className="w-72 relative h-14 p-3 hover:bg-stone-50 border border-transparent hover:border-stone-300 dark:hover:bg-stone-900 flex items-center px-4 cursor-pointer rounded-lg">
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