import './Rodape.css'

const Rodape = () => {
    return (
        <section className='section-rodape'>
            <div>
                <ul className='lista-icones'>
                    <li>
                        <a href="https://www.instagram.com/Luander41/" target='__blank'>
                            <img src="../imagens/ig.png" alt="" className='icone' />
                        </a>
                    </li>
                </ul>
            </div>
            <div  className='logo'>
                <img src="../imagens/logo.png" alt="Logo organo" className='icone-organo' />
            </div>
            <div className='desenvolvimento'>
                <p>Desenvolvido por Luander</p>
            </div>
        </section>
    )
}


export default Rodape 