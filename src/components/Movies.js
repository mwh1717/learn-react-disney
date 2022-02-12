import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <MoviesContainer>
      <h4>Recommended for You</h4>
      <ContentContainer>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
      </ContentContainer>
    </MoviesContainer>
  )
}

export default Movies

const MoviesContainer = styled.div`
  margin: 0 0 30px 0;
`

const ContentContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
border: 2px solid rgb(245,245,245,0.5);
border-radius: 10px;
box-shadow: rgb(0 0 0 / 59%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    transition-duration: 250ms;
    border: 2px solid rgba(249, 249, 249, 0.8);
    cursor: pointer;
  }

  &:active {
    border: 2px solid white;
  }
`