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
            return <HomeCategoryCard key={id} {...item}/>;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.categories{
  width: 100%;
  overflow: hidden;
}
.list{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
}
  h2{
    margin-bottom: 40px;
  }
`;

export default HomeCategories;
