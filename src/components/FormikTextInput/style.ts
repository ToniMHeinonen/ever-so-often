import styled from 'styled-components/native'
import TextInput from '../../styles/TextInput'

export const Container = styled.View`
  flex: 1;
`

export const TextInputRow = styled.View`
  flex-direction: row;
`

export const TextInputColumn = styled.View``

export const StyledTextInputHorizontal = styled(TextInput)`
  flex: 1;
  margin-left: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`

export const StyledTextInputVertical = styled(TextInput)`
  margin-top: 0px;
`
