import styled from "styled-components"

export const LayoutWrapper = styled.div`
  background-color:black;
  color:white;
  display:flex;
  width:100%;
`

export const EffectLayout = styled.div`
  width:100%;
  height:40%;
  position: absolute;
`

export const GradientLayout = styled.div`
  background: linear-gradient(to top,  black 0%, rgba(0,0,0,0.65) 100%);
  background-repeat:no-repeat;
  clear:both;
  position: relative;
  height:50%;
  bottom:5rem;
`

export const LayoutMain = styled.div `
  min-height: 100vh;
  margin:0 auto;
  width:80%;
`