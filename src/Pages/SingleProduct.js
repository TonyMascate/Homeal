import React, { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { AddToCart, LikeBtn } from "../Composants";
import { useProductContext } from "../context/ProductContext";
import Categories from "../datas/MealsPerCategorie";
import styles from "../styles/variable";

function SingleProduct() {
  const { getSingleProduct, singleProduct } = useProductContext();
  const { id } = useParams();
  const urlProduct = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const price = Categories.flat().find((item) => item.idMeal === id).price;
  const {
    idMeal,
    strMeal: name,
    strMealThumb: image,
    strCategory: category,
    strArea: origine,
    strInstructions: instructions,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  } = singleProduct;
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  ];
  const mesures = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  ];

  useEffect(() => {
    getSingleProduct(urlProduct);
  }, [urlProduct]);

  const getYoutube = () => {
    if (strYoutube) {
      const youtube = strYoutube.replace("watch?v=", "embed/");
      return youtube;
    } else {
      return null;
    }
  };

  const youtube = getYoutube();

  return (
    <Wrapper className="page-100">
      <div
        className="image"
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <div className="content">
        <h3 className="name">{name}</h3>
        <p className="header">Catégorie : {category}</p>
        <p className="header">Origine : {origine}</p>
        <h4>Ingrédients :</h4>
        <div className="ingredients">
          {ingredients.map((item, index) => {
            if (item) {
              return (
                <div className="ingredient" key={index}>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${item}.png`}
                    alt="produit utilisé dans la recette"
                  />
                  <p>
                    {mesures[index]} {item}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="price">
          <h4>Prix :</h4>
          <p>{price} €</p>
        </div>
        <div className="buttons">
          <AddToCart id={id} image={image} name={name} price={price}/>
          <LikeBtn id={idMeal} name={name} image={image} price={price} />
        </div>
        <div className="preparation">
          <h4>Préparation :</h4>
          <p>{instructions}</p>
        </div>
        <div className="video">
          <h4>Vidéo :</h4>
          <div className="wrapper">
            {youtube && (
              <iframe src={youtube} title="Video de la recette"></iframe>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1100px;
  margin: auto;
  color: ${styles.darkgrey};
  .image {
    width: 100%;
    background-position: center;
    background-size: cover;
    height: 35vh;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 10vh;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
    }
  }
  .content {
    padding: 10px;
    h3 {
      font-size: 1.5rem;
      font-weight: 900;
    }
    h4 {
      margin-top: 10px;
      font-size: 1.1rem;
      flex-wrap: 900;
    }
    .header {
      font-weight: 700;
      color: ${styles.darkgrey75};
      margin: 3px 0;
    }
    .ingredients {
      display: flex;
      margin: 0 -10px 10px -10px;
      overflow-x: auto;
      padding: 15px 0px 25px 10px;
      .ingredient {
        display: flex;
        min-width: fit-content;
        align-items: center;
        justify-content: center;
        height: 60px;
        padding: 5px 8px;
        box-shadow: ${styles.blackshadow};
        border-radius: 15px;
        margin-right: 10px;
        img {
          height: 100%;
        }
      }
    }
    .price {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      line-height: auto;
      h4 {
        margin: 0;
        margin-right: 10px;
      }
      p{
        font-size: 1.5rem;
      }
    }
    .buttons {
      max-width: 320px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      button{
        max-width: 250px;
        margin: 5px 0;
      }
    }
    .preparation {
      margin-top: 20px;
      p {
        margin: 10px 0;
        text-align: justify;
      }
    }
    .video {
      max-width: 700px;
      h4 {
        margin-bottom: 10px;
      }
      .wrapper {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media screen and (min-width: 1100px) {
    .image {
      height: 40vh;
      &::after {
        display: none;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .ingredients {
      overflow-x: hidden;
      flex-wrap: wrap;
      .ingredient {
        margin: 5px 0;
      }
    }
  }
`;

export default SingleProduct;
