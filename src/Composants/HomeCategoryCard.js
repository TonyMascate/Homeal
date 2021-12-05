import React from 'react'
import styled from 'styled-components'
import styles from '../styles/variable';

function HomeCategoryCard({strCategory: name, strCategoryThumb: image}) {
    return (
      <Wrapper>
        <h3>{name}</h3>
        <img src={image} alt="description du produit" />
      </Wrapper>
    );
}

const Wrapper = styled.article`
    min-width: 200px;
    width: 100%;
    height: 200px;
    background-color: ${styles.lightgrey};
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: -1;
    margin-right: 20px;
    h3{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        z-index: 1;
    }
    img{
        width: 100%;
    }
    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: ${styles.darkgrey};
        opacity: 0.5;
        z-index: 0;
    }
`

export default HomeCategoryCard
