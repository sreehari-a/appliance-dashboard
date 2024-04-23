import Field from "../../../components/FieldValue/FieldValue";
import { DeviceInfo } from "../../Devices/types";
import { DeviceInfoFields } from "../config";
import { DeviceMontoringSection } from "../styled";
import { DeviceMonitoringProps } from "../types";

export const DeviceMonitoring = ({ appliance }: DeviceMonitoringProps) => {
  return (
    <DeviceMontoringSection>
      {DeviceInfoFields.map(({ key, label, getValue }) => {
        const value = getValue ? getValue(appliance as DeviceInfo) : appliance?.[key as keyof typeof appliance];
        return <Field dataTestId={label} label={label} value={value as string} />;
      })}
    </DeviceMontoringSection>
  );
};
