import { BillingCycle, DeviceStatus, DownloadStatus } from "../constants/appConstants";

export const appliances = [
  {
    serialNo: "JTD-512312",
    theatreName: "Kriplle Square",
    location: { city: "New Delhi", state: "Delhi", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "1 Gbps",
    avgBandwidth: "812 Kbps",
    planStartDate: "2023-10-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Failed,
    osVersion: "5.2.1.3",
    storage: "828 GB"
  },
  {
    serialNo: "JTD-512313",
    theatreName: "PVR Cinemas",
    location: { city: "Mumbai", state: "Maharashtra", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "500 Mbps",
    avgBandwidth: "450 Kbps",
    planStartDate: "2023-11-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Succeeded,
    osVersion: "5.2.1.4",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512314",
    theatreName: "INOX Leisure",
    location: { city: "Bangalore", state: "Karnataka", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "2 Gbps",
    avgBandwidth: "1.5 Gbps",
    planStartDate: "2023-12-01T10:00:00Z",
    billingCycle: BillingCycle.annual,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Cancelled,
    osVersion: "5.2.1.5",
    storage: "2 TB"
  },
  {
    serialNo: "JTD-512315",
    theatreName: "Cinepolis",
    location: { city: "Hyderabad", state: "Telangana", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1.5 Gbps",
    avgBandwidth: "1.2 Gbps",
    planStartDate: "2024-01-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Downloading,
    osVersion: "5.2.1.6",
    storage: "1.5 TB"
  },
  {
    serialNo: "JTD-512316",
    theatreName: "PVR ICON",
    location: { city: "Chennai", state: "Tamil Nadu", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "1 Gbps",
    avgBandwidth: "800 Kbps",
    planStartDate: "2024-02-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Failed,
    osVersion: "5.2.1.3",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512317",
    theatreName: "INOX",
    location: { city: "Kolkata", state: "West Bengal", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "500 Mbps",
    avgBandwidth: "400 Kbps",
    planStartDate: "2024-03-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Succeeded,
    osVersion: "5.2.1.4",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512318",
    theatreName: "Cinepolis",
    location: { city: "Pune", state: "Maharashtra", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "1 Gbps",
    avgBandwidth: "900 Kbps",
    planStartDate: "2024-04-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Cancelled,
    osVersion: "5.2.1.5",
    storage: "2 TB"
  },
  {
    serialNo: "JTD-512319",
    theatreName: "PVR Cinemas",
    location: { city: "Bangalore", state: "Karnataka", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1.5 Gbps",
    avgBandwidth: "1.3 Gbps",
    planStartDate: "2024-05-01T10:00:00Z",
    billingCycle: BillingCycle.annual,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Downloading,
    osVersion: "5.2.1.6",
    storage: "1.5 TB"
  },
  {
    serialNo: "JTD-512320",
    theatreName: "INOX Leisure",
    location: { city: "Hyderabad", state: "Telangana", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "500 Mbps",
    avgBandwidth: "450 Kbps",
    planStartDate: "2024-06-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Failed,
    osVersion: "5.2.1.3",
    storage: "828 GB"
  },
  {
    serialNo: "JTD-512321",
    theatreName: "Cinepolis",
    location: { city: "Mumbai", state: "Maharashtra", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1 Gbps",
    avgBandwidth: "800 Kbps",
    planStartDate: "2024-07-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Succeeded,
    osVersion: "5.2.1.4",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512322",
    theatreName: "PVR Cinemas",
    location: { city: "Delhi", state: "Delhi", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "2 Gbps",
    avgBandwidth: "1.5 Gbps",
    planStartDate: "2024-08-01T10:00:00Z",
    billingCycle: BillingCycle.annual,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Cancelled,
    osVersion: "5.2.1.5",
    storage: "2 TB"
  },
  {
    serialNo: "JTD-512323",
    theatreName: "INOX Leisure",
    location: { city: "Chennai", state: "Tamil Nadu", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1.5 Gbps",
    avgBandwidth: "1.2 Gbps",
    planStartDate: "2024-09-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Downloading,
    osVersion: "5.2.1.6",
    storage: "1.5 TB"
  },
  {
    serialNo: "JTD-512324",
    theatreName: "Cinepolis",
    location: { city: "Bangalore", state: "Karnataka", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "1 Gbps",
    avgBandwidth: "900 Kbps",
    planStartDate: "2024-10-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Failed,
    osVersion: "5.2.1.3",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512325",
    theatreName: "PVR Cinemas",
    location: { city: "Hyderabad", state: "Telangana", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "500 Mbps",
    avgBandwidth: "400 Kbps",
    planStartDate: "2024-11-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Succeeded,
    osVersion: "5.2.1.4",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512326",
    theatreName: "INOX Leisure",
    location: { city: "Mumbai", state: "Maharashtra", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "1 Gbps",
    avgBandwidth: "800 Kbps",
    planStartDate: "2024-12-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Cancelled,
    osVersion: "5.2.1.5",
    storage: "2 TB"
  },
  {
    serialNo: "JTD-512327",
    theatreName: "Cinepolis",
    location: { city: "Delhi", state: "Delhi", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1.5 Gbps",
    avgBandwidth: "1.2 Gbps",
    planStartDate: "2025-01-01T10:00:00Z",
    billingCycle: BillingCycle.annual,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Downloading,
    osVersion: "5.2.1.6",
    storage: "1.5 TB"
  },
  {
    serialNo: "JTD-512328",
    theatreName: "PVR Cinemas",
    location: { city: "Chennai", state: "Tamil Nadu", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "500 Mbps",
    avgBandwidth: "450 Kbps",
    planStartDate: "2025-02-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Failed,
    osVersion: "5.2.1.3",
    storage: "828 GB"
  },
  {
    serialNo: "JTD-512329",
    theatreName: "INOX Leisure",
    location: { city: "Bangalore", state: "Karnataka", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1 Gbps",
    avgBandwidth: "900 Kbps",
    planStartDate: "2025-03-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Succeeded,
    osVersion: "5.2.1.4",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512330",
    theatreName: "Cinepolis",
    location: { city: "Hyderabad", state: "Telangana", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "2 Gbps",
    avgBandwidth: "1.5 Gbps",
    planStartDate: "2025-04-01T10:00:00Z",
    billingCycle: BillingCycle.annual,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Cancelled,
    osVersion: "5.2.1.5",
    storage: "2 TB"
  },
  {
    serialNo: "JTD-512331",
    theatreName: "PVR Cinemas",
    location: { city: "Mumbai", state: "Maharashtra", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1.5 Gbps",
    avgBandwidth: "1.2 Gbps",
    planStartDate: "2025-05-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Downloading,
    osVersion: "5.2.1.6",
    storage: "1.5 TB"
  },
  {
    serialNo: "JTD-512332",
    theatreName: "INOX Leisure",
    location: { city: "Delhi", state: "Delhi", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "1 Gbps",
    avgBandwidth: "800 Kbps",
    planStartDate: "2025-06-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Failed,
    osVersion: "5.2.1.3",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512333",
    theatreName: "Cinepolis",
    location: { city: "Chennai", state: "Tamil Nadu", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "500 Mbps",
    avgBandwidth: "400 Kbps",
    planStartDate: "2025-07-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Succeeded,
    osVersion: "5.2.1.4",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512334",
    theatreName: "PVR Cinemas",
    location: { city: "Bangalore", state: "Karnataka", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "1 Gbps",
    avgBandwidth: "900 Kbps",
    planStartDate: "2025-08-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Cancelled,
    osVersion: "5.2.1.5",
    storage: "2 TB"
  },
  {
    serialNo: "JTD-512335",
    theatreName: "INOX Leisure",
    location: { city: "Hyderabad", state: "Telangana", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1.5 Gbps",
    avgBandwidth: "1.2 Gbps",
    planStartDate: "2025-09-01T10:00:00Z",
    billingCycle: BillingCycle.annual,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Downloading,
    osVersion: "5.2.1.6",
    storage: "1.5 TB"
  },
  {
    serialNo: "JTD-512336",
    theatreName: "Cinepolis",
    location: { city: "Mumbai", state: "Maharashtra", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "500 Mbps",
    avgBandwidth: "450 Kbps",
    planStartDate: "2025-10-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Failed,
    osVersion: "5.2.1.3",
    storage: "828 GB"
  },
  {
    serialNo: "JTD-512337",
    theatreName: "PVR Cinemas",
    location: { city: "Delhi", state: "Delhi", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1 Gbps",
    avgBandwidth: "800 Kbps",
    planStartDate: "2025-11-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Succeeded,
    osVersion: "5.2.1.4",
    storage: "1 TB"
  },
  {
    serialNo: "JTD-512338",
    theatreName: "INOX Leisure",
    location: { city: "Chennai", state: "Tamil Nadu", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "1.5 Gbps",
    avgBandwidth: "1.2 Gbps",
    planStartDate: "2025-12-01T10:00:00Z",
    billingCycle: BillingCycle.quarterly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Cancelled,
    osVersion: "5.2.1.5",
    storage: "2 TB"
  },
  {
    serialNo: "JTD-512339",
    theatreName: "Cinepolis",
    location: { city: "Bangalore", state: "Karnataka", country: "India" },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "2 Gbps",
    avgBandwidth: "1.5 Gbps",
    planStartDate: "2026-01-01T10:00:00Z",
    billingCycle: BillingCycle.annual,
    deviceStatus: DeviceStatus.Online,
    downloadStatus: DownloadStatus.Downloading,
    osVersion: "5.2.1.6",
    storage: "1.5 TB"
  },
  {
    serialNo: "JTD-512340",
    theatreName: "PVR Cinemas",
    location: { city: "Hyderabad", state: "Telangana", country: "India" },
    ispPaymentResponsibility: "Qube",
    bandwidth: "500 Mbps",
    avgBandwidth: "400 Kbps",
    planStartDate: "2026-02-01T10:00:00Z",
    billingCycle: BillingCycle.monthly,
    deviceStatus: DeviceStatus.Offline,
    downloadStatus: DownloadStatus.Failed,
    osVersion: "5.2.1.3",
    storage: "1 TB"
  }
];
