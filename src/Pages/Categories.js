import React, { useEffect } from "react";
import styled from "styled-components";
import { PageHero, HomeCategoryCard, Loading } from "../Composants/index";
import { useProductContext } from "../context/ProductContext";
import styles from "../styles/variable";

function Categories() {
  const { categories, loading, getAllCategories } = useProductContext();

  useEffect(() => {
    getAllCategories()
  }, [])
  
  return (
    <Wrapper className="page-100">
      <PageHero title="Catégories" />
      <div className="categories">
        {loading ? (
          <Loading />
        ) : (
          <>
            {categories.map((item) => {
              return <HomeCategoryCard key={item.idCategory} {...item}/>;
            })}
          </>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .categories {
    max-width: 1100px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
    article {
      max-width: 300px;
      height: 300px;
      margin: 15px;
      box-shadow: 0px 8px 1px 2px ${styles.primary40},
        0px 4px 1px 2px ${styles.primary75};
    }
  }
  @media screen and (min-width: 991px) {
    .categories {
      article {
        max-width: 350px;
        width: 100%;
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(10),
        &:nth-child(11),
        &:nth-child(14),
        &:nth-child(15){
          max-width: 580px;
          width: 100%;
        }
      }
    }
  }
`;

export default Categories;
