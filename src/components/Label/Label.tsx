import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#999' : '#000')};
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled }) => {
  return <StyledLabel htmlFor={htmlFor} disabled={disabled}>{text}</StyledLabel>;
};
