import React from "react";
import styled from 'styled-components'

const StyledCard = styled.figure`
max-width: 60%;

 figcaption {
  font-style: italic;
 }

`

export default function Figure({ imageURL, caption }) {
  return (
    <StyledCard className="img">
      <img src={imageURL}></img>
      <figcaption className="fig">Awesome Picture on {caption}</figcaption>
    </StyledCard>
  );
}
