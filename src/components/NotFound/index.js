import React from 'react'
import * as S from './style'

const NotFoundPage =({children}) => {
    return (
        <S.MainWrapper>
            <S.Img src={'comecome.gif'}></S.Img>
            <S.Texto>Opssss, alguém comeu o conteúdo que tinha aqui!</S.Texto>
        </S.MainWrapper>
    )
}

export default NotFoundPage