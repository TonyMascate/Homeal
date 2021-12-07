import React from 'react'
import styled from 'styled-components'
import styles from '../styles/variable'

function CategorieCard({strCategory: name}) {
    return (
        <Wrapper>
            <h2>{name}</h2>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    h2{
        color: ${styles.darkgrey}
    }
`

export default CategorieCard
