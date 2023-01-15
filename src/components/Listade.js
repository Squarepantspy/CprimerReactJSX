//una funcion de javascript es escencialmente un componente para react tb se puede definir con class heredando de reactcomponent
const Lista =(props)=>{
    return (
        <div className="col-3">
        <ul className="list-group">
            <li >Aprender {props.name}</li>
            <li >Aprender Hooks</li>
            <li >Aprender Angular</li>
            <li >Aprender ux/ui</li>
            <li>Alimentar a los perritos</li>
        </ul>
        </div>
    )
}
export default Lista;