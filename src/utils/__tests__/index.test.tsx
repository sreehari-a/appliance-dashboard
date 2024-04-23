import { render } from "@testing-library/react";
import { getLocationString, getDateString, formatString, ThemeWrapper } from "../";

describe("getLocationString function", () => {
  test("returns correct location string", () => {
    const location = { city: "Test City", state: "Test State", country: "Test Country" };
    expect(getLocationString(location)).toBe("Test City, Test State, Test Country");
  });

  test("returns empty string for undefined location", () => {
    expect(getLocationString()).toBe("");
  });
});

describe("getDateString function", () => {
  test("returns correct formatted date string", () => {
    const dateString = "2009-11-10";
    expect(getDateString(dateString)).toBe("10 Nov");
  });
});

describe("formatString function", () => {
  test("returns formatted string with values", () => {
    const text = "Hello {0}, welcome to {1}";
    expect(formatString(text, "John", "Paris")).toBe("Hello John, welcome to Paris");
  });

  test("handles incorrect format string", () => {
    const text = "Hello {0}, welcome to {1}";
    expect(formatString(text, "John")).toBe("Hello John, welcome to {1}");
  });
});

describe("ThemeWrapper component", () => {
  test("renders children with theme provider", () => {
    const TestComponent = () => <div>Hello, world!</div>;
    const { getByText } = render(ThemeWrapper(<TestComponent />));
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });
});
