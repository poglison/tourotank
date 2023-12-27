import { useState, useEffect } from "react";
import Header from "../../components/header";


export default function Chat() {

    const [messages, setMessages] = useState([
        {
            id: 1,
            content: 'Olá, tudo bem? Eu sou o tourataank, como eu posso te chamar?',
            user: {
                name: 'Tourank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        }
    ])

    const [displayResponse, setDisplayResponse] = useState('');
    const [completedTyping, setCompletedTyping] = useState(false);



    useEffect(() => {

        try {
            setCompletedTyping(false);

            let i = 0;
            const stringResponse = messages[messages.length - 1].content;

            const intervalId = setInterval(() => {
                console.log('typing')
                setDisplayResponse(stringResponse.slice(0, i));
                console.log(stringResponse.slice(0, i))

                i++;

                if (i > stringResponse.length) {
                    clearInterval(intervalId);
                    setCompletedTyping(true);
                }
            }, 20);


            console.log(intervalId)
            return () => clearInterval(intervalId);

        } catch (e) {
            console.log(e);
        }
    }, [messages]);


    return (
        <div>
            <Header className="!absolute" buttons={false} />

            <div className="w-full h-[calc(100vh-20px)] flex justify-center items-center p-10 pt-0 pr-0">

                <div className="w-full h-full flex flex-col justify-between">

                    {/* <div className="flex w-full">

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

                        </div>

                    </div> */}


                    <div className="chat items-center flex flex-col w-full relative bg-white overflow-auto">

                        {/* <img src="https://img.freepik.com/free-vector/illustration-startup-business_53876-9144.jpg?w=2000" className="filter-image w-full h-full rounded-2xl absolute" /> */}

                        <div className="flex flex-col w-1/2 h-full z-10 relative mt-20">

                            {/* <div className="w-1/2 h-20 bg-white fixed"></div> */}

                            {
                                messages.map((message) => (
                                    <div className="flex flex-col w-full h-32">
                                        <div className="flex items-center justify-start w-full h-16">
                                            <div className="w-8 h-8 rounded-full bg-primary mr-2 flex items-center justify-center font-montserrat font-bold text-white text-2xl">t</div>



                                            <div className="flex flex-col mr-5 bg-white p-3 rounded-xl">
                                                <span className="font-bold text-primary text-sm">{message.user.name}</span>
                                                <span className="font-normal text-black text-xs">{message.content}</span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                        <div className="bottom-0 fixed flex w-1/2 h-20 items-center justify-between p-5 z-10 px-0 ">

                            <div className="bg-white border rounded-full z-10 w-full flex items-center px-5 pr-1.5">
                                <input type="text" className=" w-full h-12 text-sm outline-none" placeholder="Digite sua mensagem" />

                                <div className="ml-5 flex items-center bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary rounded-full w-10 h-10 min-h-10 min-w-10 justify-center cursor-pointer hover:bg-primary-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}