import { Labels } from "../../constants/appConstants";
import { getDateString, getLocationString } from "../../utils";
import { DeviceInfo } from "../Devices/types";

export const DeviceInfoFields = [
    {

        label: Labels.SERIAL_NO,
        key: "serialNo",
    },
    {
        label: Labels.LOCATION,
        key: "theatreName"
    },
    {
        label: Labels.CITY,
        getValue: (props: DeviceInfo | null) => getLocationString(props?.location),
    },
    {
        label: Labels.ISP_PAYMENT_RESPONSIBILITY,
        key: "ispPaymentResponsibility"
    },
    {
        label: Labels.BANDWIDTH,
        key: "bandwidth",
    },
    {
        label: Labels.AVG_BANDWIDTH,
        key: "avgBandwidth",
    },
    {
        label: Labels.PLAN_START_DATE,
        getValue: (props: DeviceInfo) => getDateString(props?.planStartDate),
    },
    {
        label: Labels.BILLING_CYCLE,
        key: "billingCycle",
    },
    {
        label: Labels.DOWNLOAD_STATUS,
        key: "downloadStatus",
    },
    {
        label: Labels.OS_VERSION,
        key: "osVersion",
    },
    {
        label: Labels.STORAGE,
        key: "storage",
    },
];
