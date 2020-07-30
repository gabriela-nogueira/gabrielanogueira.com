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
            <S.LinkOption to='/'> Analise</S.LinkOption>
            <S.LinkOption to='/'> Engenharia</S.LinkOption>
            <S.LinkOption to='/'> Visualização</S.LinkOption>
            <S.LinkOption to='/'> Programação</S.LinkOption>
        </S.Option>
        </S.navBar>
        </S.HeadWrapper>
        </>
    )
}

export default Header