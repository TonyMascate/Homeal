import React from "react";
import styled from "styled-components";
import { LikeBtn, PageHero } from "../Composants";
import { useProductContext } from "../context/ProductContext";
import styles from "../styles/variable";

function Likes() {
  const { likes } = useProductContext();

  return (
    <Wrapper className="page-100">
      <PageHero title="Vos likes" />
      <div className="content">
        <h2>Vos recettes sauvegardées</h2>
        <div className="underline"></div>
        <div className="likes-list">
          <div className="likes-item">
            <img
              src="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"
              alt="representation de la recette"
            />
            <div className="text">
              <div className="top">
                <div className="info">
                  <h3>Nom</h3>
                  <p>9,99 €</p>
                </div>
                <LikeBtn className="likebtn" />
              </div>
              <button className="btn-primary">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    color: ${styles.darkgrey};
    h2 {
      font-size: 2rem;
      text-align: center;
    }
    .underline {
      width: 90vw;
      max-width: 800px;
      height: 2px;
      background-color: ${styles.navgrey};
      margin: 20px 0;
    }
    .likes-list {
      max-width: 1100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .likes-item {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        position: relative;
        width: 95vw;
        max-width: 300px;
        overflow: hidden;
        background-color: ${styles.navgrey};
        border-radius: 25px;
        padding: 10px;
        box-shadow: ${styles.blackshadow};
        img {
          width: 100%;
          flex-grow: 1;
          margin-right: 10px;
          border-radius: 25px;
        }
        .text {
          width: 100%;
          .top {
              display: flex;
              align-items: center;
              justify-content: space-between;
            .info {
              h3 {
                font-size: 2.3rem;
                font-weight: 900;
              }
              p {
                font-size: 1.1rem;
              }
            }
          }
          .btn-primary{
              margin-top: 10px;
              width: 100%;
          }
        }
      }
    }
  }
`;

export default Likes;
