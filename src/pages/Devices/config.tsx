import { createColumnHelper, filterFns } from "@tanstack/react-table";
import LocationView from "../../components/LocationView/locationView";
import StatusText from "../../components/StatusText/statusText";
import {
  DeviceStatusConfig,
  DownloadStatusConfig,
} from "../../constants/appConstants";
import { GreyButton } from "../../styled";
import { DeviceBasicInfo, DeviceInfo } from "./types";

const columnHelper = createColumnHelper<DeviceBasicInfo>();
export const getColumns = (viewDeviceInfo: (serialNo: string) => void) => {
  return [
    columnHelper.accessor("serialNo", {
      header: "Device Serial",
      cell: (info) => info.getValue(),
      size: 10.83
    }),
    columnHelper.accessor((row) => `${row.theatreName} ${row.location.city} ${row.location.state} ${row.location.country}`, {
      header: "Location",
      cell: (prop) => <LocationView data={prop.row.original} />,
      filterFn: filterFns.includesString,
      size: 27.70
    }),
    columnHelper.accessor("bandwidth", {
      header: "Bandwidth",
      cell: (prop) => (
        <>
          <div>{prop.row.original.bandwidth}</div>
          <div>{prop.row.original.avgBandwidth}</div>
        </>
      ),
      size: 15.47,
    }),
    columnHelper.accessor("deviceStatus", {
      header: "Status",
      cell: (prop) => {
        const deviceStatus = prop.getValue();
        const config =
          (deviceStatus &&
            DeviceStatusConfig[
              deviceStatus as keyof typeof DeviceStatusConfig
            ]) ||
          {};
        return <StatusText color={config.color} label={config.label} />;
      },
      size: 12.84
    }),
    columnHelper.accessor("downloadStatus", {
      header: "Download Status",
      cell: (prop) => {
        const downloadStatus = prop.getValue();
        const config =
          (downloadStatus &&
            DownloadStatusConfig[
              downloadStatus as keyof typeof DownloadStatusConfig
            ]) ||
          {};
        return <StatusText color={config.color} label={config.label} />;
      },
      size: 13.62
    }),

    columnHelper.accessor("osVersion", {
      header: "OS",
      cell: (prop) => prop.getValue(),
      size: 12.38
    }),
    columnHelper.accessor("view", {
      header: "",
      cell: (prop) => <GreyButton onClick={() => {viewDeviceInfo(prop?.row?.original?.serialNo)}}>View</GreyButton>,
      size: 7.12
    }),
  ];
};
