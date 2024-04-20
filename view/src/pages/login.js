import Header from "../components/header";
import Button from "../templates/button";
import Input from "../templates/input";
import UserContext from "../utils/context";
import Google from "../templates/google";

import { toast } from "react-toastify";
import { auth } from "../utils/services";
import { faqs } from "../utils/jsons";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const notify = (message) => toast(message);


    const login = () => {
        setLoading(true);

        auth({ email: email, password: password }).then((response) => {
            setLoading(false);

            if (response.status == "404") {
                notify(response.message);
                return;
            }

            if (response) {
                setUser({ id: response.id, email: email, displayName: response.displayName, image: response.image });
                navigate("/");
            }


        });
    }


    return (
        <div className="relative md:h-screen md:overflow-hidden">
            <Header buttons={false} className="!bg-transparent" />

            <div className="top-0 absolute flex w-full md:h-screen mt-40 md:mt-0">
                <div className="w-full md:w-1/2 flex justify-center items-center">

                    <div className="w-full xl:w-3/4 z-10 p-10">

                        <div className="mb-10 mt-2 flex items-center justify-center">

                            <span className="font-ibm text-lg font-medium text-primary">Entre agora no </span>

                            <span className="ml-2 font-montserrat text-xl font-bold text-primary">tourotank</span>
                        </div>
                        <Input onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" type="email" className="mb-4" />

                        <Input onChange={(e) => { setPassword(e.target.value) }} placeholder="Senha" type="password" />

                        <div onClick={() => login()} >
                            <Button className="!px-1.5 !p-1 h-11 mt-4 w-full flex items-center " type="primary">

                                {loading &&
                                    <button className="flex items-center text-white border-2rounded-full w-7 h-7 min-h-7 min-w-7 justify-center cursor-pointer hover:bg-primary-600">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx={12} cy={12} r={10} stroke="#000" strokeWidth={4} />
                                            <path className="opacity-75 fill-primary" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                    </button>
                                }


                                <span className={"w-full flex justify-center " + (loading ? "-ml-7" : "ml-0")} >Entrar</span>


                            </Button>
                        </div>

                        <div className="w-full mt-2 flex items-center justify-center">
                            <span className="text-sm text-stone-500 dark:text-stone-300">Ainda não tem uma conta?</span>
                            <Link to="/register">
                                <span className="flex items-center justify-center w-20 text-sm text-primary ml-1 underline cursor-pointer hover:font-medium hover:decoration-2">registre-se</span>
                            </Link>



                        </div>

                        <div className="flex items-center justify-center mt-8 w-full h-10">
                            <Google />

                            <Link to="/">
                                <div className="cursor-pointer border dark:border-stone-700 dark:bg-stone-850 rounded-lg h-14 w-14 flex items-center justify-center mr-4 hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 64 64">
                                        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                                    </svg>
                                </div>
                            </Link>


                            <Link to="/">
                                <div className="cursor-pointer border dark:border-stone-700 dark:bg-stone-850 rounded-lg h-14 w-14 flex items-center justify-center mr-4 hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M41.626,10.768C37.644,7.567,31.347,7.025,31.08,7.003c-0.42-0.036-0.819,0.202-0.992,0.587c-0.012,0.025-0.15,0.34-0.303,0.833c2.633,0.443,5.867,1.339,8.794,3.155c0.469,0.291,0.613,0.907,0.322,1.377c-0.189,0.305-0.516,0.473-0.851,0.473c-0.18,0-0.362-0.048-0.526-0.15C32.494,10.158,26.209,10,25,10s-7.495,0.158-12.523,3.278c-0.47,0.292-1.086,0.147-1.377-0.322c-0.292-0.47-0.147-1.086,0.322-1.377c2.927-1.815,6.16-2.712,8.794-3.155c-0.154-0.493-0.292-0.808-0.303-0.833c-0.173-0.386-0.571-0.629-0.993-0.587c-0.266,0.021-6.563,0.563-10.598,3.809C6.213,12.76,2,24.152,2,34c0,0.174,0.045,0.344,0.131,0.495c2.909,5.109,10.842,6.447,12.649,6.504C14.791,41,14.801,41,14.812,41c0.319,0,0.62-0.152,0.809-0.411l1.829-2.513c-4.933-1.276-7.453-3.439-7.598-3.568c-0.414-0.365-0.453-0.997-0.087-1.411c0.365-0.414,0.995-0.453,1.41-0.089C11.236,33.062,15.875,37,25,37c9.141,0,13.782-3.953,13.828-3.993c0.414-0.359,1.045-0.323,1.409,0.094c0.364,0.414,0.325,1.043-0.088,1.407c-0.146,0.129-2.666,2.292-7.599,3.568l1.829,2.513C34.568,40.848,34.869,41,35.188,41c0.011,0,0.021,0,0.031-0.001c1.809-0.057,9.741-1.395,12.649-6.504C47.955,34.344,48,34.174,48,34C48,24.152,43.787,12.76,41.626,10.768z M18.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C22,28.209,20.433,30,18.5,30z M31.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C35,28.209,33.433,30,31.5,30z" />
                                    </svg>
                                </div>
                            </Link>


                            <Link to="/">
                                <div className="cursor-pointer border dark:border-stone-700 dark:bg-stone-850 rounded-lg h-14 w-14 flex items-center justify-center mr-4 hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M25,2C15.059,2,7,4.686,7,8c0,0,0,8.083,0,17c0,5.083,5.417,19.083,18,22c12.583-2.917,18-16.917,18-22c0-8.917,0-17,0-17C43,4.686,34.941,2,25,2z M17,11c3.438,0,5.195,3.074,5.561,3.439c0.586,0.586,0.586,1.536,0,2.121c-0.586,0.586-1.536,0.586-2.121,0C20.027,16.149,18.688,13,16,13c-1.387,0-3.047,0.64-5,2C12.855,11.877,15.004,11,17,11z M20,18.5c-0.918,0.906-2.36,1.5-4,1.5s-3.082-0.594-4-1.5c0.918-0.906,2.36-1.5,4-1.5S19.082,17.594,20,18.5z M27,43l-2,2l-2-2v-5h4V43z M34,34h-7l-2-2l-2,2h-7l-5-8l6,5h4l3-3h2l3,3h4l6-5L34,34z M30,18.5c0.918-0.906,2.36-1.5,4-1.5s3.082,0.594,4,1.5c-0.918,0.906-2.36,1.5-4,1.5S30.918,19.406,30,18.5z M34,13c-2.688,0-4.027,3.149-4.439,3.561c-0.586,0.586-1.536,0.586-2.121,0c-0.586-0.586-0.586-1.536,0-2.121C27.805,14.074,29.563,11,33,11c1.996,0,4.145,0.877,6,4C37.047,13.64,35.387,13,34,13z" />
                                    </svg>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>

                <div className="hidden md:flex flex-col h-screen justify-between items-center w-1/2 bg-primary text-white font-ibm relative">

                    <img className="max-h-[1000px] h-2/3 hidden xl:flex absolute -bottom-40 -right-44 select-none -rotate-12" src="imgs/bull/bull.png" alt="Bull" />


                    <div className="h-full flex flex-col justify-center z-20">
                        <div className="px-10 pt-10">
                            {faqs?.map((faq, index) => {
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


                        <div className="px-10 mt-6 flex">
                            <span className="text-sm text-white mr-2">Ainda tem dúvidas?</span>
                            <span className="w-28 text-sm text-white underline cursor-pointer hover:font-medium hover:decoration-2">entre em contato</span>
                        </div>
                    </div>

                    <div className="w-full mt-10 p-10 z-20">
                        <div className="flex flex-col items-center justify-center">

                            <div className="flex items-center">

                                <span className="text-stone-50 ml-4 text-xs">Copyright © 2024 Todos os direitos reservados</span>
                            </div>

                            <div className="flex space-x-2 mt-2">
                                <Link to="/sobre">
                                    <span className="text-stone-50 text-xs hover:underline">Termos de uso</span>
                                </Link>

                                <Link to="/sobre">
                                    <span className="text-stone-50 text-xs hover:underline">Politica de privacidade</span>
                                </Link>

                                <Link to="/sobre">
                                    <span className="text-stone-50 text-xs hover:underline">Política de Cookies</span>
                                </Link>

                            </div>

                            <div className="flex items-center space-x-2 mt-4">
                                <svg className="fill-stone-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" /></svg>

                                <svg className="fill-stone-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>

                                <svg className="fill-stone-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>

                                <div className="bg-stone-50 rounded-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                                        <g transform="translate(32,32) scale(0.75,0.75)"><g className="fill-primary" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"></path></g></g></g>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}


