import styled from 'styled-components/native'
import { formFieldBaseStyles } from '../../styles/fragments'
import Text from '../../styles/Text'
import TextInput from '../../styles/TextInput'
import theme from '../theme'

export const TextInputRow = styled.View`
  flex-direction: row;
`

export const TextInputTitle = styled(Text)`
  ${formFieldBaseStyles}
  margin-right: 0px;
  border-right-width: 2px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${theme.colors.appBarBackground};
  padding: 10px;
  align-self: center;
  border-right-color: ${theme.colors.appBackground};
`

export const StyledTextInput = styled(TextInput)`
  flex: 1;
  margin-left: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`
