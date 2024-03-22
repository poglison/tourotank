import { useEffect, useState } from "react";
import Skeleton from "./skeleton";

export default function Image(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [images, setImages] = useState();
    const [index, setIndex] = useState(0);
    const [zoom, setZoom] = useState(0);
    const [rotate, setRotate] = useState(0);
    const [serach, setSerach] = useState(false);

    useEffect(() => {
        setImages(props.src);
    }, [props.src])




    return (
        <div className="relative h-80 select-none">
            <Skeleton className={"relative min-h-80 rounded-xl cursor-pointer " + props.className} loading={props.loading}>

                {(images?.length > 1) &&
                    <div onClick={() => { setIndex(index === 0 ? images.length - 1 : index - 1) }}
                        className="flex items-center justify-center absolute bottom-0 left-0 w-10 h-10 bg-white dark:bg-stone-850 rounded-bl-xl rounded-tr-md hover:bg-stone-200 dark:hover:bg-stone-900 border dark:border-stone-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-stone-800 dark:text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                }

                <img onMouseEnter={() => setSerach(true)} onMouseLeave={() => setSerach(false)} onClick={() => { setIsModalVisible(true) }} src={images?.length > 1 ? images[index] : images} alt={props.alt} className={"h-80 border dark:border-stone-700 rounded-xl transition-all ease-in cursor-pointer " + props.className} />

                {(images?.length > 1) &&
                    <div className="absolute bottom-0 w-full h-6 flex justify-center">

                        {images?.map((image, i) => {
                            return (
                                <div className={"dark:border dark:border-stone-600 w-3 h-3 rounded-full bg-stone-300 dark:bg-stone-900 mr-2 " + (index === i ? "bg-stone-400 dark:bg-stone-700" : "")} key={i} onClick={() => { setIndex(i) }
                                }></div>
                            )
                        })}
                    </div>
                }

                {(images?.length > 1) &&
                    <div onClick={() => { setIndex(index === images.length - 1 ? 0 : index + 1) }}
                        className="flex items-center justify-center absolute bottom-0 right-0 w-10 h-10 bg-white dark:bg-stone-850 rounded-br-xl rounded-tl-md hover:bg-stone-200 dark:hover:bg-stone-900 border dark:border-stone-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-stone-800 dark:text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                }

            </Skeleton>

            {isModalVisible ? (
                <>
                    <div onClick={() => { setIsModalVisible(false) }} className="bg-black/50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-4/5 my-6 mx-auto">
                            <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
                                <div className="p-5 px-8 fixed top-0 right-0 flex items-start justify-end pb-0 rounded-t">

                                </div>
                                <div className="relative flex-auto rounded-lg">
                                    <img src={images?.length > 0 ? images[index] : images} alt={props.alt} className={"w-full transform rounded-xl"} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}


        </div>
    )
}