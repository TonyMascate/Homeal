import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../img/heropage.svg";
import styles from "../styles/variable";

function PageHero({title}) {
  return <Wrapper>
      <h2>
          <Link to='/'>Accueil</Link> / {title}</h2>
  </Wrapper>;
}

const Wrapper = styled.section`
  min-height: 216px;
  height: 20vh;
  width: 100vw;
  background: url(${hero}) center;
  background-size: cover;
  z-index: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${styles.darkgrey};
      opacity: 0.6;
      z-index: 1;
  }
  a{
      text-decoration: underline;
  }
  h2{
      z-index: 2;
      font-size: 36px;
  }
`;

export default PageHero;
