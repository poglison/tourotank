import { Link } from "react-router-dom";
import Logo from "../../templates/logo";


export default function Footer() {

    return (
        <div className="w-full mt-10 p-10 px-5 lg:p-10 bg-stone-50 dark:text-stone-300 dark:bg-stone-900 border-t border-stone-300 dark:border-t-stone-800">


            <div className="w-full h-full flex flex-col justify-between">


                <div className="flex flex-col lg:flex-row h-full w-full justify-between space-x-12">

                    <div className="flex lg:w-1/2 justify-between lg:justify-start items-start lg:flex-row flex-wrap lg:space-x-10">

                        <div className="flex flex-col space-y-1 items-start min-w-36 lg:min-w-max mb-4 mr-4">
                            <span className="text-base font-medium text-primary">Explorar</span>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Sobre</span>
                            </Link>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Blog</span>
                            </Link>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Carreiras</span>
                            </Link>
                        </div>

                        <div className="flex flex-col space-y-1 items-start min-w-36 lg:min-w-max mb-4 mr-4">
                            <div className="flex flex-col space-y-1">

                                <span className="text-base font-medium text-primary">Ajuda</span>

                                <Link to="/sobre">
                                    <span className="text-xs hover:underline">Contato</span>
                                </Link>

                                <Link to="/sobre">
                                    <span className="text-xs hover:underline">Ajuda</span>
                                </Link>

                                <Link to="/sobre">
                                    <span className="text-xs hover:underline">FAQ</span>
                                </Link>
                            </div>
                        </div>

                        {/* <div className="flex flex-col space-y-1 items-start min-w-36 lg:min-w-max mb-4 mr-4">
                            <span className="text-base font-medium text-primary">Empreendendores</span>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Como funciona</span>
                            </Link>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Tarifas</span>
                            </Link>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Empreendimento</span>
                            </Link>
                        </div>


                        <div className="flex flex-col space-y-1 items-start min-w-36 lg:min-w-max mb-4 mr-4">
                            <span className="text-base font-medium text-primary">Investidores</span>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Como funciona</span>
                            </Link>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Tarifas</span>
                            </Link>

                            <Link to="/sobre">
                                <span className="text-xs hover:underline">Investimento</span>
                            </Link>
                        </div> */}
                    </div>

                    <div className="w-full lg:w-auto !m-0 !p-0">
                        <div className="flex lg:items-start items-center flex-col lg:flex-row mt-14 lg:mt-0">
                            <div className="flex space-x-4 mb-4 lg:mb-0">
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


                            <div className="h-full flex items-start justify-start space-x-2 ml-5">
                                <svg className="fill-primary dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" /></svg>

                                <svg className="fill-primary dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>

                                <svg className="fill-primary dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>

                                <div className="bg-primary dark:bg-white rounded-lg ">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                                        <g transform="translate(32,32) scale(0.75,0.75)"><g className="fill-white dark:fill-stone-900" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"></path></g></g></g>
                                    </svg>
                                </div>
                            </div>


                        </div>

                        <div className="flex items-center justify-end mt-4 mb-4 h-full">
                            <span className="text-xs dark:text-stone-600">Developed by poglison</span>

                            <img src="/imgs/bull/poglison.png" alt="Poglison" className="h-6 w-6 ml-2 rounded" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}