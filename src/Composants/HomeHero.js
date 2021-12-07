import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import homehero from "../img/homehero.png";

function HomeHero() {

  return (
    <Wrapper className="container">
      <div className="content">
        <div className="text">
          <h2>Des recettes livrées chez vous</h2>
          <p>
            Notre gamme de recette gourmande vous donne envie ? <br />
            Nous vous livrons les ingrédients à domicile pour le plus grand
            plaisir de vos papilles.
          </p>
          <Link to="/" className="btn-primary">
            DÉCOUVRIR
          </Link>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1638283272">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 110vh;
  background: url(${homehero}) center;
  background-size: cover;
  position: relative;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
  }
  .content {
    height: 100vh;
    padding: 0 10px;
    display: flex;
    align-items: center;
    p {
      margin: 20px 0;
    }
  }
  .custom-shape-divider-bottom-1638283272 {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-bottom-1638283272 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 90px;
  }

  .custom-shape-divider-bottom-1638283272 .shape-fill {
    fill: #fea53d;
  }

  @media screen and (min-width: 768px){
    .content{
      justify-content: center;
    }
  }
`;

export default HomeHero;
