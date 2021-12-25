import React from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from '../styles/variable';
import { useLikesContext } from '../context/LikesContext';

function LikeBtn({id, name, image, price}) {

  const {manageLikes, likes} = useLikesContext()

  const alreadyLiked = likes.find((item) => (item.id = id));

    return (
      <Wrapper className='likebtn'>
        {alreadyLiked ? (
          <AiFillHeart
            className={`icon`}
            onClick={() => manageLikes(id, name, image, price)}
          />
        ) : (
          <AiOutlineHeart
            className={`icon`}
            onClick={() => manageLikes(id, name, image, price)}
          />
        )}
      </Wrapper>
    );
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
  cursor: pointer;
  .icon {
    height: 70%;
    width: 70%;
  }
`;

export default LikeBtn
