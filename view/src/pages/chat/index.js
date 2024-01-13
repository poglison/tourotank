import { useState, useEffect, useRef } from "react";
import Header from "../../components/header";


export default function Chat() {

    const chat = useRef(null);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [displayResponse, setDisplayResponse] = useState('');
    const [completedTyping, setCompletedTyping] = useState(false);
    const [username, setUsername] = useState("");

    const [botMessages, setBotMessages] = useState([
        {
            id: 0,
            content: 'Olá, tudo bem? Eu sou o tourotank, como eu posso te chamar?',
            user: {
                name: 'tourotank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 2,
            content: 'Obrigado, qual é o nome do seu projeto?',
            user: {
                name: 'tourotank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        },
        {
            id: 4,
            content: 'Que nome bacana! Envie uma imagem dele abaixo:',
            input: 'image',
            user: {
                name: 'tourotank',
                avatar: 'https://www.tourank.com.br/img/logo.png'
            }
        }
    ])

    useEffect(() => {

        chat.current.scrollTop = chat.current.scrollHeight;


        try {
            setCompletedTyping(false);


            if (messages[messages.length - 1].user.name != 'tourotank') {

                setTimeout(() => {
                    var index = botMessages.findIndex((message) => message.id == messages.length);

                    if(botMessages[index]?.content){
                    setMessages([...messages, botMessages[index]]);
                    } else{
                        setMessages([...messages, { id: messages.length, content: "Não entendi, você poderia repetir?", user: { name: 'tourotank', avatar: '' } }]);
                    }
                }, 500);

            } else {
                let i = 0;
                const stringResponse = messages[messages.length - 1].content;

                const intervalId = setInterval(() => {
                    setDisplayResponse(stringResponse.slice(0, i));
                    i++;

                    if (i > stringResponse.length) {
                        clearInterval(intervalId);
                        setCompletedTyping(true);
                    }
                }, 20);

                return () => clearInterval(intervalId);
            }

        } catch (e) {
            console.log(e);
        }
    }, [messages]);

    useEffect(() => {
        if (messages.length != 0) return;
        setMessages([...messages, botMessages[0]]);
        setCompletedTyping(false);
    }, []);

    function sendMessage() {
        if (messages.length == 1) {
            setUsername(message);

            setMessages([...messages, { id: messages.length, content: message, user: { name: message ? message : "null", avatar: '' } }]);

        } else {
            setMessages([...messages, { id: messages.length, content: message, user: { name: username ? username : "null", avatar: '' } }]);
        }
        setMessage("");
    }

    return (
        <div>
            <Header className="!absolute" buttons={false} />

            <div className="w-full h-[calc(100vh-45px)] flex justify-center items-center pb-10">

                <div className="w-full h-full flex flex-col justify-between">

                    <div ref={chat} className="chat items-center flex flex-col w-full relative bg-white overflow-auto">

                        <div className="w-11/12 md:w-1/2 h-full z-10 mt-20">

                            {
                                messages.map((message) => (
                                    <div className="flex-col w-full" key={message?.id}>
                                        {message?.user && message?.user.name &&

                                            <div className="flex items-start justify-start w-full">

                                                {message.user.name == 'tourotank' ?

                                                    <div className="w-8 h-8 min-w-8 rounded-full bg-primary mr-2 mt-4 flex items-start justify-center font-montserrat font-bold text-white text-2xl">t</div>
                                                    :
                                                    <div className="w-8 h-8 min-w-8 rounded-full bg-zinc-500 mr-2 mt-4 flex items-center justify-center font-montserrat relative font-bold text-white text-2xl">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                                        </svg>

                                                    </div>
                                                }


                                                <div className="flex flex-col mr-5 bg-white p-3 rounded-xl relative w-full">
                                                    <span className="font-bold text-primary text-sm w-full truncate">{message.user.name}</span>

                                                    {message.user.name == 'tourotank' && message.id == messages.length - 1 ?
                                                        <span className="font-normal text-black text-xs break-all min-h-4">{displayResponse}</span>
                                                        :
                                                        <span className="font-normal text-black text-xs break-all min-h-4">{message.content}</span>
                                                    }

                                                    {message.input == 'image' &&
                                                        <input type="file" className="text-xs mt-2" />
                                                    }


                                                </div>
                                            </div>
                                        }
                                    </div>

                                ))
                            }

                        </div>

                        <div className="bottom-6 fixed flex w-11/12 md:w-1/2 h-20 items-center justify-between p-5 z-10 px-0 ">

                            <div className="bg-white border-[1.5px] rounded-full z-10 w-full flex items-center px-5 pr-1.5">
                                <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" className=" w-full h-12 text-sm outline-none" placeholder="Digite sua mensagem" />

                                {completedTyping ?
                                    <button className="ml-5 flex items-center bg-primary text-white hover:bg-white hover:text-primary border-[1.5px] border-primary rounded-full w-10 h-10 min-h-10 min-w-10 justify-center cursor-pointer hover:bg-primary-600"
                                        onClick={(e) => { sendMessage() }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </button>
                                    :
                                    <button className="ml-5 flex items-center bg-zinc-400 text-white border-[1.5px] border-zinc-400 rounded-full w-10 h-10 min-h-10 min-w-10 justify-center cursor-pointer hover:bg-primary-600">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                    </button>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}