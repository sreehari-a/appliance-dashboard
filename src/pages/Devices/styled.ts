import styled from "styled-components";
import { GreyButton } from "../../styled";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const Header = styled.div`
  height: 4.5rem;
  padding: ${({theme}) => `${theme.padding.xl} ${theme.padding.xxxl}`};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.xxl};
  background: ${props => props.theme.colors.white};
`;
export const Content = styled.div`
  height: calc(100% - 4.5rem);
  padding: ${({theme}) => theme.padding.xxxl};
`;

export const ViewDeviceButton = styled(GreyButton)`
padding: ${({theme}) => `${theme.padding.xs} ${theme.padding.md}`};
`

export const StatusCountSection =  styled.div`
  width: 100%;
  padding:  ${({theme}) => `${theme.padding.xl} ${theme.padding.xxxl}`};
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.fontSize.xl};
  display: flex;
  gap: 1rem;
  overflow: auto;
`
