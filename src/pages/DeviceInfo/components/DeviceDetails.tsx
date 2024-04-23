import { GreyButton } from "../../../styled";
import {
  ButtonContainer,
  DataDisplay,
  DataDisplayLocation,
  DeviceDetailsSection,
  HeaderCard,
  HeaderText,
  HeaderTextContainer,
  NavButton,
  NavList,
  NavSection,
  PieImage,
  Tag,
  TagCircle
} from "../styled";
import { DeviceDetailsProps } from "../types";
import DemandIcon from "../../../assets/Demand.svg";
import LogsIcon from "../../../assets/Logs.svg";
import { DeviceStatusConfig, DownloadStatusConfig } from "../../../constants/appConstants";
import PieIcon from "../../../assets/Pie.svg";
import { getLocationString } from "../../../utils";

export const TestIds = {
  SERIAL_NO: "SERIAL_NO",
  THEATRE_NAME: "THEATRE_NAME",
  LOCATION: "LOCATION",
  TAG_CIRCLE: "TAG_CIRCLE",
  TAG_LABEL: "TAG_LABEL"
};

export const DeviceDetails = ({ appliance }: DeviceDetailsProps) => {
  const { location, serialNo, theatreName, deviceStatus, storage } = appliance || {};

  const locationSubtitle = getLocationString(location);

  const config =
    (deviceStatus && DeviceStatusConfig[deviceStatus as keyof typeof DeviceStatusConfig]) || DeviceStatusConfig.DEFAULT;

  return (
    <HeaderCard>
      <DeviceDetailsSection>
        <HeaderTextContainer>
          <HeaderText data-testid={TestIds.SERIAL_NO}>{serialNo}</HeaderText>
          <ButtonContainer>
            <GreyButton>
              <img src={DemandIcon} />
              Speedtest
            </GreyButton>
            <GreyButton>
              <img src={LogsIcon} />
              Logs
            </GreyButton>
          </ButtonContainer>
        </HeaderTextContainer>
        <DataDisplay>
          <div data-testid={TestIds.THEATRE_NAME}>{theatreName}</div>
          <DataDisplayLocation data-testid={TestIds.LOCATION}>{locationSubtitle}</DataDisplayLocation>
        </DataDisplay>
        <ButtonContainer height={"1.25rem"} gap={"0.5rem"}>
          <Tag>
            <TagCircle data-testid={TestIds.TAG_CIRCLE} bgcolor={config?.color}></TagCircle>
            <span data-testid={TestIds.TAG_LABEL}>{config?.label}</span>
          </Tag>
          <Tag>
            <PieImage src={PieIcon} alt='' height={10} />
            <span>{storage}</span>
          </Tag>
        </ButtonContainer>
      </DeviceDetailsSection>
      <NavSection>
        <NavList>
          <NavButton>Details</NavButton>
          <NavButton>Content</NavButton>
          <NavButton>Bandwidth</NavButton>
        </NavList>
      </NavSection>
    </HeaderCard>
  );
};
