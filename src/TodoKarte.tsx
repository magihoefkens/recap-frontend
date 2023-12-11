import {Todo} from "./App.tsx";

type TodoKarteProps={
    todo:Todo

}

export default function TodoKarte(props:TodoKarteProps){
    return(
        <>
            <p>{props.todo?.description}</p>
            <p>{props.todo?.status}</p>
        </>
    )
}