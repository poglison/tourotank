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

                {(images?.length > 2) &&
                    <div onClick={() => { setIndex(index === images.length - 1 ? 0 : index + 1) }}
                        className="flex items-center justify-center absolute bottom-0 left-0 w-10 h-10 bg-stone-950 rounded-bl-xl rounded-tr-md hover:bg-stone-900 border border-stone-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>}

                <img onMouseEnter={() => setSerach(true)} onMouseLeave={() => setSerach(false)} onClick={() => { setIsModalVisible(true) }} src={images?.length > 1 ? images[index] : images} alt={props.alt} className={"h-80 border border-stone-700 rounded-xl transition-all ease-in cursor-pointer " + props.className} />

                {(images?.length > 2) &&
                    <div onClick={() => { setIndex(index === images.length - 1 ? 0 : index + 1) }}
                        className="flex items-center justify-center absolute bottom-0 right-0 w-10 h-10 bg-stone-950 rounded-br-xl rounded-tl-md hover:bg-stone-900 border border-stone-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>}

            </Skeleton>

            {isModalVisible ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-3/5 my-6 mx-auto">
                            <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
                                <div className="p-5 px-8 fixed top-0 right-0 flex items-start justify-end pb-0 rounded-t">
                                    <button
                                        className="p-2 bg-white ml-2 mr-2.5 rounded-full border text-stone-700 hover:text-stone-900 hover:bg-stone-300 text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => { setIsModalVisible(false) }}>
                                        <span className="bg-transparent text-stone-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>

                                        </span>
                                    </button>


                                </div>
                                <div className="relative flex-auto rounded-lg">
                                    <img src={images?.length > 0 ? images[0] : images} alt={props.alt} className={"w-full transform rounded-lgk"} />
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