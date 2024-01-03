import './ListaSuspensa.css'

const ListaSuspensa = (props) => {


    const aoSelecionar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={aoSelecionar} value={props.value} >
            
                {props.itens.map(item=>{
                    return <option key={item}>{item}</option> // Interação para retorna uma tag option para cada item
                })}
                
            </select>
        </div>


    )
}

export default ListaSuspensa