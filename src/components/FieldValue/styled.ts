import styled from "styled-components";

export const FieldValueSection = styled.div`
color: ${props => props.theme.colors.textPrimary};
width: 100%;
`

export const FieldValue = styled.div`
font-size: ${props => props.theme.fontSize.md};
line-height: ${props => props.theme.lineHeight.lg};
`;

export const FieldLabel = styled.div`
font-size: ${props => props.theme.fontSize.sm};
line-height: ${props => props.theme.lineHeight.lg};
font-weight: ${props => props.theme.fontWeight.bold};
`