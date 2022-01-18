import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useCartContext } from '../context/CartContext';
import styles from '../styles/variable'
import formatPrice from '../utils/helper'

function CartSubtotal() {

    const {total_price, livraison} = useCartContext()

    return (
      <Wrapper>
        <div className="element">
          <p>Sous-total :</p>
          <p className="price">{formatPrice(total_price)}</p>
        </div>
        <div className="element">
          <p>dont TVA :</p>
          <p className="price">{formatPrice(total_price * 0.2)}</p>
        </div>
        <div className="element">
          <p>Livraison :</p>
          <p className="price">{formatPrice(livraison)}</p>
        </div>
        <div className="underline"></div>
        <div className="element">
          <p>Total :</p>
          <p className="price">{formatPrice(total_price + livraison)}</p>
        </div>
        <Link to='/paiement' className="btn-primary">Passer au paiement</Link>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  border-radius: 15px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 450px;
  margin-top: 50px;
  .element {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
    .price {
      font-weight: 800;
    }
  }
  .underline {
    margin: 5px 0;
    height: 1px;
    background-color: ${styles.darkgrey40} !important;
  }
  button {
    margin-top: 15px;
  }

  @media screen and (min-width: 768px){
      margin-top: 0px;
      flex-grow: 1;
      width: 100%;
  }
`;

export default CartSubtotal
