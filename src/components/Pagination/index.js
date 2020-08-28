import React from 'react'
import * as S from './style'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
      
        {!isFirst && 
        
        <Link to={prevPage}>Página Anterior</Link>
        
        }
      
    
        <p>{currentPage} de {numPages}</p>
      

        
        {!isLast && 
            <Link to={nextPage}>Próxima Página</Link>
        }
       
    

    
        
    </S.PaginationWrapper>

)

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPage: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string
}

export default Pagination