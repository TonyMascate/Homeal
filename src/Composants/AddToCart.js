import React, { useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/variable";
import { useCartContext } from "../context/CartContext";

function AddToCart({id, name, image, price}) {

  const {cart, addToCart, increaseAmount} = useCartContext()

  const inCart = () => {
    if (cart.find((item) => item.id === id) != null) {
      return true;
    } else {
      return false;
    }
  };

  const [active, setActive] = useState(false)

  const animateBtn = () => {
    setActive(true)
    setTimeout(() => {setActive(false)}, 3000);
  }

  return (
    <Wrapper
      className="btn-primary"
      disabled={active ? true : false}
      onClick={() => {
        animateBtn()
        if (inCart() === false) {
          addToCart(id, name, image, price);
        } else {
          increaseAmount(id);
        }
      }}
    >
      <div className={`button ${active && 'active'}`}>
        <div className="left">
          <p>Ajouté !</p>
          <div className="icon-container">
            <FaShoppingCart className="icon" />
          </div>
        </div>
        <div className="text">Ajouter au panier</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 0;
  height: 54px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    text-align: center;
    margin: auto;
    margin-left: 54px;
    line-height: 100%;
  }
  .active {
    .left {
      transform: translateX(0) !important;
    }
  }
  .button {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    .left {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      background-color: ${styles.secondary};
      transform: translateX(calc(-100% + 54px));
      transition: 0.7s ease all;
      p {
        color: ${styles.lightgrey};
        width: 100%;
        font-size: 1.5rem;
        text-align: center;
        line-height: 100%;
        letter-spacing: 3px;
      }
      .icon-container {
        height: 54px;
        min-width: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          height: 24px;
          width: 24px;
          z-index: 1;
        }
      }
    }
  }
`;

export default AddToCart;
