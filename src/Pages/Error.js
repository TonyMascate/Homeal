import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../styles/variable'

function Error() {
    return (
        <Wrapper>
            <h1>Cette page n'existe pas...</h1>
            <Link to='/' className="btn-primary">
                RETOUR À L'ACCUEIL
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    color: ${styles.darkgrey};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 74vh;
    h1{
        font-size: 3rem;
        margin-bottom: 50px;
        text-align: center;
    }
`

export default Error
