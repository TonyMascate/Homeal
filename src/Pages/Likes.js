import React from "react";
import styled from "styled-components";
import { LikeElement, PageHero } from "../Composants";
import { useLikesContext } from "../context/LikesContext";
import styles from "../styles/variable";

function Likes() {
  const { likes } = useLikesContext();

  return (
    <Wrapper className="page-100">
      <PageHero title="Vos likes" />
      <div className="content">
        <h2>Vos recettes sauvegardées</h2>
        <div className="underline"></div>
        <div className="likes-list">
          {likes.map(item => {
            return <LikeElement key={item.id} {...item}/>
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    color: ${styles.darkgrey};
    h2 {
      font-size: 2rem;
      text-align: center;
    }
    .underline {
      width: 90vw;
      max-width: 800px;
      height: 2px;
      background-color: ${styles.navgrey};
      margin: 20px 0 50px 0;
    }
    .likes-list {
      max-width: 1100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export default Likes;
