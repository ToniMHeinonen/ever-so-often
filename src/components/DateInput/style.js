import styled from 'styled-components/native'
import { formFieldBaseStyles } from '../../styles/fragments'
import Text from '../../styles/Text'
import theme from '../theme'

export const DateButtonStyle = styled.View`
  ${formFieldBaseStyles}
  margin-top: 0px;
`

export const DateButtonTextStyle = styled(Text)`
  font-size: ${theme.fontSizes.body};
  padding: 4px 0;
  text-align: center;
`
