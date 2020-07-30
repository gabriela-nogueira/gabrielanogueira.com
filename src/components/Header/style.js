import styled from "styled-components"
import { Link } from 'gatsby'

export const Title = styled(Link)`
    font-family: 'Orbitron', sans-serif;
    font-size:1.60rem;
    padding-top: 0.50rem;
    letter-spacing:0.13rem;
    margin-top:0.60rem;
    position: relative;
    text-decoration:none;
`

export const LogoImg = styled.img`
    width:400px;
    height:37px;
`

export const Info = styled.div`
    color: #fea5ad;
    font-family: 'Roboto Slab', serif;
    float:left;
    font-size:0.90rem;
    margin-top: 0.75rem;
    padding-right: 0.25rem;
    display: inline-block;
    position: relative;
`

export const Option = styled.a`
    text-decoration:none;
    font-family: 'Roboto Slab', serif;
    font-size:0.90rem;
    padding-top: 0.75rem;
    display: inline-block;
    color:white;
    position: relative;
`

export const LinkOption = styled(Link)`
    text-decoration:none;
    font-family: 'Roboto Slab', serif;
    font-size:0.90rem;
    color:white;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    transition:0.5s;
    position: relative;

    &:hover {
        color:#ff6464;
        transition:0.5s;
    }

`

export const LinkTeste = styled.a`
    text-decoration:none;
    font-family: 'Roboto Slab', serif;
    font-size:0.90rem;
    color:white;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    transition:0.5s;

    &:hover {
        color:#ff6464;
        transition:0.5s;
    }
`

export const navBar = styled.div `
    margin-bottom:0.05rem;
`
export const HeadWrapper = styled.div`
    margin-top:0.8rem;
`



