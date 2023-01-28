import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';

import './Pagination.css'

const PaginationPages = ({pages,currentPage, setCurrentPage }) => {
    return (
        <div>
            {Array.from(Array(pages), (movie, index) => {
                return <Pagination className='pagination-div'>

                    <Button style=
                     {index === currentPage ? {borderBottom:'3px solid orange'}:null}
                         variant='dark' className='button-pagination' value={index}
                     onClick={(e) => setCurrentPage(Number(e.target.value))}>
                        {index + 1}
                     </Button>
                    
                </Pagination>
            })}
        </div>
    )
}

export default PaginationPages