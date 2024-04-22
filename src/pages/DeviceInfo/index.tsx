import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumbs/BreadCrumbs";
import { AppRoutes } from "../../constants/appConstants";
import { formatString } from "../../utils";
import { DeviceInfo } from "../Devices/types";
import { DeviceDetails } from "./components/DeviceDetails";
import { DeviceMonitoring } from "./components/DeviceMonitoring";

const DeviceInfoPage = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

  const { deviceId = "" } = useParams();

  useEffect(() => {
    fetch(`/api/v1/appliance/${deviceId}`)
      .then((res) => res.json())
      .then((data) => setDeviceInfo(data?.appliance));
  }, []);

  const breadcrumbs = [
    { title: "Devices", url: AppRoutes.DEVICES_LIST },
    { title: deviceId, url: formatString(AppRoutes.DEVICE_INFO, deviceId) },
  ];
  return (
    <div>
      <Breadcrumb crumbs={breadcrumbs} />
      <DeviceDetails appliance={deviceInfo}></DeviceDetails>
      <DeviceMonitoring appliance={deviceInfo}></DeviceMonitoring>
    </div>
  );
};

export default DeviceInfoPage;
