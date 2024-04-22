import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  margin: ${props => `${props.theme.margin.md} 0`};
  display: flex;
  gap: 0.5rem;
  align-items: center;
  list-style-type: none;
  padding: ${({theme}) => `${theme.padding.sm} ${theme.padding.xxxxl}`};
  margin: 0;
  font-size: ${props => props.theme.fontSize.sm};
`;


export const BreadcrumbItem = styled.div`
  font-weight: ${props => props.theme.fontWeight.regular};
  &:last-child {
    margin-right: 0;
  }
`;
export const RightArrowImage = styled.img`
text-align: center;
`

export const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: ${props => props.theme.fontWeight.bold};
  height: 1.25rem;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;
