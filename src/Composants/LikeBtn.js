import React from 'react'
import styled from 'styled-components'
import {AiOutlineHeart} from 'react-icons/ai'
import styles from '../styles/variable';

function LikeBtn() {
    return (
        <Wrapper>
            <AiOutlineHeart className='icon'/>
        </Wrapper>
    )
}

const Wrapper = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 100%;
  font-size: 1.5rem;
  border: 3px solid ${styles.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${styles.secondary};
  background-color: white;
  .icon {
    height: 70%;
    width: 70%;
  }
`;

export default LikeBtn
