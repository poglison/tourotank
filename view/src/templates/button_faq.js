
export default function ButtonFAQ() {


    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-2 mt-8 w-full h-24 border-[1.5px] dark:border-stone-800  rounded-lg hover:bg-stone-50 dark:hover:bg-stone-900 cursor-pointer">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-stone-400 mr-4">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>



            <span className="text-sm md:text-base text-stone-700 dark:text-stone-200  mr-2">
                Procurando mais informações?
            </span>

            <span className="text-sm md:text-base text-stone-700 dark:text-stone-200  font-medium">
                Verifique as perguntas frequentes do projeto
            </span>

        </div>
    )
}