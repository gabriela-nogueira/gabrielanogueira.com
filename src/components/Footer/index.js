import React from 'react'
import * as S from './style'

const Footer = ({children}) => {
    return (
        <>
        <S.FooterWrapper>
            <S.BlocoFooter>
            <S.Credito> 2020 | Made with Love - By <S.LinkExterno href="https://github.com/gabriela-nogueira">Gabi</S.LinkExterno></S.Credito>
            </S.BlocoFooter>
        </S.FooterWrapper>
        </>
        
    )
}

export default Footer