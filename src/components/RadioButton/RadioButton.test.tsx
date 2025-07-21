import { render } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

test("renders visible radio button with label", () => {
  const { getByLabelText } = render(
    <RadioButton label="Option 1" name="group" value="1" />,
  );
  expect(getByLabelText("Option 1")).toBeVisible();
});

test("disabled radio input is not clickable", () => {
  const { getByLabelText } = render(
    <RadioButton label="Option 1" name="group" value="1" disabled />,
  );
  expect(getByLabelText("Option 1")).toBeDisabled();
});
