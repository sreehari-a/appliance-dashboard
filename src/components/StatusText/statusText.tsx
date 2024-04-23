import { StatusContainer, StatusImage, StatusLabel } from "./styled";
import { StatusTextProps } from "./types";

export const TestIds = {
  STATUS_IMAGE: "STATUS_IMAGE",
  STATUS_LABEL: "STATUS_LABEL"
};

function StatusText({ label, color }: StatusTextProps) {
  return (
    <StatusContainer>
      <StatusImage data-testid={TestIds.STATUS_IMAGE} bgcolor={color} />
      <StatusLabel data-testid={TestIds.STATUS_LABEL}>{label}</StatusLabel>
    </StatusContainer>
  );
}
export default StatusText;
