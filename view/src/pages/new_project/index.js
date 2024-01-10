import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InformationProject from "../../components/information_project";
import Projects from "../../components/projects";
import Breadcrumbs from "../../templates/breadcrumbs";
import Button from "../../templates/button";
import Image from "../../templates/image";

import Timeline from "../../templates/timeline";
import Buttons from "../../templates/buttons";
import Team from "../../templates/team";
import FAQ from "../../components/faq";
import ButtonFAQ from "../../templates/button_faq";

export default function NewProject() {


    const [check, setCheck] = useState(0);

    const [team, setTeam] = useState([]);

    // 1 - Informações // 2 - FAQ // 3 - Chat
    const [selectedInformation, setSelectedInformation] = useState(1);

    useEffect(() => {
        document.scrollingElement.scrollTop = 0;
    }, [])


    return (
        <div className="overflow-x-hidden">

            <Header />


            <div className="w-full min-h-screen px-10">
                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Projeto', path: '/project' }, { title: 'Novo Projeto', path: '/project/new' }]} />

                <div className="w-full mt-4 flex flex-col md:flex-row justify-between">

                    <div className="w-full md:w-[calc(100%-326px)] flex flex-col xl:flex-row">

                        <div src="https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80" className="border border-zinc-300 w-1/2 xl:h-56 object-cover rounded-xl flex items-center justify-center cursor-pointer hover:bg-zinc-50 text-zinc-500 text-lg relative">
                            <input id="file" type="file" className="absolute w-full h-full hidden" />
                            <label for="file" className="cursor-pointer absolute w-full h-full flex items-center justify-center" />

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-4">
                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                            </svg>


                            <span>Adicionar imagem</span>

                        </div>

                        <div className="xl:w-[calc(100%-384px)] xl:overflow-hidden xl:h-56 mt-4 xl:mt-0 xl:ml-4">

                            <div className="flex flex-col">
                                <span className="font-ibm text-xs text-zinc-600">Projeto</span>

                                <input placeholder="Digite o nome do projeto" className="outline-none font-ibm text-2xl font-medium text-zinc-800" />
                            </div>

                            <div className="flex flex-col mt-4 ">
                                <span className="font-ibm text-xs text-zinc-600">Descrição</span>
                                <textarea placeholder="Digite uma descrição do projeto" className="xl:h-36 xl:overflow-auto font-ibm text-base text-zinc-700 outline-none resize-none" />

                            </div>

                        </div>


                    </div>
                    <InformationProject type="new" />
                </div>




                <div className="mt-4 w-full md:w-[calc(100%-326px)] flex flex-col">
                    <div>
                        <Buttons selectedInformation={selectedInformation} setSelectedInformation={setSelectedInformation} buttons={[
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 min-w-5 h-5 mr-2">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>,
                                text: "Informações",
                            }

                        ]} />

                    </div>

                    {selectedInformation == 1 ?
                        (
                            <div className="mt-4 flex flex-col">
                                <Timeline title="Em qual etapa está o projeto?" check={check} setCheck={setCheck} />

                                <Team type="new" team={team} setTeam={setTeam} />


                            </div>
                        ) :
                        selectedInformation == 2 ?
                            (
                                <div className="mt-12 mb-8 flex flex-col">
                                    <span className="text-ibm text-lg font-medium block text-zinc-800">Perguntas frequentes</span>

                                    <FAQ className="!p-0 !mt-0" title={false} faq={[
                                        {
                                            title: "O que é o Pysionic",
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.",
                                            click: false
                                        },
                                        {
                                            title: "Como funciona o Pysionic?",
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.",
                                            click: false
                                        },

                                        {
                                            title: "Quem pode investir no Pysionic?",
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.",
                                            click: false
                                        },
                                    ]} />
                                </div>
                            ) :
                            selectedInformation == 3 ?
                                (
                                    <div className="h-screen mt-12 mb-8 flex flex-col">
                                        <span className="text-ibm text-lg font-medium block text-zinc-800">Chat</span>


                                    </div>
                                ) : null
                    }


                </div>

            </div>



            <Footer />

        </div>
    )
}