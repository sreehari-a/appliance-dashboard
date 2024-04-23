import { FieldLabel, FieldValue, FieldValueSection } from "./styled";
import { FieldValueProps } from "./types";

export const TestIds = {
  FIELD_LABEL: "FIELD_LABEL",
  FIELD_VALUE: "FIELD_VALUE"
};

export const Field = ({ label, value, dataTestId = "" }: FieldValueProps) => {
  const testIdProp = dataTestId ? `-${dataTestId}` : "";
  return (
    <FieldValueSection data-testid={dataTestId}>
      {label && <FieldLabel data-testid={`${TestIds.FIELD_LABEL}${testIdProp}`}>{label}</FieldLabel>}
      {value && <FieldValue data-testid={`${TestIds.FIELD_VALUE}${testIdProp}`}>{value}</FieldValue>}
    </FieldValueSection>
  );
};
export default Field;
