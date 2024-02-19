import { Link } from "react-router-dom";

export default function Logo(props) {


    return (
        <Link to="/">
            <p className={"text-md font-bold text-primary font-montserrat " + props.className}>tourotank</p>
        </Link>
    )
}