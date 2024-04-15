
export default function Settings(props) {


    return (
        <div className="mt-5 h-screen md:h-auto md:mt-0 md:ml-5 w-full border overflow-hidden border-stone-300 dark:border-stone-700 rounded-lg p-4">

            <span className="font-ibm font-medium text-xl text-stone-700 dark:text-stone-300">{props.option ? props.option : ""}</span>

            {/* <div className="bg-stone-900 rounded-lg w-full h-full flex items-center justify-center mb-4">

            


               

            </div> */}


        </div>
    )
}