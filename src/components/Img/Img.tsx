import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => (
  <StyledImg src={src} alt={alt} disabled={disabled} />
);
