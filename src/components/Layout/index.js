import React from "react"
import * as S from "./style"
import GlobalStyles from "../../styles/global"
import Particles from "react-particles-js"
import Header from "../Header"
import Footer from "../Footer"
import Pagination from "../Pagination"


const Layout = ({ children }) => {
  return (
	<>
    <S.LayoutWrapper>
      <GlobalStyles/>
      <S.EffectLayout>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 250,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": false,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": false,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
    
      </S.EffectLayout>
      <S.LayoutMain>
		  <Header></Header>
		  {children}
	   </S.LayoutMain>
	   
    </S.LayoutWrapper>
	</>
  )
}


export default Layout
