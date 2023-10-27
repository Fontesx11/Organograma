import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`
    console.log("Avestruz")
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto