import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Form.css'

const Formulario = (props) => {

    const [cargo, setCargo] = useState('');
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');



    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log(nome)
        console.log("Form Submetido: ", nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        }
        )
       setNome('')
       setTime('')
       setCargo('')
       setImagem('')
       
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    aoAlterado={value=> setCargo(value)} 
                    value={cargo} label="Cargo" 
                    placeholder="Digite seu cargo" 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    aoAlterado={value=> setNome(value)} 
                    value={nome} label="Nome" 
                    placeholder="Digite seu nome" 
                />
                <CampoTexto 
                    label="Imagem" 
                    aoAlterado={value=> setImagem(value)} 
                    value={imagem} 
                    placeholder="Digite o user github" 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    aoAlterado={value=> setTime(value)} 
                    value={time} 
                    label="Time " 
                    itens={props.times}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario