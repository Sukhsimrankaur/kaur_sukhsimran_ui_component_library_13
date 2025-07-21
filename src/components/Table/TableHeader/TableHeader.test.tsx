import { render } from "@testing-library/react";
import { TableHeader } from "./TableHeader";
import "jest-styled-components";

test("renders visible table header", () => {
  const { getByText } = render(
    <table>
      <TableHeader>
        <tr>
          <th>Header 1</th>
        </tr>
      </TableHeader>
    </table>,
  );
  expect(getByText("Header 1")).toBeVisible();
});

test("disabled table header is gray", () => {
  const { container } = render(
    <table>
      <TableHeader disabled>
        <tr>
          <th>Header 1</th>
        </tr>
      </TableHeader>
    </table>,
  );

  // Check style on the <thead> element
  const thead = container.querySelector("thead");
  expect(thead).toHaveStyle("color: rgb(153, 153, 153)"); // #999 is rgb(153,153,153)
});
