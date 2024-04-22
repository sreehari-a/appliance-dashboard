import { http, HttpResponse } from "msw";
import { DownloadStatus } from "../constants/appConstants";
import { appliances } from "../json/appliances";
import { DeviceBasicInfo, DeviceInfo, StatusCount} from "../pages/Devices/types";



const getStatusCount = (appliances: DeviceInfo[]) => {
    const statusCount: StatusCount = {};
    appliances.map(({downloadStatus}) => {
        if(!statusCount[downloadStatus]) {
            statusCount[downloadStatus] = 1;
        } else  {
            (statusCount[downloadStatus] as number)+=1;
        }
    })
    return statusCount;
};

const getBasicDeviceInfo: (device: DeviceInfo) => DeviceBasicInfo = (appliance: DeviceInfo) => {
  const {
    serialNo,
    theatreName,
    location,
    bandwidth,
    avgBandwidth,
    downloadStatus,
    deviceStatus,
    osVersion,
  } = appliance;
  return {
    serialNo,
    theatreName,
    location,
    bandwidth,
    avgBandwidth,
    downloadStatus,
    deviceStatus,
    osVersion,
  };
};

const handlers = [
  http.get("/api/v1/appliances", () => {
    const count = getStatusCount(appliances)
    return HttpResponse.json({
      data: appliances.map(device => getBasicDeviceInfo(device)),
      metaData: {
        count
      },
    });
  }),
  http.get("/api/v1/appliance/:applianceId", ({ params }) => {
    const appliance = appliances.find(
      (appliance) => appliance.serialNo === params.applianceId
    );

    if (!appliance) {
      return HttpResponse.json(
        {
          error: "Not Found"
        },
        { status: 404 }
      );
    }
    return HttpResponse.json({
      appliance,
    });
  }),
];
export default handlers;
