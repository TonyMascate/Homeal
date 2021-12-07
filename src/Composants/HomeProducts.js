import React, { useState } from "react";
import styled from "styled-components";
import { NextBtn, PrevBtn } from "./index";
import { useProductContext } from "../context/ProductContext";
import HomeProductCard from "./HomeProductCard";
import { Link } from "react-router-dom";

function HomeProducts() {
  const { homeproducts, productsIndex } = useProductContext();

  return (
    <Wrapper>
      <div className="custom-shape-divider-top-1638371894">
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
      <h2 className="title">Nos recettes</h2>
      <div className="underline"></div>
      <div className="recette-list">
        {homeproducts.map((item, personIndex) => {
          const { idMeal: id } = item;
          let position = "stockSlide";
          if (personIndex === productsIndex) {
            position = "activeSlide";
          }
          if (
            personIndex === productsIndex + 1 ||
            (productsIndex === homeproducts.length - 1 && personIndex === 0)
          ) {
            position = "nextSlide";
          }
          if (
            personIndex === productsIndex - 1 ||
            (productsIndex === 0 && personIndex === homeproducts.length - 1)
          ) {
            position = "lastSlide";
          }
          if (
            personIndex === productsIndex - 2 ||
            (productsIndex === 0 && personIndex === homeproducts.length - 2)
          ) {
            position = "prevStock";
          }
          if (
            personIndex === productsIndex - 2 ||
            (productsIndex === 1 && personIndex === homeproducts.length - 1)
          ) {
            position = "prevStock";
          }
          return <HomeProductCard key={id} {...item} position={position} />;
        })}
        <NextBtn className="slideBtn" />
        <PrevBtn className="slideBtn" />
      </div>
      <Link to='/categories' className='btn-primary btn-marginleft'>
        NOS RECETTES
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  .recette-list {
    max-width: max-content;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow-x: auto;
  }
  .custom-shape-divider-top-1638371894 {
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
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
  @media only screen and (min-width: 991px) {
    align-items: center;
    h2{
      margin-left: 0;
    }
    .recette-list {
      max-width: 900px;
      width: 100%;
      overflow: hidden;
    }
  }
`;

export default HomeProducts;
