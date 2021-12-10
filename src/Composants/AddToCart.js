import React from 'react'
import styled from 'styled-components'

function AddToCart() {
    return (
        <Wrapper className='btn-primary'>
            AJOUTER AU PANIER
        </Wrapper>
    )
}

const Wrapper = styled.button`
    font-weight: 700;
    font-size: 1.2rem;
    padding: 10px 16px;
    min-height: 54px;
`

export default AddToCart
