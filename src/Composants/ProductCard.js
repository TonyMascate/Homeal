import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddToCart, LikeBtn } from ".";
import styles from "../styles/variable";
import { FiZoomIn } from "react-icons/fi";
import { useProductContext } from "../context/ProductContext";
import Likes from "../Pages/Likes";
import { useLikesContext } from "../context/LikesContext";

function ProductCard({
  strMeal: name,
  strMealThumb: image,
  price,
  idMeal: id,
}) {

  const {products} = useProductContext()
  const {likes} = useLikesContext()

  let alreadyLiked = products.map(item => {
    if(likes.find(itemc => itemc.idMeal === item.idMeal)){
      return true
    }else {
      return false
    }
  })
  console.log(alreadyLiked);

  useEffect(() => {
    
  }, [])

  return (
      <Wrapper>
        <div
          className="image"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="info">
          <h3>{name.length > 20 ? `${name.substring(0, 20)}...` : name}</h3>
          <p>{price} €</p>
          <div className="buttons">
            <AddToCart />
        <LikeBtn id={id} name={name} image={image} price={price}/>
        <Link to={`/products/${id}`} className="zoom">
          <FiZoomIn className="zoomicon"/>
        </Link>
          </div>
        </div>
      </Wrapper>
  );
}

const Wrapper = styled.article`
  min-height: 400px;
  width: 95vw;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 10px;
  overflow: hidden;
  color: ${styles.darkgrey};
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  .image {
    width: 100%;
    flex-grow: 1;
    background-size: cover;
    background-position: center;
    border-radius: 0px 0 60px 60px;
  }
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    h3 {
      font-size: 1.5rem;
      text-align: center;
    }
    p {
      font-weight: 800;
      margin: 5px 0;
    }
    a {
      font-size: 1rem;
      padding: 10px;
    }
    .likebtn {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .zoom {
      position: absolute;
      top: 10px;
      left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 54px;
      height: 54px;
      background-color: ${styles.primary};
      border-radius: 100%;
      .zoomicon {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export default ProductCard;
