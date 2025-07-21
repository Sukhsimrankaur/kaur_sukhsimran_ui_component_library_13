import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "#aaa" : "#333")};
  font-size: 1rem;
`;

export const Text: React.FC<TextProps> = ({ content, disabled }) => (
  <StyledText disabled={disabled}>{content}</StyledText>
);
