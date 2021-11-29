import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import mid from "../img/mid-nav.svg";

function Navbar() {
  return (
    <Wrapper className="mobile">
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
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 80vw;
  height: 50px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  .left,
  .right {
    background-color: #dfdfdf;
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
  .cart-btn {
    background-color: #ff7f0a;
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
`;

export default Navbar;
