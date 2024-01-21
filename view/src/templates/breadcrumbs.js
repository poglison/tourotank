import { useEffect, useState } from "react";


export default function Breadcrumbs(props) {

    const [history, setHistory] = useState([])

    useEffect(() => {
        setHistory(props.history)
    }, [props.history])


    return (
        <div className='h-10 flex items-center'>


            {
                history?.map((item, index) => {
                    return (
                        <div key={index} className='flex items-center'>
                            <div className='text-stone-700 dark:text-stone-200 text-sm mr-3 cursor-pointer hover:text-primary'>
                                {item.title}
                            </div>
                            {
                                index < history.length - 1 ?
                                    <div className='text-stone-700 dark:text-stone-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-3">
                                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                    :
                                    ''
                            }
                        </div>
                    )
                })
            }


        </div>
    )
}