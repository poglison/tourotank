import { useState } from 'react'

export default function Input(props) {

    const [visible, setVisible] = useState(false);

    return (
        <div className={"select-none bg-white dark:bg-stone-950 border-[1.5px] dark:border-stone-800 rounded-full z-10 w-full flex items-center px-5 " + props.className}>
            <input onChange={(e) => { props.onChange ? props.onChange(e) : null }} type={props.type == "password" && visible == true ? "text" : props.type} className="w-full dark:bg-stone-950 h-12 text-sm outline-none dark:placeholder:text-stone-400 dark:text-stone-200" placeholder={props.placeholder} />

            {(props.type === "password" && !visible) ?
                <svg onClick={() => setVisible(!visible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="relative -mr-4 ml-4 text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 w-10 min-w-10 h-10 p-2.5 rounded-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                : (props.type === "password") ?
                    <svg onClick={() => setVisible(!visible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="relative -mr-4 ml-4 text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800  w-10 min-w-10 h-10 p-2.5 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                    : null
            }


        </div>
    )
}