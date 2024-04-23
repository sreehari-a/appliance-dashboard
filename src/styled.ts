import styled from "styled-components";

export const GreyButton = styled.button`
  height: 100%;
  padding: ${({ theme }) => `${theme.padding.sm} ${theme.padding.md}`};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.textPrimary};
  &:focus,
  :focus-visible {
    outline: none;
  }
  display: flex;
  align-items: center;
  gap: 0.375rem;
  line-height: ${(props) => props.theme.lineHeight.md};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  &:disabled {
    opacity: 0.5;
  }
`;
