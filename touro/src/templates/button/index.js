

export default function Button(props){



    return(
        <button className={"bg-primary text-white px-4 py-2 rounded-full " + props.className}>{props.children}</button>
    )
}