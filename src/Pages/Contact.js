import React from "react";
import styled from "styled-components";
import { PageHero } from "../Composants/index";
import styles from "../styles/variable";

function Contact() {
  return (
    <Wrapper className="page-100">
      <PageHero title="Contact" />
      <div className="form">
        <h2>Nous contacter</h2>
        <form>
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" placeholder="Entrez votre prénom.." />
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" placeholder="Entrez votre nom.." />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Entrez votre email.." />
          <label htmlFor="sujet">Sujet</label>
          <input type="text" id="sujet" placeholder="Objet du contact..." />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Entrez votre message.."
          ></textarea>
          <button type="submit" className="btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .form {
    margin-top: 50px;
    padding: 20px;
    padding-top: 50px;
    max-width: 800px;
    width: 90vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 1px 0px rgba(43, 43, 43, 0.075),
      0px 2px 2px 1px rgba(43, 43, 43, 0.075),
      0px 4px 4px 2px rgba(43, 43, 43, 0.075),
      0px 8px 8px 4px rgba(43, 43, 43, 0.075),
      0px 16px 16px 8px rgba(43, 43, 43, 0.075);
    border-radius: 25px;
    h2 {
      color: ${styles.darkgrey};
      margin-bottom: 50px;
      font-size: 2.3rem;
      text-align: center;
    }
    form {
      display: flex;
      max-width: 500px;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      label {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${styles.darkgrey75};
      }
      input,
      textarea {
        max-width: 500px;
        width: 100%;
        border: none;
        border-bottom: 2px solid ${styles.navgrey};
        background-color: #ebebeb34;
        margin: 5px 0 20px 0;
        color: ${styles.darkgrey};
        font-family: "Roboto Slab";
        font-size: 1.1rem;
        min-height: 50px;
      }
      textarea {
        height: 300px;
      }
      button {
        margin: auto;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .form {
      h2 {
        font-size: 3rem;
      }
    }
  }
`;

export default Contact;
