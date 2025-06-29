import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  background: ${({ disabled }) => (disabled ? '#eee' : 'white')};
  border: 1px solid #ccc;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, disabled, onChange }) => (
  <StyledSelect
    disabled={disabled}
    onChange={(e) => onChange?.(e.target.value)}
  >
    {options.map((option, idx) => (
      <option key={idx}>{option}</option>
    ))}
  </StyledSelect>
);
