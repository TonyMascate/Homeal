import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeCategoryCard } from ".";
import { useProductContext } from "../context/ProductContext";

function HomeCategories() {
  const { categories } = useProductContext();

  return (
    <Wrapper>
      <h2 className='title'>Catégories</h2>
      <div className="list mobile">
        {categories.map((item) => {
          const { idCategory: id } = item;
          return <HomeCategoryCard key={id} {...item} />;
        })}
      </div>
      <div className="list large">
        {categories.slice(0, 4).map((item) => {
          const { idCategory: id } = item;
          return <HomeCategoryCard key={id} {...item} />;
        })}
      </div>
      <Link to='/categories' className='btn-primary'>
        NOS CATÉGORIES
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    overflow-x: auto;
    padding: 30px 0px;
    margin: 10px 0;
  }
  .large{
    display: none;
  }
  a{
    margin-left: 10px;
  }
  @media only screen and (min-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .large{
      display: flex;
    }
    .mobile{
      display: none;
    }
    .list {
      max-width: 900px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;

export default HomeCategories;
