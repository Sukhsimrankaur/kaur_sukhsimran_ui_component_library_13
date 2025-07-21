import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledTr = styled.tr<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "#999" : "#000")};
`;

export const TableRow: React.FC<TableRowProps> = ({ children, disabled }) => (
  <StyledTr disabled={disabled}>{children}</StyledTr>
);
