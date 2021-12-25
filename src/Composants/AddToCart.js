import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/variable";

function AddToCart() {
  return (
    <Wrapper className="btn-primary">
      <div className="text">Ajouter au panier</div>
      <div className="icon-container">
        <FaShoppingCart className="icon" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 0;
  height: 54px;
  overflow: hidden;
  cursor: pointer;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    text-align: center;
    padding: 10px;
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background-color: ${styles.primary};
    position: relative;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.1;
        z-index: 0;
    }
    .icon {
      height: 24px;
      width: 24px;
      z-index: 1;
    }
  }
`;

export default AddToCart;
