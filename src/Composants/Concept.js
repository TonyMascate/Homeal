import React from "react";
import styled from "styled-components";
import styles from "../styles/variable";
import fruits from '../img/fruits.png'
import piment from '../img/piment.png'
import saumon from '../img/saumon.png'

function Concept() {
  return (
    <Wrapper>
      <div className="content">
        <h2>LE CONCEPT ?</h2>
        <div className="steps">
          <div className="item">
            <div className="number">
              <p>1</p>
            </div>
            <p>
              Visitez notre site pour découvrir une multitude de recettes
              gourmandes.
            </p>
          </div>
          <div className="item">
            <div className="number">
              <p>2</p>
            </div>
            <p>
              Une fois que vous avez trouvé une recette, commandez les
              ingrédients de celle-ci directement sur notre site.
            </p>
          </div>
          <div className="item">
            <div className="number">
              <p>3</p>
            </div>
            <p>
              Nous vous livrons les ingrédients à domicile et vous n’avez plus
              qu’à réaliser la recette.
            </p>
          </div>
        </div>
        <img src={saumon} alt="" className="saumon" />
        <img src={fruits} alt="" className="fruits" />
        <img src={piment} alt="" className="piment" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 30px 10px;
  background-color: ${styles.secondary};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    position: relative;
    z-index: 0;
    max-width: 900px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(196, 196, 196, 0.29);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(11.3px);
      -webkit-backdrop-filter: blur(11.3px);
      border: 1px solid rgba(196, 196, 196, 1);
      z-index: -1;
    }
    h2 {
      font-size: 2.2rem;
      margin: 10px 0;
      transform: rotate(-5deg);
      width: fit-content;
    }
    .steps {
      padding: 20px 0;
      .item {
        background-color: ${styles.lightgrey};
        color: ${styles.darkgrey};
        font-weight: 900;
        margin: 10px 0;
        padding: 15px 15px 15px 10px;
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 71px;
        .number {
          font-size: 2.2rem;
          color: ${styles.secondary};
          min-width: 42px;
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid ${styles.secondary};
          border-radius: 100%;
          margin-right: 10px;
          p {
            line-height: 100%;
          }
        }
      }
    }
    .saumon,
    .fruits,
    .piment {
      position: absolute;
      z-index: -2;
    }
    .piment {
      top: -150px;
      left: -200px;
      transform: rotate(150deg);
    }
    .saumon {
      bottom: -190px;
      left: -300px;
      transform: rotate(-10deg) scale(0.7);
    }
    .fruits {
      top: -130px;
      right: -200px;
      transform: rotate(-50deg) scale(0.7);
    }
  }
`;

export default Concept;
