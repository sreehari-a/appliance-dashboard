import { http, HttpResponse } from "msw";
import { appliances } from "../json/appliances";
import { DeviceBasicInfo, DeviceInfo, StatusCount } from "../pages/Devices/types";

/**
 * For mapping count against device status for lising api response
 * @param appliances
 * @returns
 */
const getStatusCount = (appliances: DeviceInfo[]) => {
  const statusCount: StatusCount = {};
  appliances.map(({ downloadStatus }) => {
    if (!statusCount[downloadStatus]) {
      statusCount[downloadStatus] = 1;
    } else {
      (statusCount[downloadStatus] as number) += 1;
    }
  });
  return statusCount;
};

/**
 * Function to select only required properties for lising an appliance
 * @param appliance
 * @returns
 */
const getBasicDeviceInfo: (device: DeviceInfo) => DeviceBasicInfo = (appliance: DeviceInfo) => {
  const { serialNo, theatreName, location, bandwidth, avgBandwidth, downloadStatus, deviceStatus, osVersion } =
    appliance;
  return {
    serialNo,
    theatreName,
    location,
    bandwidth,
    avgBandwidth,
    downloadStatus,
    deviceStatus,
    osVersion
  };
};

const handlers = [
  /**
   * API Handler to list appliance on dashboard
   */
  http.get("/api/v1/appliances", () => {
    const count = getStatusCount(appliances);
    return HttpResponse.json({
      data: appliances.map((device) => getBasicDeviceInfo(device)),
      metaData: {
        count
      }
    });
  }),
  /**
   * Get appliance details corresponding to a serial number
   */
  http.get("/api/v1/appliance/:applianceId", ({ params }) => {
    const appliance = appliances.find((appliance) => appliance.serialNo === params.applianceId);

    if (!appliance) {
      return HttpResponse.json(
        {
          error: "Not Found"
        },
        { status: 404 }
      );
    }
    return HttpResponse.json({
      appliance
    });
  })
];
export default handlers;
