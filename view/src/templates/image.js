import { useState } from "react";
import Skeleton from "./skeleton";

export default function Image(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [zoom, setZoom] = useState(0);
    const [rotate, setRotate] = useState(0);
    const [serach, setSerach] = useState(false);



    return (
        <div>
            <Skeleton className={"relative min-h-56 rounded-xl cursor-pointer " + props.className} loading={props.loading}>
                <img onMouseEnter={() => setSerach(true)} onMouseLeave={() => setSerach(false)} onClick={() => { setIsModalVisible(true) }} src={props.src} alt={props.alt} className={"rounded-xl transition-all ease-in hover:opacity-95 hover:grayscale cursor-pointer " + props.className} />

                {serach ? (
                    <div className="absolute w-20 h-20 bg-primary -mt-48 ml-48 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </div>
                ) : null}

            </Skeleton>

            {isModalVisible ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-3/5 my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
                                {/*header*/}
                                <div className="p-5 px-8 fixed top-0 right-0 flex items-start justify-end pb-0 rounded-t">


                                    {/* <button
                                        className="p-2 bg-white rounded ml-2 border-0 text-stone-700 hover:text-stone-900 hover:bg-stone-300 text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => { setZoom(zoom - 25) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm4.5 0a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <button
                                        className="p-2 bg-white rounded ml-2 border-0 text-stone-700 hover:text-stone-900 hover:bg-stone-300 text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => { setZoom(zoom + 25) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm8.25-3.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H7.5a.75.75 0 0 1 0-1.5h2.25V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <button
                                        className="p-2 bg-white rounded ml-2 border-0 text-stone-700 hover:text-stone-900 hover:bg-stone-300 text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => { if (rotate < 180) { setRotate(rotate + 90) } else { setRotate(0) } }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                                        </svg>
                                    </button> */}

                                    <button
                                        className="p-2 bg-white ml-2 mr-2.5 rounded-full border-[1.5px] text-stone-700 hover:text-stone-900 hover:bg-stone-300 text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => { setIsModalVisible(false) }}>
                                        <span className="bg-transparent text-stone-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>

                                        </span>
                                    </button>


                                </div>
                                {/*body*/}
                                <div className="relative flex-auto rounded-lg">
                                    <img src={props.src} alt={props.alt} className={"w-full transform rounded-lgk"} />
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