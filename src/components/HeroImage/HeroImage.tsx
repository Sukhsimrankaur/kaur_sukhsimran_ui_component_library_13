import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledHero = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundUrl",
})<{ backgroundUrl: string }>`
  background-image: url(${(props) => props.backgroundUrl});
  background-size: cover;
  background-position: center;
  height: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const Subtitle = styled.h3`
  margin: 0.5rem 0 0 0;
  font-weight: normal;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  backgroundUrl,
  title,
  subtitle,
}) => (
  <StyledHero backgroundUrl={backgroundUrl}>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </StyledHero>
);
