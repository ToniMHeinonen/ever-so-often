import styled from 'styled-components/native'
import {
  customStyle,
  formFieldBaseStyles,
  pressedContentColor,
} from '../../styles/fragments'
import Ionicons from '@expo/vector-icons/Ionicons'

export const Container = styled.View`
  ${formFieldBaseStyles}
  padding: 10px;

  ${pressedContentColor}

  ${customStyle}
`

export const StyledIonicons = styled(Ionicons)`
  text-align: center;
`
