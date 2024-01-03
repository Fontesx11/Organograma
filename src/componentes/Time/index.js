import CardDesenvolvedor from '../CardDesenvolvedor'
import './time.css'

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return(
    
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <CardDesenvolvedor key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corCard={props.corPrimaria}/>)}

            </div>
        </section>
        
    )
        
    

}

export default Time