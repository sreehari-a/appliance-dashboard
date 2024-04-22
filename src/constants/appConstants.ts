import theme from "../theme";

export enum DeviceStatus {
  Offline = "Offline",
  Online = "Online",
}
export enum DownloadStatus {
  Failed = "Failed",
  Cancelled = "Cancelled",
  Scheduled="Scheduled",
  Downloading = "Downloading",
  Succeeded = "Succeeded",
}

export enum BillingCycle {
  monthly = "Monthly",
  quarterly = "Quarterly",
  annual = "Annual",
}

export const DeviceStatusConfig = {
  [DeviceStatus.Offline]: {
    color: theme.colors.statusColors.darkRed,
    label: "Offline",
  },
  [DeviceStatus.Online]: {
    color: theme.colors.statusColors.green,
    label: "Online",
  },
  DEFAULT: {
    color: "transparent",
    label: ""
  }
};

export const DownloadStatusConfig = {
  [DownloadStatus.Failed]: {
    color: theme.colors.statusColors.darkRed,
    label: "Failed",
  },
  [DownloadStatus.Cancelled]: {
    color: theme.colors.statusColors.yellow,
    label: "Cancelled",
  },
  [DownloadStatus.Scheduled]: {
    color: theme.colors.statusColors.lightgrey,
    label: "Scheduled",
  },
  [DownloadStatus.Downloading]: {
    color: theme.colors.statusColors.blue,
    label: "Downloading",
  },
  [DownloadStatus.Succeeded]: {
    color: theme.colors.statusColors.green,
    label: "Downloaded",
  },
  DEFAULT: {
    color: "transparent",
    label: ""
  }
};

export const BillingCycleMap = {
  [BillingCycle.monthly]: "Monthly",
  [BillingCycle.annual]: "Annual",
  [BillingCycle.quarterly]: "Quarterly",
};

export const Labels = {
  SERIAL_NO: "Device Serial",
  LOCATION: "Location",
  CITY: "City",
  ISP_PAYMENT_RESPONSIBILITY: "ISP Payment Responsibility",
  BANDWIDTH: "Bandwidth",
  AVG_BANDWIDTH: "Average Bandwidth",
  PLAN_START_DATE: "Plan Start Date",
  BILLING_CYCLE:"Billing Cycle",
  DOWNLOAD_STATUS: "Download Status",
  OS_VERSION: "OS Version",
  STORAGE: "Storage Available"
}

export const AppRoutes = {
  DEVICES_LIST: "/devices",
  DEVICE_INFO: "/devices/{0}"
}