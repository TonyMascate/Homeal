import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from '../styles/variable'

function Footer() {
  return (
    <Wrapper>
      <div className="top">
        <Link to="/">Mentions légales</Link>
        <div className="border"></div>
        <Link to="/contact">Nous contacter</Link>
      </div>
      <div className="bottom">
        <p>
          © 2021 - <span>Homeal</span> Tous droits réservés.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: 50px;
  height: 230px;
  background-color: ${styles.blackgrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  .top{
      background-color: ${styles.darkgrey2};
      flex-grow: 1;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .border{
          height: 30px;
          width: 1px;
          background-color: ${styles.lightgrey};
          margin: 0 20px;
      }
  }
  .bottom{
      flex-grow: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      p{
          margin-top: 20px;
          span{
              color: ${styles.primary};
          }
      }
  }
  .top, .bottom{
      padding: 0 10px;
  }
  @media screen and (min-width:768px){
      height: 170px;
  }
`;

export default Footer;
