import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...` //`` usado para concatenação com a string
   
    const aoDigitar = (evento) => {
       props.aoAlterado(evento.target.value)
    }


    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto