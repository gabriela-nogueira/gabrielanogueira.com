import React from "react"
import * as S from './style'
import Img from "./logo2.png"

const Header = ({ children }) => {
    return (
        <>
        <S.HeadWrapper>
        <S.Title to="/"><S.LogoImg src={Img} /></S.Title>
        <S.navBar>
        <S.Info>root@gabrielapc:~$ </S.Info>
            <S.Option> cd
            <S.LinkOption to='/'> Inicio </S.LinkOption>
            <S.LinkOption to='/'> Sobre </S.LinkOption>
            <S.LinkTeste href="https://github.com/gabriela-nogueira" target="_blank"> Github</S.LinkTeste>
            <S.LinkOption to='/projetos'> Projetos</S.LinkOption>
            <S.LinkOption to='/analise'> Analise</S.LinkOption>
            <S.LinkOption to='/engenharia'> Engenharia</S.LinkOption>
            <S.LinkOption to='/visualizacao'> Visualização</S.LinkOption>
            <S.LinkOption to='/programacao'> Programação</S.LinkOption>
        </S.Option>
        </S.navBar>
        </S.HeadWrapper>
        </>
    )
}

export default Header