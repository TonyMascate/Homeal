import React from "react";
import styled from "styled-components";
import styles from "../styles/variable";
import { ImMinus, ImPlus } from "react-icons/im";
import { useCartContext } from "../context/CartContext";

function CartElement({ id, name, image, price, amount }) {
  const { increaseAmount, decreaseAmount, deleteCartItem } = useCartContext();

  return (
    <Wrapper>
      <div
        className="image"
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <div className="text">
        <p className="name">
          {name.length > 25 ? `${name.slice(0, 25)}...` : name}
        </p>
        <p className="price">{price} €</p>
        <div className="amount-section">
          <div className="amount-btns">
            <button
              className="amount-btn"
              onClick={() => decreaseAmount(id, amount)}
            >
              <ImMinus />
            </button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={() => increaseAmount(id)}>
              <ImPlus />
            </button>
          </div>
          <button className="delete" onClick={() => deleteCartItem(id)}>
            Supprimer
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  max-width: 450px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${styles.navgrey};
  border-radius: 15px;
  padding: 10px;
  box-shadow: ${styles.blackshadow};
  .image {
    margin-right: 10px;
    min-width: 100px;
    min-height: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 15px;
  }
  .text {
    max-width: 100%;
    min-height: 90px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    .name {
      font-size: 1.3rem;
      font-weight: 500;
    }
    .price {
      font-size: 1.6rem;
      font-weight: 900;
    }
    .amount-section {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .amount-btns {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        .amount {
          margin: 0 20px;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .amount-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          padding: 5px;
          border-radius: 8px;
          background-color: ${styles.tertiary};
          color: white;
          cursor: pointer;
          transition: 0.3s all ease;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      .delete {
        align-self: flex-end;
        color: ${styles.secondary};
        font-size: 1.2rem;
        font-weight: 600;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover {
          color: ${styles.tertiary};
          transform: scale(1.05);
        }
      }
    }
  }
`;

export default CartElement;
