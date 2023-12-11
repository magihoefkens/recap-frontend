import {Link} from "react-router-dom";

export default function Navigation(){
    return(
        <>
        <Link to={"/"}>Home</Link>
         <Link to={"/todo"}>To Do</Link>
        </>
    )
}