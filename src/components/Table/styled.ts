import styled from "styled-components";
import dropdownArrow from "../../assets/arrow.svg";
import searchIcon from "../../assets/Search.svg";
import { GreyButton } from "../../styled";

export const CustomTable = styled.table<{ height: string }>`
  width: 100%;
  background: ${props => props.theme.colors.white};
  height: ${(props) => props.height}px;
  display: block;
  overflow: auto;
  border-collapse: collapse;
  box-shadow: ${props => props.theme.boxShadow.shadowLight};
`;

export const CustomTableHead = styled.th<{
  padding: string;
  borderwidth: string;
}>`
  text-align: left;
  font-size: ${props => props.theme.fontSize.md};
  line-height: ${props => props.theme.lineHeight.lg};
  padding: ${(props) => props.padding};
  border-bottom: ${(props) => props.theme.border.normal};
  border-width: ${(props) => props.borderwidth}px;
`;

export const Cell = styled.td`
  padding: ${({theme}) => `${theme.padding.lg} ${theme.padding.xxl}`};
  font-size: ${props => props.theme.fontSize.sm};
  line-height: ${props => props.theme.lineHeight.md};
  vertical-align: baseline;
`;

export const THead = styled.thead`
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.white};
`;

export const CountSelectorInput = styled.select`
  background: ${props => props.theme.colors.white};
  border: ${props => props.theme.border.normal};
  color: ${props => props.theme.colors.textPrimary};
  background-image: url(${dropdownArrow});
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: right 6px center;
  width: 69px;
  padding: ${({theme}) => `${theme.padding.xs} ${theme.padding.md}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  height: 100%;
  appearance: none;
`;

export const CountSelectorLabel = styled.div`
  color: ${(props) => props.color};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 100%;
`;

export const PageButton = styled(GreyButton)<{ selected: boolean }>`
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.selected ? props.theme.colors.lightBlue : "transparent")};
  border: ${(props) => (props.selected ? `1px solid ${props.theme.colors.darkBlue}` : "none")};
  color: ${(props) => (props.selected ? props.theme.colors.darkBlue : "inherit")};
  aspect-ratio: 1;
  &:hover {
    border: ${props => `1px solid ${props.theme.colors.darkBlue}`};
  }
`;

export const ToolPanel = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;
  justify-content: space-between;
`;
export const SearchFilterWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  width: 15rem;
  background: transparent url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right 6px center;
  color: ${props => props.theme.colors.black};
  outline: none;
  border: ${props => props.theme.border.normal};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: ${({theme}) => `${theme.padding.xs} ${theme.padding.md}`};
  &::-webkit-search-cancel-button {
    color: ${props => props.theme.colors.red};
    position: relative;
    right: 0.625rem;
  }
`;
