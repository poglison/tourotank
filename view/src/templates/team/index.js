import { useEffect } from "react"


export default function Team(props) {

    useEffect(() => {
        if (props.type == "new") {
            props.setTeam([
                { name: "Nome", rule: "CEO", description: "" },
            ])
        }
    }, [])


    return (
        <div className="mt-10">

            <span className="text-ibm text-lg font-medium mb-4 block text-zinc-800">Team</span>


            {/* <div className="w-full h-44 border-[1.5px] border-zinc-300 rounded-lg p-6 flex items-center">
                <div className="bg-zinc-300 w-10 min-w-10 h-10 md:w-28 md:min-w-28 md:h-28 rounded-full" />

                <div className="w-full h-full ml-6 flex flex-col justify-center">

                    {props.type == "new" ?
                        <div className="flex items-center">
                            <input className="text-zinc-700 text-xl font-medium outline-none placeholder:font-normal" placeholder="Digite o nome do CEO" />
                            <span className="text-primary text-sm font-bold ml-4">CEO</span>
                        </div>
                        :
                        <div className="flex items-center">
                            <span className="text-zinc-700 text-xl font-medium">Alan Hui</span>
                            <span className="text-primary text-sm font-bold ml-4">CEO</span>
                        </div>
                    }


                    {props.type == "new" ?
                        <textarea className="mt-2 text-sm block w-full h-16 overflow-hidden outline-none resize-none" placeholder="Digite uma descrição do CEO" />
                        :
                        <span className="mt-2 text-sm block w-full h-16 overflow-hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.
                        </span>
                    }
                </div>
            </div> */}


            <div className="flex flex-col xl:flex-row xl:flex-wrap mt-4">

                {props.team.map((person, index) => {
                    return (
                        <div className={"mt-4 h-48 xl:w-[calc(33%-8px)] mb-0 w-full border-[1.5px] border-zinc-300 rounded-lg p-4 flex flex-col items-center " + ((index % 3 != 2) ? "mr-4" : "")}>
                            <div className="w-full flex items-center justify-between mb-2">
                                {props.type == "new" ?
                                    <div className="w-full h-4 flex">
                                        <input className="text-zinc-700 text-base font-normal w-1/2 outline-none" placeholder={person.name} />
                                        <input className="text-zinc-400 text-sm font-normal w-1/2 ml-4 outline-none text-end" placeholder={person.rule} />
                                    </div>
                                    :
                                    <div className="w-full h-4 flex justify-between">
                                        <span className="text-zinc-700 text-base font-medium">{person.name}</span>
                                        <span className="text-zinc-400 text-sm font-bold ml-4">{person.rule}</span>
                                    </div>
                                }
                            </div>
                            <div className="bg-zinc-300 w-28 min-w-28 h-28 min-h-28 rounded-full" />
                        </div>
                    )
                })
                }

                {props.type == "new" &&
                    <div onClick={() => props.setTeam([...props.team, { name: "Nome", rule: "CARGO" }])} className="mt-4 h-48 xl:w-[calc(33%-8px)] mb-4 xl:mb-0 w-full border-[1.5px] border-zinc-300 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-zinc-50 text-zinc-500 cursor-pointer">

                        <div className="bg-zinc-300 w-28 min-w-28 h-28 min-h-28 rounded-full flex justify-center text-7xl pt-3.5 select-none">
                            +
                        </div>
                    </div>
                }
            </div>


        </div >
    )
}