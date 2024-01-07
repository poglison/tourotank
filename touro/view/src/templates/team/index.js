

export default function Team() {


    return (
        <div className="mt-10">

            <span className="text-ibm text-lg font-medium mb-4 block text-zinc-800">Team</span>


            <div className="w-full h-44 border border-zinc-300 rounded-lg p-6 flex items-center">
                <div className="bg-zinc-300 w-28 min-w-28 h-28 rounded-full" />

                <div className="w-full h-full ml-6 flex flex-col justify-center">
                    <div className="flex items-center">
                        <span className="text-zinc-700 text-xl font-medium">Alan Hui</span>
                        <span className="text-primary text-sm font-bold ml-4">CEO</span>
                    </div>

                    <span className="mt-2 text-sm block w-full h-16 overflow-hidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra elit eget enim porttitor dictum. Morbi bibendum, sem et malesuada vestibulum, sem urna pharetra sem, eu pretium mi erat euismod magna. Mauris non sapien nisi. Ut gravida finibus aliquam. Vivamus lobortis, lacus nec iaculis molestie, eros nisi blandit diam, at porta justo ex vel tellus. Maecenas id aliquet libero. Phasellus auctor bibendum augue, accumsan sodales lorem tristique quis. Nulla facilisi. Etiam quis risus id ligula dignissim efficitur id et nibh. Suspendisse potenti. Donec metus quam, tempor eu efficitur volutpat, tincidunt vel purus. Curabitur commodo nulla at cursus eleifend. Nullam felis diam, imperdiet sed vulputate ut, euismod quis augue.
                    </span>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row mt-4">

                <div className="lg:w-1/3 mb-4 lg:mb-0 w-full border border-zinc-300 rounded-lg p-4 mr-4 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between mb-2">
                        <span className="text-zinc-700 text-base font-medium">Surie Hang</span>
                        <span className="text-zinc-400 text-sm font-bold ml-4">DEV</span>
                    </div>
                    <div className="bg-zinc-300 w-28 min-w-28 h-28 min-h-28 rounded-full" />
                </div>

                <div className="lg:w-1/3 mb-4 lg:mb-0 w-full border border-zinc-300 rounded-lg p-4 mr-4 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between mb-2">
                        <span className="text-zinc-700 text-base font-medium">Duke Jiang</span>
                        <span className="text-zinc-400 text-sm font-bold ml-4">DEV</span>
                    </div>
                    <div className="bg-zinc-300 w-28 min-w-28 h-28 min-h-28 rounded-full" />
                </div>

                <div className="lg:w-1/3 mb-4 lg:mb-0 w-full border border-zinc-300 rounded-lg p-4 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between mb-2">
                        <span className="text-zinc-700 text-base font-medium">Dennis Chan</span>
                        <span className="text-zinc-400 text-sm font-bold ml-4">DEV</span>
                    </div>
                    <div className="bg-zinc-300 w-28 min-w-28 h-28 min-h-28 rounded-full" />
                </div>

            </div>
        </div>
    )
}