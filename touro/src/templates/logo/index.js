import { Link } from "react-router-dom";

export default function Logo(props) {


    return (
        <Link to="/">
            <p className={"font-bold text-primary font-montserrat " + props.size}>tourotank</p>
        </Link>
    )
}