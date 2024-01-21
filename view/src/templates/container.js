


export default function Container(props){



    return(
        <div className={"p-5 md:p-10 " + (props.className ? props.className : "")}>
            {props.children}
        </div>
    )
}