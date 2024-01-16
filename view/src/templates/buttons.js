import { useEffect, useState } from "react";


export default function Buttons(props) {


    return (
        <div className="w-full flex items-center border-[1.5px]   h-12 rounded-full">


            {props.buttons.map((button, index) => {
                return (

                    <div onClick={() => props.selectedInformation ? props.setSelectedInformation(index + 1) : null} className={"text-zinc-600 min-w-24 h-full px-6 flex items-center justify-center hover:bg-zinc-50 border-r-[1.5px]   cursor-pointer " + ((index == 0 ? 'rounded-l-full' : index == props.buttons.length - 1 || props.buttons.length == 1 ? 'rounded-r-full !border-0' : '') + ((props.selectedInformation == index + 1) ? ' bg-zinc-50 text-zinc-800': '')) + (props.buttons.length > 1 ? (" w-1/" + props.buttons.length) : " w-full rounded-full border-r-0 !text-zinc-600")}>
                        {button.icon}


                        <span className="text-sm">{button.text}</span>
                    </div>
                )
            })}


        </div>
    )
}