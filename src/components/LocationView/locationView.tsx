import { getLocationString } from "../../utils";
import { StyledLocation } from "./styled";
import { LocationViewProps } from "./types";

export const TestIds = {
  THEATRE_NAME: "THEATRE_NAME",
  LOCATION_VALUE: "LOCATION",
};

function LocationView({ data }: LocationViewProps) {
  const { location } = data || {} ;
  const locationText = getLocationString(location);
  return (
    <>
      <div data-testid={TestIds.THEATRE_NAME}>{data.theatreName}</div>
      <StyledLocation data-testid={TestIds.LOCATION_VALUE}>
        {locationText}
      </StyledLocation>
    </>
  );
}
export default LocationView;
