import styled from 'styled-components/native'
import theme from '../components/theme'
import Text from './Text'

const FormikErrorText = styled(Text)`
  margin-left: 10px;
  margin-bottom: 10px;
  color: ${theme.colors.error};
`

export default FormikErrorText
