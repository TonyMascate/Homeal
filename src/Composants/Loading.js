import React from 'react'
import styled from 'styled-components'

function Loading() {
    return (
        <Wrapper>
            <div className="loading"></div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--clr-primary-5);
    animation: spinner 0.6s linear infinite;
  }
`;

export default Loading
