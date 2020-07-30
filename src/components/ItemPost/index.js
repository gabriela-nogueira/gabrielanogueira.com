import React from "react"
import * as S from './style'
import { Link } from 'gatsby'
import img2 from "../../../src/images/post-2.jpg"
import PropTypes from 'prop-types'

const ItemPost = ({slug,title, date, timeToRead, tag }) => (
    <>
    <S.Conteudo>
    <S.PostItemLink to={slug}>
        <S.PostItemWrapper>
            <S.PostItemInfo>
                <S.Container>
                    <S.imgTeste src={img2}></S.imgTeste>
                    <S.Top></S.Top>
                    <S.titleTeste>{title}</S.titleTeste>
                    <S.dataPost>{date} • {timeToRead} min de leitura</S.dataPost>
                </S.Container>
                <S.PostItemTag>{tag}</S.PostItemTag>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
    </S.Conteudo>
    </>
)

ItemPost.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
}

export default ItemPost