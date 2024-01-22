


export default function Container(props){



    return(
        <div className={"dark:bg-stone-950 p-5 md:p-10 " + (props.className ? props.className : "")}>
            {props.children}
        </div>
    )
}