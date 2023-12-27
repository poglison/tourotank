import { useState } from "react";
import Header from "../../components/header";


export default function Chat() {

    const [messages, setMessages] = useState([
        {
            id: 1,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 2,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 3,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 4,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 5,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 6,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 7,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 8,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 9,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 10,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 11,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png',
            }
        },
        {
            id: 12,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png',
            }
        },
        {
            id: 13,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png',
            }
        },
        {
            id: 14,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png',
            }
        },
        {
            id: 15,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png',
            }
        },
        {
            id: 16,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png',
            }
        },
        {
            id: 17,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png',
            }
        },
        {
            id: 18,
            message: 'Olá, tudo bem?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png',
            }
        }

    ])

    return (
        <div>
            <Header />

            <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center p-10">

                <div className="w-full h-full flex flex-col justify-between">

                    <div className="flex w-full rounded-2xl">

                        <div className="w-full h-16 flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-primary mr-3 flex items-center justify-center font-montserrat font-bold text-white text-2xl">t</div>
                                <div className="flex flex-col">
                                    <span className="font-montserrat font-bold text-stone-500">tourank</span>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-primary mr-1"></div>
                                        <span className="text-stone-400 text-sm">Online</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-zinc-200 text-zinc-600 p-2  rounded-lg cursor-pointer hover:bg-zinc-300 hover:text-zinc-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="flex flex-col w-full h-[calc(100%-4rem)] relative rounded-2xl bg-white shadow-2xl overflow-hidden">

                        <img src="https://img.freepik.com/free-vector/illustration-startup-business_53876-9144.jpg?w=2000" className="filter-image w-full h-full rounded-2xl absolute" />
                        
                        <div className="flex flex-col w-full h-full z-10 overflow-auto">
                        
                            {
                                messages.map((message) => (
                                    <div className="flex flex-col w-full h-32">
                                        <div className="flex items-center justify-end w-full h-16">
                                            <div className="flex flex-col mr-5">
                                                <span className="font-montserrat font-bold text-white text-sm">{message.user.name}</span>
                                                <span className="font-montserrat font-normal text-white text-xs">{message.message}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-primary mr-3 flex items-center justify-center font-montserrat font-bold text-white text-2xl">t</div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                        <div className="flex w-full h-20 items-center justify-between p-5 z-10">
                            <input type="text" className="w-full h-12 text-sm rounded-full px-5 outline-none" placeholder="Digite sua mensagem" />

                            <div className="ml-5 flex items-center bg-primary text-white rounded-full w-12 h-12 justify-center cursor-pointer hover:bg-primary-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}