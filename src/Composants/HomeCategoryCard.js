import React from "react";
import styled from "styled-components";
import styles from "../styles/variable";
import { FiZoomIn } from "react-icons/fi";
import { Link } from "react-router-dom";

function HomeCategoryCard({ strCategory: name, strCategoryThumb: image }) {
  return (
    <Wrapper>
      <div className="image">
        <img src={image} alt="" />
        <Link to='/' className="icon btn-icon">
          <FiZoomIn className="zoom" />
        </Link>
      </div>
      <div className="name">
        <h3>{name}</h3>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  overflow: hidden;
  box-shadow: ${styles.blackshadow};
  &:hover {
    .image {
      img {
        transform: scale(1.2);
      }
    }
  }
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    width: 100%;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: #351501;
      opacity: 0.4;
    }
    img {
      height: 100%;
      transform: scale(1);
    }
  }
  img {
    transform: scale(cover);
    transition: 0.3s ease all;
  }
  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: white;
    h3 {
      font-size: 1.7rem;
      color: ${styles.darkgrey};
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
    transform: scale(1) translate(-50%, -50%);
    z-index: 1;
    transition: 0.3s ease all;
    .zoom {
      transform: rotate(0);
      transition: 0.3s ease-in-out all;
    }
    &:hover {
      transform: scale(1.2) translate(-50%, -50%);
      .zoom {
        transform: rotate(90deg);
      }
    }
  }
  @media only screen and (min-width: 991px) {
    max-width: 200px;
    margin: 10px;
  }
`;

export default HomeCategoryCard;
