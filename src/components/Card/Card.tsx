import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean }>`
  background: white;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Content = styled.p`
  margin: 0;
`;

export const Card: React.FC<CardProps> = ({ title, content, disabled }) => (
  <StyledCard disabled={disabled}>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </StyledCard>
);
