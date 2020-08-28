import styled from "styled-components"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const Conteudo = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    float:left;
    text-align: justify;
    position: relative;
`



export const PostItemLink = styled(Link) `
    color:#ffb6b9;
    display:flex;
    text-decoration:none;
    transition:0.5s;
    width:100%;

    &:hover {
        color:#ffb99a;
        transition:0.5s;
    }
`

export const PostItemWrapper = styled.section`
    display:flex;
    width:100%;
    position: relative;
    margin-right:0.90rem;
    margin-bottom: -0.5rem;
    
`

export const PostItemTag = styled.div`
    align-items:center;
    background:black;
    border-radius: 0px 6px 6px 0px;
    color: white;
    display:flex;
    font-size:0.75rem;
    font-weight:700;
    justify-content: center;
    min-height:20px;
    padding-left:0.30rem;
    padding-right:0.30rem;
    text-transform: uppercase;
    position: absolute;
    margin-top:1rem;
    position: absolute;
`

export const PostItemInfo = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:1.5rem;
`

export const PostItemDate = styled.time`
    font-size: 0.80rem;
    color:white;
    position: absolute;
    font-family: 'Roboto Condensed', sans-serif;
    margin-top:0.25rem;
`

export const PostItemImage = styled.img`
    width:95%;
    margin-top:1.15rem;
    border-radius: 0px 7px 7px 7px;
    height:400px;
    
`

export const PostItemTitle = styled.h1`
    margin-top:0.75rem;
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
    width:98%;
`

export const Descricao = styled.div`
    color:white;
    font-family: 'Roboto Condensed', sans-serif;
    font-size:0.90rem;
    display:flex;
    margin-top:0.30rem;
    line-height: 1rem;
`

export const Container = styled.div`
    width:95%;
    height:auto;
    position: relative;
    border-radius: 8px;
    transition:1s;
`

export const imgTeste = styled.img`
    display: block;
    width: 31.25rem;
    height: 300px;
    border-radius:4px;
    object-fit: cover;
    filter:grayscale(100%) contrast(150%);
`

export const ImgGt = styled(Img)`
    display: block;
    width: 31.25rem;
    height: 300px;
    border-radius:4px;
    object-fit: cover;
    filter:grayscale(100%) contrast(150%);
`


export const Top = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 31.25rem;
    opacity: 0.40;
    transition: .5s ease;
    background-color: #f3e1e1;
    border-radius:8px;
    &:hover {
        opacity: 0.70;
        transition:1s;
    }
`

export const titleTeste = styled.div`
    position: absolute;
    float:left;
    color:black;
    font-size:1.75rem;
    top:60%;
    padding:1.5rem;
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
    transition:0.5s;
    text-shadow: 1px 1px 4px white;

    &:hover {
        color:#c70039;
        transition:0.5s;
    }
`

export const dataPost = styled.div`
    position: absolute;
    float:left;
    padding:1.5rem;
    color:#2f2519;
    font-family: 'Roboto Condensed', sans-serif;
    font-size:0.8rem;
    top:80%;
    font-weight:800;
`