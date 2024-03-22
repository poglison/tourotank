

export default function Button(props){


    if(props.type == "primary"){
        return(
            <button className={"bg-primary text-white hover:bg-white dark:hover:bg-stone-850 hover:text-primary border border-primary px-4 py-2 rounded-full transition-all " + props.className}>{props.children}</button>
        )
    } else if(props.type == "secondary"){
        return(
            <button className={"bg-white dark:bg-stone-850 text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 rounded-full transition-all " + props.className}>{props.children}</button>
        )
    } else if(props.type == "tertiary"){
        return(
            <button className={"bg-transparent dark:bg-stone-850 text-stone-800  px-4 py-2 rounded-full transition-all " + props.className}>{props.children}</button>
        )
    } else{
        return(
            <button className={"bg-white dark:bg-stone-850 text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 rounded-full transition-all " + props.className}>{props.children}</button>
        )
    }
  
}