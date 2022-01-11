import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddToCart, LikeBtn } from ".";
import styles from "../styles/variable";

function LikeElement({ name, id, image, price }) {
  return (
    <Link to={`/products/${id}`}>
      <Wrapper>
        <div
          className="image"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="text">
          <div className="top">
            <div className="info">
              <h3>{name.length > 25 ? `${name.substring(0, 15)}...` : name}</h3>
              <p>{price} €</p>
            </div>
            <LikeBtn id={id} name={name} image={image} price={price} />
          </div>
          <AddToCart id={id} image={image} name={name} price={price} />
          <div class="custom-shape-divider-bottom-1640102104">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  width: 95vw;
  max-width: 300px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 30px;
  color: ${styles.darkgrey};
  .image {
    width: 100%;
    height: 250px;
    margin-right: 10px;
    background-position: center;
    background-size: cover;
  }
  .text {
    width: 100%;
    padding: 15px;
    position: relative;
    .top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .info {
        flex: 1;
        h3 {
          width: 100%;
          font-size: 1.8rem;
          font-weight: 900;
        }
        p {
          font-size: 1.1rem;
        }
      }
      .likebtn {
        width: 54px !important;
        height: 54px;
      }
    }
    .btn-primary {
      margin-top: 10px;
      width: 100%;
    }
    .custom-shape-divider-bottom-1640102104 {
      position: absolute;
      top: -39px;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1640102104 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 40px;
    }

    .custom-shape-divider-bottom-1640102104 .shape-fill {
      fill: #ffffff;
    }
  }
`;

export default LikeElement;
