import React from "react";
import styled from "styled-components";
import styles from "../styles/variable";
import { CartElement, CartSubtotal, PageHero } from "../Composants";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Panier() {
  const { cart } = useCartContext();

  return (
    <Wrapper className="page-100">
      <PageHero title="Panier" />
      <div className="content">
        <h2>Votre panier</h2>
        <div className="underline"></div>
        {cart.length < 1 ? (
          <div className="no-content">
            <h3>Votre panier est vide...</h3>
            <Link to="/categories" className="btn-primary">
              Voir les recettes
            </Link>
          </div>
        ) : (
          <div className="content-cart">
            <div className="cart-list">
              {cart.map((item) => {
                return <CartElement key={item.id} {...item} />;
              })}
            </div>
            <CartSubtotal />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .content {
    margin: auto;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${styles.darkgrey};
    width: 100%;
    .no-content {
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
    h2 {
      margin-bottom: 20px;
      text-align: center;
    }
    .underline {
      height: 2px;
      width: 100%;
      background-color: ${styles.navgrey};
    }
    .content-cart {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .cart-list {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px 0;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      padding: 20px;
      max-width: 1100px;
      .content-cart {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 20px 0;
        .cart-list {
          width: fit-content;
          margin-right: 50px;
          padding: 0;
          min-width: 400px;
        }
      }
    }
  }
  @media screen and (min-width: 900px) {
    .content {
      .content-cart {
        .cart-list {
          min-width: 450px;
        }
      }
    }
  }
`;

export default Panier;
