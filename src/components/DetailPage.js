import React from 'react';
import styled from 'styled-components';

function DetailPage() {
  return (
    <DetailContainer>
      <Background>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*" />
      </Background>
      <ImageTitle>
        <img src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjQ2MC1udW5vb24tMTAtc3VuYnVyc3RiYW5uZXJfMi5qcGc.jpg?s=xKI0zlJvdBNsk7yqonuJFz6FmvaDFIq-Qmywd-9NrAM" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Controls>
      <SubTitle>
        This is filler text right now. Lorem ipsum dolor.
      </SubTitle>
      <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis quis neque venenatis tempus. Sed efficitur mi quis vehicula dictum. Morbi gravida libero non maximus sollicitudin. Sed neque metus, hendrerit ac dolor quis, ullamcorper bibendum nisl. Etiam in accumsan odio. Cras ut rhoncus elit.
      </Description>
    </DetailContainer>
  )
}

export default DetailPage

const DetailContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3vw + 5px); 
  position: relative;
  overflow-x: hidden;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -10;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vh;
  min-width: 200px;
  margin: 50px 0 0 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  margin: 15px 0 0 0;
  align-items: center;

`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 55px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0px 20px;
  margin: 0 22px 0 0;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background-color: rgb(0, 0, 0, 0.3);
  border: 1px solid white;
  color: rgb(249, 249, 249);
`

const AddButton = styled(TrailerButton)`
background-color: rgb(0, 0, 0, 0.6);
  height: 45px;
  width: 45px;
  display: flex;
  font-size: 30px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`

const GroupButton = styled(AddButton)`
  background-color: black;
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin: 25px 0 0 0;
`

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.5;
  font-size: 20px;
  margin: 15px 0 0 0;
  max-width: 700px;
`
