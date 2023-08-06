import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            apelido,
            imagem,
            time
        })
        setNome('')
        setApelido('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha o formulário para criar o card de membro do Grupo.</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto valor={apelido} aoAlterado={valor => setApelido(valor)} obrigatorio={true} label="Apelido" placeholder="Digite seu Apelido" />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Informe a url da imagem" />
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} label="Cargo" itens={props.times} />
                <Botao texto="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario