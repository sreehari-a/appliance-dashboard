import { render } from "@testing-library/react";
import { BillingCycle, DeviceStatus, DownloadStatus } from "../../../../constants/appConstants";
import theme from "../../../../theme";
import { ThemeWrapper } from "../../../../utils";
import { DeviceInfo } from "../../../Devices/types";
import { DeviceDetails, TestIds } from "../DeviceDetails";

describe("DeviceDetails component", () => {
  const appliance: DeviceInfo = {
    serialNo: "123456",
    theatreName: "Test Theatre",
    location: { city: "Test City", state: "Test State", country: "Test Country" },
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Succeeded,
    storage: "828 GB",
    ispPaymentResponsibility: "Qube",
    avgBandwidth: "1 Gbps",
    bandwidth: "812 Kbps",
    billingCycle: BillingCycle.monthly,
    osVersion: "5.2.1.3",
    planStartDate: "2023-10-01T10:00:00Z"
  };

  test("renders serial number correctly", () => {
    const { getByTestId } = render(ThemeWrapper(<DeviceDetails appliance={appliance} />));
    expect(getByTestId(TestIds.SERIAL_NO)).toHaveTextContent(appliance.serialNo);
  });

  test("renders theatre name correctly", () => {
    const { getByTestId } = render(ThemeWrapper(<DeviceDetails appliance={appliance} />));
    expect(getByTestId(TestIds.THEATRE_NAME)).toHaveTextContent(appliance.theatreName);
  });

  test("renders location correctly", () => {
    const { getByTestId } = render(ThemeWrapper(<DeviceDetails appliance={appliance} />));
    expect(getByTestId(TestIds.LOCATION)).toHaveTextContent("Test City, Test State, Test Country");
  });

  test("renders tag circle color correctly", () => {
    const { getByTestId } = render(ThemeWrapper(<DeviceDetails appliance={appliance} />));
    expect(getByTestId(TestIds.TAG_CIRCLE)).toHaveAttribute("bgcolor", theme.colors.statusColors.green);
  });

  test("renders tag label correctly", () => {
    const { getByTestId } = render(ThemeWrapper(<DeviceDetails appliance={appliance} />));
    expect(getByTestId(TestIds.TAG_LABEL)).toHaveTextContent(DeviceStatus.Online);
  });
});
