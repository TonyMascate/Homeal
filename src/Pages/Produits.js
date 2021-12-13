import React, { useEffect } from "react";
import styled from "styled-components";
import { PageHero, FilterSidebar } from "../Composants/index";
import { useProductContext } from "../context/ProductContext";
import styles from "../styles/variable";

function Produits() {

  const {products, showFilters, changeShowFilters, filters: {category}, updateProducts} = useProductContext()

  useEffect(() => {
    updateProducts()
  }, [category])

  return (
    <Wrapper className="page-100">
      <PageHero title="Produits" />
      <div className="content">
        <div className="filters-mobile">
          <div className="header">
            <button className="btn-primary" onClick={() => changeShowFilters()}>
              {showFilters ? "Filtres -" : "Filtres +"}
            </button>
            <div className="custom-select">
              <select name="sort" id="sort">
                <option value="prix (croissant)" data-label="croissant">
                  Prix (croissant)
                </option>
                <option value="prix (décroissant)" data-label="decroissant">
                  Prix (décroissant)
                </option>
                <option value="nom (a-z)" data-label="nomaz">
                  Nom (A - Z)
                </option>
                <option value="nom (z-a)" data-label="nomza">
                  Nom (Z - A)
                </option>
              </select>
              <span className="custom-arrow"></span>
            </div>
          </div>
          {showFilters && <FilterSidebar />}
          <div className="underline"></div>
        </div>
        <div className="filters-large"></div>
        <div className="products-list">
          {products.map(item => {
            return <p key={item.idMeal}>{item.strMeal}</p>
          })}
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
    .filters-large {
      display: none;
    }
    .filters-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      width: 100%;
      .header {
        width: 100%;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
          background-color: ${styles.secondary};
          border-radius: 25px;
          padding: 0px 18px;
          height: 40px;
          line-height: 100%;
        }
        .custom-select {
          position: relative;
          border-radius: 25px;
          overflow: hidden;
          select {
            font-size: 1rem;
            padding: 8.5px 30px 8.5px 15px;
            background: #4d5061;
            color: white;
            font-family: "Roboto Slab";
            border: 0;
          }
          .custom-arrow {
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            background: #3b3c47;
            height: 100%;
            width: 40px;
            pointer-events: none;
            &::after,
            &::before {
              --size: 0.6rem;
              content: "";
              position: absolute;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 0;
              height: 0;
            }
            &::before {
              border-left: var(--size) solid transparent;
              border-right: var(--size) solid transparent;
              border-bottom: var(--size) solid rgba(255, 255, 255, 0.7);
              top: 35%;
            }
            &::after {
              border-left: var(--size) solid transparent;
              border-right: var(--size) solid transparent;
              border-top: var(--size) solid rgba(255, 255, 255, 0.7);
              top: 65%;
            }
          }
        }
      }
      .underline {
        margin-top: 20px;
        width: 100%;
        height: 2px;
        background-color: ${styles.navgrey};
      }
    }
    .products-list {
      width: 100%;
      p {
        color: ${styles.darkgrey};
      }
    }
  }
`;

export default Produits;
