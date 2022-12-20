import styled, { css } from 'styled-components/native'
import Text from '../../styles/Text'
import theme from '../theme'

export const Container = styled.View`
  background-color: ${theme.colors.appBackground};
  margin: 5px;
  padding: 10px;
  border-width: 1px;
  border-radius: ${theme.borders.radiusDefault};
  border-color: ${theme.colors.primary};

  ${({ pressed }) =>
    pressed &&
    css`
      background-color: ${theme.colors.contentBackground};
    `}
`

export const ButtonText = styled(Text).attrs({
  bold: true,
  title: true,
})`
  text-align: center;
  padding: 2px 0px;
`
