import { render } from "@testing-library/react";
import { ThemeWrapper } from "../../../utils";
import Field, { TestIds } from "../FieldValue";

describe("Field component", () => {
  test("renders label and value correctly", () => {
    const label = "Test Label";
    const value = "Test Value";

    const { getByTestId } = render(ThemeWrapper(<Field label={label} value={value} />));

    expect(getByTestId(TestIds.FIELD_LABEL)).toHaveTextContent(label);
    expect(getByTestId(TestIds.FIELD_VALUE)).toHaveTextContent(value);
  });

  test("renders value only, if label is null", () => {
    const value = "Test Value";

    const { getByTestId, queryByTestId } = render(ThemeWrapper(<Field label={null} value={value} />));

    expect(queryByTestId(TestIds.FIELD_LABEL)).not.toBeInTheDocument();
    expect(getByTestId(TestIds.FIELD_VALUE)).toHaveTextContent(value);
  });

  test("renders label only, if value is null", () => {
    const label = "Test Label";

    const { getByTestId, queryByTestId } = render(ThemeWrapper(<Field label={label} value={null} />));

    expect(queryByTestId(TestIds.FIELD_VALUE)).not.toBeInTheDocument();
    expect(getByTestId(TestIds.FIELD_LABEL)).toHaveTextContent(label);
  });

  test("renders null label and value correctly", () => {
    const { queryByTestId } = render(ThemeWrapper(<Field label={null} value={null} />));

    expect(queryByTestId(TestIds.FIELD_VALUE)).not.toBeInTheDocument();
    expect(queryByTestId(TestIds.FIELD_LABEL)).not.toBeInTheDocument();
  });
});
