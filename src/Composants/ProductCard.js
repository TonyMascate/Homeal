import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import styles from '../styles/variable'

function ProductCard({strMeal: name, strMealThumb: image, price, idMeal: id}) {
    return (
        <Wrapper>
            <div className="image" style={{backgroundImage: 'url(' + image + ')'}}>
            </div>
            <div className="info">
                <h3>{name.length > 20 ? `${name.substring(0, 20)}...` : name}</h3>
                <p>{price} €</p>
                <Link to={`/products/${id}`} className="btn-primary">
                    VOIR LA RECETTE
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
  max-height: min-content;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 10px;
  overflow: hidden;
  color: ${styles.darkgrey};
  border-radius: 15px;
  box-shadow: ${styles.blackshadow};
  .image {
    width: 100%;
    min-height: 170px;
    background-size: cover;
    background-position: center;
    margin-right: 10px;
  }
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 1.5rem;
      text-align: center;
    }
    p{
        font-weight: 800;
        margin: 5px 0;
    }
    a{
        font-size: 1rem;
        padding: 10px;
    }
  }
`;

export default ProductCard
