import styled from 'styled-components/native'
import {
  customStyle,
  formFieldBaseStyles,
  pressedContentColor,
} from '../../styles/fragments'

export const Container = styled.View`
  ${formFieldBaseStyles}
  padding: 10px;

  ${pressedContentColor}

  ${customStyle}
`
