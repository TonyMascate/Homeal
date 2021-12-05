import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import mid from "../img/mid-nav.svg";
import logo from "../img/Homeal.svg";
import styles from '../styles/variable'

function Navbar() {
  return (
    <>
      <Wrapper>
        <div className="mobile">
          <div className="left">
            <Link to="/">
              <AiFillHome className="icon" />
            </Link>
            <Link to="/">
              <BsFillGridFill className="icon" />
            </Link>
          </div>
          <img src={mid} alt="logo du milieu" />
          <div className="right">
            <Link to="/">
              <AiFillHeart className="icon" />
            </Link>
            <Link to="/">
              <FaUserAlt className="icon" />
            </Link>
          </div>
          <div className="cart-btn">
            <Link to="/">
              <ImCart className="icon" />
            </Link>
          </div>
        </div>
        <div className="large-screen">
          <div className="logo">
            <img src={logo} alt="logo homeal" />
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">ACCUEIL</Link>
              </li>
              <li>
                <Link to="/">NOS RECETTES</Link>
              </li>
              <li>
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <Link to="/">
              <AiFillHeart />
            </Link>
            <Link to="/">
              <ImCart />
            </Link>
            <Link to="/">
              <FaUserAlt />
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  .large-screen {
    display: none;
  }
  .mobile {
    z-index: 1000;
    width: 80vw;
    height: 50px;
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .left,
    .right {
      background-color: ${styles.navgrey};
      height: 100%;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .left {
      border-radius: 15px 0px 0px 15px;
    }
    .right {
      border-radius: 0px 15px 15px 0px;
    }
    .icon,
    a {
      height: 24px;
      width: 24px;
      color: black;
    }
    img {
      margin: 0 -2px;
    }
    .cart-btn {
      background-color: ${styles.primary};
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 27px;
      left: 50%;
      transform: translateX(-50%);
      .icon {
        color: white;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .mobile {
      display: none;
    }
    .large-screen {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 0 10px;
      background-color: white;
      .logo {
        margin: 0 10px;
        img {
          width: 93px;
          height: 38px;
        }
      }
      ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        li {
          margin: 0 20px;
          a {
            text-decoration: none;
            color: black;
            font-weight: 900;
          }
        }
        li:hover {
          transform: scale(1.2);
          transition: 0.3s ease transform;
        }
      }
      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          color: black;
          margin: 0 10px;
          svg {
            width: 24px;
            height: 24px;
          }
        }
        a:hover {
          transform: scale(1.2);
          transition: 0.3s ease transform;
        }
      }
    }
  }
`;

export default Navbar;
