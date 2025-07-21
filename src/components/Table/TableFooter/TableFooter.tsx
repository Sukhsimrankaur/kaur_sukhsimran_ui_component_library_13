import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledTfoot = styled.tfoot<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "#999" : "#000")};
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled,
}) => <StyledTfoot disabled={disabled}>{children}</StyledTfoot>;
