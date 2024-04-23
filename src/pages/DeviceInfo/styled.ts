import styled from "styled-components";

export const HeaderCard = styled.div`
  padding: ${({ theme }) => ` 0 ${theme.padding.xxxl} ${theme.padding.md}`};
  background: ${({ theme }) => theme.colors.white};
`;
export const HeaderTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${(props) => `${props.theme.margin.sm} 0`};
`;
export const HeaderText = styled.div`
  font-size: ${(props) => props.theme.fontSize.xxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

export const ButtonContainer = styled.div<{ height?: string; gap?: string }>`
  display: flex;
  gap: ${(props) => props.gap || "1rem"};
  height: ${(props) => `${props.height}` || "100%"};
`;

export const DataDisplay = styled.div`
  display: grid;
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

export const DataDisplayLocation = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.md};
`;

export const Tag = styled.div`
  height: 1.25rem;
  border-radius: ${(props) => props.theme.borderRadius.xxl};
  background: ${(props) => props.theme.colors.grey};
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.padding.md};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const TagCircle = styled.div<{ bgcolor: string }>`
  background: ${(props) => props.bgcolor};
  height: 0.625rem;
  width: 0.625rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  margin-right: ${(props) => props.theme.fontSize.sm};
`;

export const PieImage = styled.img`
  margin-right: ${(props) => props.theme.fontSize.sm};
`;

export const DeviceDetailsSection = styled.div`
  padding-bottom: ${({ theme }) => theme.padding.md};
  border-bottom: ${(props) => props.theme.border.divider};
  display: grid;
  gap: 0.5rem;
`;

export const NavSection = styled.nav`
  margin-top: ${(props) => props.theme.fontSize.sm};
`;

export const NavList = styled.ol`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavButton = styled.li`
  margin: ${(props) => `${props.theme.margin.sm} ${props.theme.margin.lg}`};
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: ${(props) => props.theme.lineHeight.lg};
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const DeviceMontoringSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  box-shadow: ${(props) => props.theme.boxShadow.shadowDark};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin: ${(props) => props.theme.margin.xxxl};
  padding: ${(props) => props.theme.padding.xxxl};
  row-gap: 1.5rem;
`;
