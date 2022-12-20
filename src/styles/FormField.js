import styled from 'styled-components/native'
import { css } from 'styled-components/native'
import theme from '../components/theme'

export const formFieldBaseStyles = css`
  background-color: ${theme.colors.appBackground};
  margin: 5px;
  padding: 5px;
  border-width: 1px;
  border-color: ${theme.colors.borderLight};
  border-radius: ${theme.borders.radiusDefault};

  ${({ error }) =>
    error &&
    css`
      border-color: ${theme.colors.error};
    `}

  ${({ pressed }) =>
    pressed &&
    css`
      background-color: ${theme.colors.contentBackground};
    `}
`

export const FormField = styled.View`
  ${formFieldBaseStyles}
`
