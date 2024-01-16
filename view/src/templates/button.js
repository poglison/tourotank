

export default function Button(props){


    if(props.type == "primary"){
        return(
            <button className={"bg-primary text-white hover:bg-white hover:text-primary border-[1.5px] border-primary px-4 py-2 rounded-full transition-all " + props.className}>{props.children}</button>
        )
    } else if(props.type == "secondary"){
        return(
            <button className={"bg-white text-primary hover:bg-primary hover:text-white border-[1.5px] border-primary px-4 py-2 rounded-full transition-all " + props.className}>{props.children}</button>
        )
    } else if(props.type == "tertiary"){
        return(
            <button className={"bg-transparent text-zinc-800  px-4 py-2 rounded-full transition-all " + props.className}>{props.children}</button>
        )
    } else{
        return(
            <button className={"bg-white text-primary hover:bg-primary hover:text-white border-[1.5px] border-primary px-4 py-2 rounded-full transition-all " + props.className}>{props.children}</button>
        )
    }
  
}