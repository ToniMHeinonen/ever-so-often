/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { css } from 'styled-components/native'
import theme from '../utils/theme'

interface PressedContentColorProps {
  pressed?: boolean
}

interface FormFieldBaseStylesProps {
  error?: boolean
}

interface CustomStyleProps {
  // TODO: Make this work with custom css values without using any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any
}

export const pressedContentColor = css<PressedContentColorProps>`
  ${({ pressed }) =>
    pressed &&
    css`
      background-color: ${theme.colors.contentBackground};
    `}
`

export const formFieldBaseStyles = css<FormFieldBaseStylesProps>`
  background-color: ${theme.colors.appBackground};
  margin: 5px;
  padding: 5px;
  border-width: ${theme.borders.widthDefault};
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

  ${pressedContentColor}
`

export const customStyle = css<CustomStyleProps>`
  ${({ style }) => style}
`
