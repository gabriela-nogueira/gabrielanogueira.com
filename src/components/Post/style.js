import styled from "styled-components"

export const PostWrapper = styled.div`
    width: 70%;
    background-color:black;
    margin:auto;
    min-height: 100vh;
    position:relative;
    margin-top: 2rem;
`

export const HeaderPost = styled.div`
    width:80%;
    margin:auto;
`

export const TitlePost = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    font-size:2.5rem;
    text-align:center;
    padding:1rem;
    padding-top:2rem;
`

export const Tag = styled.h3`
    background-color:#be5683;
    width: 15%;
    padding:0.4rem;
    display:inline;
    border-radius:8px;
    font-weight: 900;
`

export const InfoPost = styled.div`
display: table;
margin: 0 auto;
    font-family: 'Raleway', sans-serif;
    font-size:0.85rem;
    padding-top:0.5rem;
`


export const MainContent = styled.section`
    padding:1rem;
    text-align: justify;
    font-family: 'Raleway', sans-serif;
    padding-top:2rem;
    font-size:1.2rem;
    p {
        padding-bottom:0.4rem;
        padding-top:0.4rem;
    }

    h2 {
        font-size:1.5rem;
        color: #be5683;
        padding: 0.5rem 0rem;
    }

    a {
        text-decoration:none;
        color:#fea5ad;
    }

    a.list {
        display:list-item;
        list-style-type: square;
        font-size:1rem;
        list-style-position: inside;
        margin-left:2rem;
    }

    .language-python {
        font-size:1rem;
    }
`
