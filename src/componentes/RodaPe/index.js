import './rodape.css'

const RodaPe = () => {

   

    return (
        <footer className='fotter'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='x.com' target='_blank'>
                            <img src='/imagens/tw.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='/imagens/ig.png' alt=''/>
                        </a>
                    </li>
                </ul>
                </section>
                <section>
                    <img src='/imagens/logo.png' alt=''/>
                </section>
                <section>
                    <p style={{fontWeight: 'bold', fontSize: '18px'}} >Desenvolvido por Diogo Fontes</p>
                </section>
            
        </footer>
    )
}


export default RodaPe