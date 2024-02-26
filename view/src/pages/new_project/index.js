import { useEffect, useState, useContext } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InformationProject from "../../components/information_project";
import Breadcrumbs from "../../templates/breadcrumbs";
import Container from "../../templates/container";

import Timeline from "../../templates/timeline";
import Buttons from "../../templates/buttons";
import Team from "../../templates/team";
import FAQ from "../../components/faq";

import UserContext from "../../context";
import Options from "../../templates/options";

export default function NewProject(props) {

    const { user } = useContext(UserContext);


    const [project, setProject] = useState({});
    const [check, setCheck] = useState(0);

    const [team, setTeam] = useState([]);

    // 1 - Informações // 2 - FAQ // 3 - Chat
    const [selectedInformation, setSelectedInformation] = useState(1);

    useEffect(() => {
        document.scrollingElement.scrollTop = 0;
    }, [])


    useEffect(() => {
        setProject({ ...project, step: check })
    }, [check])

    useEffect(() => {
        setProject({ ...project, team: team })
    }, [team])

    const convertBase64 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setProject({ ...project, image: reader.result })
        };
    };



    return (
        <div className="bg-white dark:bg-stone-950 overflow-x-hidden">

            <Header />

            <Container>
                <div className="w-full min-h-screen">

                    <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Projeto', path: '/project' }, { title: 'Novo Projeto', path: '/project/new' }]} />
                    <InformationProject type="new" project={project} setProject={setProject} user={user} />


                    <div className="w-full mt-4 md:w-[calc(100%-326px)] flex flex-col">

                        <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">Anúncio</span>

                        <div className="flex flex-col">
                            <span className="font-ibm text-xs text-stone-600">Titulo do anúncio</span>

                            <input onChange={(e) => { setProject({ ...project, title: e.target.value }) }} placeholder="Digite o titulo do anúncio" className="border-[1.5px] dark:border-stone-900 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600" />
                        </div>

                        <div className="flex flex-col mt-4 ">
                            <span className="font-ibm text-xs text-stone-600">Descrição</span>
                            <textarea onChange={(e) => { setProject({ ...project, description: e.target.value }) }} placeholder="Digite a descrição do anúncio" className="border-[1.5px] dark:border-stone-900 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 xl:h-36 xl:overflow-auto font-ibm text-lg text-stone-700 dark:text-stone-400 outline-none resize-none dark:placeholder:text-stone-600" />

                        </div>

                    </div>


                    <div className="w-full md:w-[calc(100%-326px)] flex flex-col mt-6">

                        <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">Tipo do Anúncio</span>

                        <Options />

                    </div>


                </div>
            </Container>


            <Footer />

        </div>
    )
}