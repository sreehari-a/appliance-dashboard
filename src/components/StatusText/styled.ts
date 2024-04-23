import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  height: 1.5rem;
  align-items: center;
`;

export const StatusImage = styled.div<{ bgcolor: string }>`
  background: ${(props) => props.bgcolor};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  margin-right: ${(props) => props.theme.fontSize.sm};
`;

export const StatusLabel = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;
