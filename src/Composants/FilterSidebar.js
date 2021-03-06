import React, { useEffect } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import styles from "../styles/variable";

function FilterSidebar() {
  const { categories, showFilters, setCategory, filters: {category}, getAllCategories} = useProductContext();

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <Wrapper className={`sidebar ${showFilters ? "show" : "hide"}`}>
      <div className="categories">
        <h3>Catégories</h3>
        <div className="categories--list">
          {categories.map((item) => {
            return (
              <button key={item.idCategory} data-label={item.strCategory} onClick={(e) => setCategory(e.target.dataset.label)} className={`${item.strCategory === category && 'active'}`}>
                {item.strCategory}
              </button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  color: ${styles.darkgrey};
  h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  .categories--list {
    display: flex;
    flex-wrap: wrap;
    button {
      color: ${styles.darkgrey};
      font-weight: 500;
      font-size: 1rem;
      margin: 5px 10px 5px 0px;
      cursor: pointer;
    }
    .active{
      color: ${styles.secondary};
      border-bottom: 2px solid ${styles.secondary} ;
    }
  }
`;

export default FilterSidebar;
