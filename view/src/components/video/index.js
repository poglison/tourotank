import { useRef, useState } from "react"


export default function Video() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {

        if (!isPlaying) {
            if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };



    return (
        <div>
            <div className="h-[calc(100vh/2)] md:h-screen flex items-center justify-center">
                <div onClick={playVideo} className="relative md:px-0 md:w-1/2 bg-white md:rounded-3xl cursor-pointer">
                    <video ref={videoRef} className="w-full h-full rounded-xl md:rounded-[30px] outline-none z-20 relative">
                        <source src="/tourotank.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute bottom-0 left-0 w-full h-20 bg-transparent z-40 flex items-center justify-center rounded-b-[30px]"></div>

                    <div className={"rounded-[30px] absolute top-0 bottom-0 left-0 right-0 w-full z-50 flex items-center justify-center " + (isPlaying ? "bg-transparent" : "md:bg-black/30")}>
                        <div className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer">

                            {isPlaying ? (
                                null
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}