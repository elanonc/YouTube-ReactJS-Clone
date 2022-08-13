import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #FFF;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: #FFF;
  margin: 9px 0px;
`;

const Texts = styled.div`
  
`;

const Info = styled.div`
  font-size: 14px;
  color: #FFF;
`;

function Card() {
  return (
    <Container>
      <Image/>
      <Details>
        <ChannelImage />
        <Texts>
          <Title>Mandalorian Trailer</Title>
          <ChannelName>Star Wars</ChannelName>
          <Info>10 mi visualizações • 2 anos</Info>
        </Texts>
      </Details>
    </Container>
  )
}

export default Card;