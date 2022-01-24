import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageHero } from "../Composants";
import StripeCheckout from "../Composants/StripeCheckout";
import { useCartContext } from "../context/CartContext";
import styles from "../styles/variable";

function Paiement() {
  const { cart, livraison, total_price } = useCartContext();

  return (
    <Wrapper className="page-100">
      <PageHero title="Paiement" />
      <div className="content">
        <h2>Paiement</h2>
        <div className="underline"></div>
        <div className="paiement">
          {cart.length < 1 ? (
            <div className="no-content">
              <h3>Votre panier est vide...</h3>
              <Link to="/categories" className="btn-primary">
                Voir les recettes
              </Link>
            </div>
          ) : (
            <StripeCheckout />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .content {
    color: ${styles.darkgrey};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 30px auto;
    padding: 0 10px;
    .underline {
      height: 2px;
      width: 100%;
      margin-top: 20px;
      background-color: ${styles.navgrey};
    }
    .paiement {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
    .no-content {
      color: ${styles.darkgrey};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      margin-top: 50px;
      h3 {
        font-size: 1.3rem;
        margin-bottom: 20px;
        text-align: center;
      }
    }
  }
`;

export default Paiement;
