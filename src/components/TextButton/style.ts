import styled from 'styled-components/native'
import { customStyle, pressedContentColor } from '../../styles/fragments'
import Text from '../../styles/Text'
import theme from '../theme'

export const Container = styled.View`
  background-color: ${theme.colors.appBackground};
  margin: 5px;
  padding: 10px;
  border-width: 1px;
  border-radius: ${theme.borders.radiusDefault};
  border-color: ${theme.colors.primary};

  ${pressedContentColor}

  ${customStyle}
`

export const ButtonText = styled(Text).attrs({
  bold: true,
  title: true,
})`
  text-align: center;

  ${customStyle}
`
