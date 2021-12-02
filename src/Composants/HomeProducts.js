import React from "react";
import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import HomeProductCard from "./HomeProductCard";

function HomeProducts() {

    const {homeproducts} = useProductContext()

  return (
    <Wrapper className="container">
      <div class="custom-shape-divider-top-1638371894">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <h2>Nos recettes</h2>
      <div className="underline"></div>
      <div className="recette-container">
          <div className="recette-list">
              {homeproducts.map((item, index) => {
                  const {idMeal: id} = item
                  return(
                    <HomeProductCard key={id} {...item}/>
                  )
              })}
          </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding: 100px 10px;
  .recette-list{
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .custom-shape-divider-top-1638371894 {
    position: absolute;
    top: -2px;
    left: 0;
    width: 105%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1638371894 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 90px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1638371894 .shape-fill {
    fill: #fea53d;
  }
`;

export default HomeProducts;
