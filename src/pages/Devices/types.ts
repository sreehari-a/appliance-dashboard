import { BillingCycle, DeviceStatus, DownloadStatus } from "../../constants/appConstants";

export interface DeviceBasicInfo {
  serialNo: string;
  theatreName: string;
  location: Location;
  bandwidth: string;
  avgBandwidth: string;
  deviceStatus: DeviceStatus;
  downloadStatus: DownloadStatus;
  osVersion: string;
  view?: string;
}
export interface DeviceInfo extends DeviceBasicInfo {
  ispPaymentResponsibility: string;
  planStartDate: string;
  billingCycle: BillingCycle;
  storage: string;
}

export interface Location {
  city: string;
  state: string;
  country: string;
}

export type StatusCountObject = { count: number; order: number };

export type StatusCount = { [key in DownloadStatus]?: number };

export type StatusCountMap = { downloadStatus: string; count?: number };

export type StatusCountArray = StatusCountMap[];
