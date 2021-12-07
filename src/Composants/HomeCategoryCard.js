import React from 'react'
import styled from 'styled-components'
import styles from '../styles/variable';
import {FiZoomIn} from 'react-icons/fi'

function HomeCategoryCard({strCategory: name, strCategoryThumb: image}) {
    return (
      <Wrapper>
        <div className="name">
          <h3>{name}</h3>
        </div>
        <img src={image} alt="description du produit" />
        <div className="icon btn-primary">
          <FiZoomIn />
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.article`
  min-width: 200px;
  width: 100%;
  height: 200px;
  background-color: ${styles.lightgrey};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;
  margin: 0 10px;
  overflow: hidden;
  box-shadow: 0px 1px 1px 0px rgba(43, 43, 43, 0.075),
    0px 2px 2px 0px rgba(43, 43, 43, 0.075),
    0px 4px 4px 0px rgba(43, 43, 43, 0.075),
    0px 8px 8px 0px rgba(43, 43, 43, 0.075),
    0px 16px 16px 0px rgba(43, 43, 43, 0.075);
  img {
    transform: scale(cover);
  }
  .name {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: white;
    z-index: 100;
    h3 {
      font-size: 1.7rem;
      color: ${styles.darkgrey};
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    border-radius: 100%;
    padding: 0;
    width: 60px;
    height: 60px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #351501;
    border-radius: 25px;
    opacity: 0.4;
    z-index: 0;
  }
  @media only screen and (min-width: 991px) {
    max-width: 200px;
    margin: 10px;
  }
`;

export default HomeCategoryCard
