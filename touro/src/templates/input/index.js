

export default function Input(props){

    return(
        <div className={"bg-white border rounded-full z-10 w-full flex items-center px-5 " + props.className}>
            <input type={props.type} className="w-full h-12 text-sm outline-none" placeholder={props.placeholder} />
        </div>
    )
}