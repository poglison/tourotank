

export default function Load() {

    return (
        <div className="w-full h-full fixed bg-black/50 z-50">
            <div className="w-52 h-52  rounded-xl flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                <div className="rounded-full animate-spin">

                    <svg className="animate-spin h-full w-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="#000" strokeWidth={4} />
                        <path className="opacity-75" fill="#FF4F00" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}