import styled from 'styled-components/native'
import Text from '../../styles/Text'
import theme from '../theme'

const ErrorText = styled(Text)`
  marginleft: 10px;
  marginbottom: 10px;
  color: ${theme.colors.error};
`

export default ErrorText
