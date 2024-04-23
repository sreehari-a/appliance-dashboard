import { render } from "@testing-library/react";
import { ThemeWrapper } from "../../../utils";
import StatusText, { TestIds } from "../statusText";

describe("StatusText component", () => {
  test("renders status label and image correctly", () => {
    const label = "Active";
    const color = "green";

    const { getByTestId } = render(ThemeWrapper(<StatusText label={label} color={color} />));

    expect(getByTestId(TestIds.STATUS_LABEL)).toHaveTextContent(label);
    expect(getByTestId(TestIds.STATUS_IMAGE)).toHaveStyle(`background-color: ${color}`);
  });

  test("renders status label with no color correctly", () => {
    const label = "Inactive";

    const { getByTestId } = render(ThemeWrapper(<StatusText label={label} />));

    expect(getByTestId(TestIds.STATUS_LABEL)).toHaveTextContent(label);
    expect(getByTestId(TestIds.STATUS_IMAGE)).not.toHaveAttribute("style");
  });

  test("renders status label with empty string color correctly", () => {
    const label = "Pending";

    const { getByTestId } = render(ThemeWrapper(<StatusText label={label} color='' />));

    expect(getByTestId(TestIds.STATUS_LABEL)).toHaveTextContent(label);
    expect(getByTestId(TestIds.STATUS_IMAGE)).not.toHaveAttribute("style");
  });

  test("renders status label with null color correctly", () => {
    const label = "Completed";

    const { getByTestId } = render(ThemeWrapper(<StatusText label={label} />));

    expect(getByTestId(TestIds.STATUS_LABEL)).toHaveTextContent(label);
    expect(getByTestId(TestIds.STATUS_IMAGE)).not.toHaveAttribute("style");
  });
});
