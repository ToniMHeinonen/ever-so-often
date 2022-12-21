import styled from 'styled-components/native'
import { css } from 'styled-components/native'
import theme from '../components/theme'

export const formFieldBaseStyles = css`
  background-color: ${theme.colors.appBackground};
  margin: 5px;
  padding: 5px;
  border-width: 1px;
  /* Colors must be defined individually so they can be overridden*/
  border-left-color: ${theme.colors.borderLight};
  border-right-color: ${theme.colors.borderLight};
  border-top-color: ${theme.colors.borderLight};
  border-bottom-color: ${theme.colors.borderLight};
  border-radius: ${theme.borders.radiusDefault};

  ${({ error }) =>
    error &&
    css`
      border-left-color: ${theme.colors.error};
      border-right-color: ${theme.colors.error};
      border-top-color: ${theme.colors.error};
      border-bottom-color: ${theme.colors.error};
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
