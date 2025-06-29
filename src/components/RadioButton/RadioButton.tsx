import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ label, ...props }) => (
  <StyledLabel>
    <input type="radio" {...props} />
    {label}
  </StyledLabel>
);
