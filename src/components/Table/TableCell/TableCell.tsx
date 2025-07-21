import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledTd = styled.td<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "#888" : "#000")};
  padding: 8px;
`;

export const TableCell: React.FC<TableCellProps> = ({ content, disabled }) => (
  <StyledTd disabled={disabled}>{content}</StyledTd>
);
