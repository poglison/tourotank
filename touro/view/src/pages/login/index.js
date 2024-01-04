import Header from "../../components/header";
import Button from "../../templates/button";
import Input from "../../templates/input";
import { toast } from "react-toastify";
import { login } from "../../services";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const notify = (message) => toast(message);


    const logon = () => {
        setLoading(true);

        login({ username: email, password: password }).then((response) => {

            if (response == true) {
                setUser({ username: email });
                navigate("/");
            } else {
                setUser({ username: "" });
                notify("Email ou senha incorretos");
            }

            setLoading(false);

        });
    }


    var faqs = [
        {
            question: "Oque é o touratank?",
            answer: "É uma plataforma que permite que você invista em ideias, empresas e tecnologias de forma simples e rápida."
        },
        {
            question: "Como funciona?",
            answer: "Você se cadastra, escolhe um projeto e investe. Simples assim."
        },
        {
            question: "Quanto posso investir?",
            answer: "A partir de R$ 1,00."
        },
        {
            question: "Eu posso investir e cadastrar meu projeto?",
            answer: "Sim, você pode investir e cadastrar seu projeto."
        }
    ]


    return (
        <div className="relative">
            <Header buttons={false} className="!bg-transparent" />

            <div className="top-0 absolute flex w-full h-screen">
                <div className="w-full md:w-1/2 flex justify-center items-center">

                    <div className="w-2/3 z-10 p-6">

                        <div className="mb-10 mt-2 flex items-center justify-center">

                            <span className="font-ibm text-xl font-medium text-primary">Entre agora no </span>

                            <span className="ml-2 font-montserrat text-2xl font-bold text-primary">tourank</span>
                        </div>
                        <Input onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" type="email" className="mb-4" />

                        <Input onChange={(e) => { setPassword(e.target.value) }} placeholder="Senha" type="password" />

                        <div onClick={() => logon()} >
                            <Button className="!px-1.5 !p-1 h-11 mt-4 w-full flex items-center " type="primary">

                                {loading &&
                                    <button className="flex items-center bg-zinc-400 text-white border-2 border-zinc-400/50 rounded-full w-7 h-7 min-h-7 min-w-7 justify-center cursor-pointer hover:bg-primary-600">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                    </button>
                                }


                                <span className={"w-full flex justify-center " + (loading ? "-ml-7" : "ml-0")} >Entrar</span>


                            </Button>
                        </div>

                        <div className="w-full mt-2 flex items-center justify-center">
                            <span className="text-sm text-zinc-500">Ainda não tem uma conta?</span>
                            <Link to="/register">
                                <span className="flex items-center justify-center w-20 text-sm text-primary ml-1 underline cursor-pointer hover:font-medium hover:decoration-2">registre-se</span>
                            </Link>

                        </div>
                    </div>

                </div>

                <div className="hidden md:flex flex-col h-screen justify-between items-center w-1/2 bg-primary text-white font-ibm relative">

                    <div className="h-full flex flex-col items-center justify-center z-20">
                        <div className="px-10 pt-10">
                            {faqs.map((faq, index) => {
                                return (
                                    <div key={index} className="mb-6">
                                        <div className="text-lg font-medium">
                                            {faq.question}
                                        </div>

                                        <span className="text-sm opacity-95">
                                            {faq.answer}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>


                        <div className="mt-6 flex items-center justify-center">
                            <span className="text-sm text-white mr-2">Ainda tem dúvidas?</span>
                            <span className="w-28 text-sm text-white underline cursor-pointer hover:font-medium hover:decoration-2">entre em contato</span>
                        </div>
                    </div>

                    <div className="w-full mt-10 p-10 z-20">
                        <div className="flex flex-col items-center justify-center">

                            <div className="flex items-center">

                                <span className="ml-4 text-xs">© 2023 Todos os direitos reservados</span>
                            </div>

                            <div className="flex space-x-2 mt-2">
                                <Link to="/sobre">
                                    <span className="text-xs hover:underline">Termos de uso</span>
                                </Link>

                                <Link to="/sobre">
                                    <span className="text-xs hover:underline">Politica de privacidade</span>
                                </Link>

                                <Link to="/sobre">
                                    <span className="text-xs hover:underline">Política de Cookies</span>
                                </Link>

                            </div>

                            <div className="flex items-center space-x-2 mt-4">
                                <svg className="fill-white hover:opacity-80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" /></svg>

                                <svg className="fill-white hover:opacity-80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>

                                <svg className="fill-white hover:opacity-80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}


