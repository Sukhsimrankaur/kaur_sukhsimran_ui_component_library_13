import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {label}
  </StyledButton>
);
