import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...` //`` usado para concatenação com a string
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto