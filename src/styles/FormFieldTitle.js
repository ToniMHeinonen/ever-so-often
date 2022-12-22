import styled from 'styled-components/native'
import theme from '../components/theme'
import { formFieldBaseStyles } from './fragments'
import Text from './Text'

export const FormFieldTitle = styled(Text)`
  ${formFieldBaseStyles}
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 2px;
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.appBackground};
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${theme.colors.appBarBackground};
  color: ${theme.colors.textSecondary};
`