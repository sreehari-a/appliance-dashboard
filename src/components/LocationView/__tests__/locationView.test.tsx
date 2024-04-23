import { render } from "@testing-library/react";
import { DeviceInfo } from "../../../pages/Devices/types";
import { ThemeWrapper } from "../../../utils";
import LocationView, { TestIds } from "../locationView";

describe("LocationView component", () => {
  test("renders theater name and location correctly", () => {
    const data = {
      theatreName: "Test Theatre",
      location: {
        city: "Test City",
        state: "Test State",
        country: "Test Country"
      }
    };

    const { getByTestId } = render(ThemeWrapper(<LocationView data={data as DeviceInfo} />));

    expect(getByTestId(TestIds.THEATRE_NAME)).toHaveTextContent(data.theatreName);
    expect(getByTestId(TestIds.LOCATION_VALUE)).toHaveTextContent(
      `${data.location.city}, ${data.location.state}, ${data.location.country}`
    );
  });

  test("renders theater name and partial location correctly", () => {
    const data = {
      theatreName: "Test Theatre",
      location: {
        city: "Test City",
        state: ""
      }
    };

    const { getByTestId } = render(ThemeWrapper(<LocationView data={data as DeviceInfo} />));

    expect(getByTestId(TestIds.THEATRE_NAME)).toHaveTextContent(data.theatreName);
    expect(getByTestId(TestIds.LOCATION_VALUE)).toHaveTextContent(`${data.location.city},`);
  });

  test("renders theater name with no location correctly", () => {
    const data = {
      theatreName: "Test Theatre",
      location: {}
    };

    const { getByTestId } = render(ThemeWrapper(<LocationView data={data as DeviceInfo} />));

    expect(getByTestId(TestIds.THEATRE_NAME)).toHaveTextContent(data.theatreName);
    expect(getByTestId(TestIds.LOCATION_VALUE)).toHaveTextContent("");
  });

  test("renders theater name with no data correctly", () => {
    const data = {};

    const { getByTestId } = render(ThemeWrapper(<LocationView data={data as DeviceInfo} />));

    expect(getByTestId(TestIds.THEATRE_NAME)).toHaveTextContent("");
    expect(getByTestId(TestIds.LOCATION_VALUE)).toHaveTextContent("");
  });
});
