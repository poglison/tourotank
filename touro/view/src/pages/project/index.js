import Header from "../../components/header";
import InformationProject from "../../components/information_project";
import Breadcrumbs from "../../templates/breadcrumbs";
import Button from "../../templates/button";
import Image from "../../templates/image";

import { Link } from "react-router-dom";

export default function Project() {

    return (
        <div>

            <Header />


            <div className="w-full px-10">
                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Project', path: '/project' }]} />

                <div className="w-full mt-4 flex flex-col md:flex-row justify-between">

                    <div className="w-full md:w-[calc(100%-326px)] flex flex-col xl:flex-row">
                        <Image className="w-full lg:h-56 object-contain" src="https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80"
                            alt="Project" />

                        <div className="xl:w-[calc(100%-384px)] xl:overflow-hidden xl:h-56 mt-4 xl:mt-0 xl:ml-4">

                            <div className="flex flex-col">
                                <span className="font-ibm text-xs text-zinc-600">Projeto</span>
                                <span className="font-ibm text-2xl font-medium text-zinc-800">Netflix Compartilhada Premium Hd 4k</span>
                            </div>

                            <div className="flex flex-col mt-4 ">
                                <span className="font-ibm text-xs text-zinc-600">Descrição</span>
                                <span className="xl:h-36 xl:overflow-auto font-ibm text-base text-zinc-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.</span>

                            </div>
                        </div>
                    </div>




                    <InformationProject />
                </div>

            </div>
        </div>
    )
}