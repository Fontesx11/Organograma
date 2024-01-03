import './CardDesenvolvedor.css'

const CardDesenvolvedor = ({nome, cargo, imagem, corCard}) => {
    
    return(
        <div className='colaborador'>
            <div style={{backgroundColor: corCard}} className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>


        </div>
    )
}

export default CardDesenvolvedor