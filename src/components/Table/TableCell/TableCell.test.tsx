import { render } from "@testing-library/react";
import { TableCell } from "./TableCell";
import "jest-styled-components";

test("renders visible table cell", () => {
  const { getByText } = render(
    <table>
      <tbody>
        <tr>
          <TableCell content="Data" />
        </tr>
      </tbody>
    </table>,
  );
  expect(getByText("Data")).toBeVisible();
});

test("disabled cell has gray text", () => {
  const { getByText } = render(
    <table>
      <tbody>
        <tr>
          <TableCell content="Disabled" disabled />
        </tr>
      </tbody>
    </table>,
  );
  expect(getByText("Disabled")).toHaveStyle("color: #888");
});
