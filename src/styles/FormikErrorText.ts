import styled from 'styled-components/native'
import theme from '../utils/theme'
import Text from './Text'

const FormikErrorText = styled(Text)`
  background-color: ${theme.colors.appBackground};
  border-color: ${theme.colors.borderLight};
  border-width: 1px;
  border-top-width: 0px;
  border-bottom-left-radius: ${theme.borders.radiusDefault};
  border-bottom-right-radius: ${theme.borders.radiusDefault};
  margin: -5px 10px 5px 10px;
  padding: 0px 5px 5px 5px;
  color: ${theme.colors.error};
`

export default FormikErrorText
