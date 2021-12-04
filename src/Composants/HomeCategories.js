import React from "react";
import styled from "styled-components";
import { HomeCategoryCard } from ".";
import { useProductContext } from "../context/ProductContext";

function HomeCategories() {
  const { categories } = useProductContext();

  return (
    <Wrapper className="container">
      <h2>Catégories</h2>
      <div className="categories">
        <div className="list">
          {categories.map((item) => {
            const { idCategory: id } = item;
            return <HomeCategoryCard key={id}/>;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default HomeCategories;
