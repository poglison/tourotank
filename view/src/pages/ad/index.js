import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InformationAd from "../../components/info_ad";
import Ads from "../../components/ads";
import Breadcrumbs from "../../templates/breadcrumbs";
import Button from "../../templates/button";
import Image from "../../templates/image";

import Timeline from "../../templates/timeline";
import Buttons from "../../templates/buttons";
import Team from "../../templates/team";
import FAQ from "../../components/faq";
import ButtonFAQ from "../../templates/button_faq";

import { get, getByID } from "../../utils/services";
import { useParams } from "react-router-dom";
import Skeleton from "../../templates/skeleton";
import Container from "../../templates/container";

export default function Ad() {


    // 1 - Informações // 2 - FAQ // 3 - Chat
    const [selectedInformation, setSelectedInformation] = useState(1);
    const [ad, setAd] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        getByID("ad", id).then((response) => {
            setAd(response);
            setLoading(false);
            console.log(response);
        })


    }, [id])


    return (
        <div className="bg-white dark:bg-stone-850 overflow-x-hidden">


            <Header />

            <Container>
                <div className="w-full min-h-screen">
                    <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Projeto', path: '/ad' }]} />

                    <div className="w-full mt-4 flex flex-col md:flex-row justify-between">

                        <div className="w-full md:w-[calc(100%-326px)] flex flex-col xl:flex-row">

                            <div className="w-full xl:w-1/2">
                                <Image loading={loading} src={ad?.image} className="w-full object-cover xl:h-80" />
                            </div>
                            <div className="xl:w-[calc(100%-384px)] xl:overflow-hidden xl:h-80 h-full mt-4 xl:mt-0 xl:ml-4">

                                <div className="flex flex-col">
                                    <span className="font-ibm text-xs text-stone-600 dark:text-stone-400">Projeto</span>
                                    <Skeleton className="w-1/2 h-8" loading={loading}>
                                        <span className="font-ibm text-2xl font-medium text-stone-800 dark:text-stone-200">{ad?.title}</span>
                                    </Skeleton>
                                </div>

                                <div className="flex flex-col mt-4 ">
                                    <span className="font-ibm text-xs text-stone-600 dark:text-stone-400">Descrição</span>
                                    <Skeleton className="xl:h-52 h-64 overflow-auto" loading={loading}>
                                        <span className="xl:h-52 h-64 overflow-auto font-ibm text-base text-stone-700 dark:text-stone-200">
                                            {ad?.description}
                                        </span>
                                    </Skeleton>
                                </div>

                            </div>


                        </div>
                        <InformationAd ad={ad} loading={loading} />
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
                                },
                                {
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 min-w-5 h-5 mr-2">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    </svg>,
                                    text: "Perguntas frequentes",
                                },
                                {
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 min-w-5 h-5 mr-2">
                                        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                                        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                                    </svg>,
                                    text: "Chat",
                                }

                            ]} />

                        </div>

                        {selectedInformation == 1 ?
                            (
                                <div className="mt-4 flex flex-col">
                                    {/* <Timeline check={ad?.step} /> */}

                                    <div onClick={() => { setSelectedInformation(2); document.scrollingElement.scrollTop = 0; }} className="mt-8 flex flex-col">
                                        <ButtonFAQ />
                                    </div>
                                </div>
                            ) :
                            selectedInformation == 2 ?
                                (
                                    <div className="mt-12 mb-8 flex flex-col">
                                        <span className="text-ibm text-lg font-medium block text-stone-800 dark:text-stone-200">Perguntas frequentes</span>

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
                                            <span className="text-ibm text-lg font-medium block text-stone-800 dark:text-stone-200 ">Chat</span>


                                        </div>
                                    ) : null
                        }


                        <div className="mt-10 flex flex-col w-full">
                            <span className="text-stone-700 dark:text-stone-200  text-lg font-ibm mb-5">Você também pode estar interessado em</span>

                            <Ads className="w-full !h-full !p-0" />
                        </div>
                    </div>

                </div>
            </Container>


            <Footer />

        </div>
    )
}