import { useEffect, useState } from "react";


export default function Buttons(props) {


    return (
        <div className="w-full flex items-center border dark:border-stone-700 h-12 rounded-lg">


            {props.buttons?.map((button, index) => {
                return (

                    <div onClick={() => props.selectedInformation ? props.setSelectedInformation(index + 1) : null} className={"text-stone-600 dark:text-stone-300 min-w-24 h-full px-6 flex items-center justify-center hover:bg-stone-50 dark:hover:bg-stone-900 border-r dark:border-r-stone-800 cursor-pointer " + ((index == 0 ? 'rounded-l-lg' : index == props.buttons.length - 1 || props.buttons.length == 1 ? 'rounded-r-lg !border-0' : '') + ((props.selectedInformation == index + 1) ? ' bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100': '')) + (props.buttons.length > 1 ? (" w-1/" + props.buttons.length) : " w-full rounded-full border-r-0 !text-stone-600")}>
                        {button.icon}


                        <span className="text-sm">{button.text}</span>
                    </div>
                )
            })}


        </div>
    )
}