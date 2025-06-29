import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledThead = styled.thead<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#999' : '#000')};
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => (
  <StyledThead disabled={disabled}>{children}</StyledThead>
);
