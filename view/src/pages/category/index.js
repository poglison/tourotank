import { useEffect, useState } from "react";
import Header from "../../components/header";
import Breadcrumbs from "../../templates/breadcrumbs";
import Container from "../../templates/container";
import { categories } from "../../utils/jsons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { get } from "../../utils/services";
import Skeleton from "../../templates/skeleton";
import { levels } from "../../utils/jsons";

export default function Category(props) {

    const [category, setCategory] = useState({});
    const { id } = useParams();

    useEffect(() => {
        categories.map((item) => {
            if (item.value == id) {
                setCategory(item);
            }
        });
    }, [id]);


    useEffect(() => {
        get("ad").then((response) => {
            setLoading(false);
            setAds(response);
            setLoading(false);
        })
    }, [])

    const [loading, setLoading] = useState(true);
    const [ads, setAds] = useState([{ category: id }, { category: id }, { category: id }, { category: id }, { category: id }, { category: id }]);

    return (
        <div>

            <Header />

            <Container>
                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Category', path: '/category' }, { title: category.label, path: '/category/' + category.value }]} />


                <div className="mt-4 flex items-center">
                    <img className="w-10 h-10 rounded-lg mr-4" src={category.image}>

                    </img>

                    <p className="text-lg text-white font-ibm">
                        {category.label}
                    </p>
                </div>

                <div className="overflow-hidden mt-10 flex">

                    <div className="flex flex-wrap justify-start z-10 w-full">


                        {ads?.map((ad, index) => {

                            if (ad.category == id) {
                                return (
                                    <Link to={"/ad/" + ad?.id} className="hover:box-shadow-sm w-full sm:w-[calc(50%-16px)] md:w-[calc(33.3%-16px)] xl:w-[calc(25%-16px)] 2xl:w-[calc(20%-16px)] mr-4 mb-4 min-w-40 min-h-64 rounded-xl cursor-pointer"
                                        key={index}>

                                        <Skeleton loading={loading} className="w-full min-w-full min-h-64 rounded-xl overflow-hidden bg-white dark:bg-stone-900">
                                            <div className="relative w-full min-w-full min-h-64 h-64 border dark:border-stone-700 rounded-xl overflow-hidden">
                                                <img src={ad?.image ? ad?.image[0] : null} className="relative w-full h-[calc(100%-112px)] object-cover" />

                                                <div className="bg-white dark:bg-stone-950 min-h-28 h-28 w-full p-2 pb-4 px-4 absolute bottom-0 z-20">
                                                    <h1 className="text-ibm dark:text-stone-300 text-lg font-medium mt-2 truncate">{ad?.title}</h1>
                                                    <p className="overflow-hidden h-10 text-ibm dark:text-stone-400 text-sm mt-1">{ad?.description}</p>

                                                    <div className="drop-shadow-[0_35px_35px_rgba(255,255,255,1)] flex items-end justify-between min-h-12 h-12 w-full p-2 px-4 absolute bottom-1 right-0 z-10">
                                                        <div className="flex items-center justify-center">
                                                            <p className="font-ibm dark:text-stone-600 text-sm font-medium truncate">{ad?.user?.displayName}</p>

                                                            <img className="w-4 h-4 rounded-full ml-2" src={"/imgs/levels/" + (ad?.user?.level ? ad?.user?.level : "na") + ".webp"} alt="" />
                                                        </div>

                                                        <p className="font-ibm dark:text-stone-300 text-lg font-medium truncate">{ad?.price}</p>
                                                    </div>
                                                </div>




                                            </div>
                                        </Skeleton>
                                    </Link>
                                )
                            }
                        })}

                    </div>
                </div>

            </Container>
        </div>
    )
}