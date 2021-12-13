import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Categories from "../datas/MealsPerCategorie";
import styles from "../styles/variable";
import LikeBtn from "./LikeBtn";

function HomeProductCard({
  strMeal: name,
  strMealThumb: image,
  idMeal: id,
  position,
}) {
  const product = Categories.flat().find((item) => item.idMeal === id);

  return (
    <Wrapper className={position}>
      <img src={image} alt="representation de la recette" />
      <div className="text">
        <h3>{name}</h3>
        <div className="bottom">
          <h3>{product.price} €</h3>
          <div className="buttons">
            <Link to={`/products/${id}`} className="btn-primary">
              VOIR
            </Link>
            <LikeBtn />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 10px;
  margin: 0 10px;
  background-color: white;
  color: ${styles.darkgrey};
  min-width: 250px;
  border-radius: 15px;
  height: min-content;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 1px 2px ${styles.primary40},
    0px 2px 1px 2px ${styles.primary75};
  img {
    width: 100%;
    border-radius: 15px;
  }
  h3 {
    font-weight: 700;
    font-size: 1.5rem;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: inline-block;
    }
  }
  .bottom {
    width: 100%;
    h3 {
      padding-bottom: 5px;
      font-weight: 900;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex-grow: 1;
    width: 100%;
  }

  @media only screen and (min-width: 991px) {
    position: absolute;
    top: 50px;
    left: 0%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.3s linear;
    margin: 0;
    max-width: 250px;
  }
`;

export default HomeProductCard;
