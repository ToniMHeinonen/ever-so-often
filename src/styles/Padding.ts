/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components/native'
import { css } from 'styled-components'

interface Props {
  padding?: number
  paddingHorizontal?: number
  paddingVertical?: number
  paddingTop?: number
  paddingBottom?: number
  paddingRight?: number
  paddingLeft?: number
}

const Padding = styled.View<Props>`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding + 'px'};
    `}

  ${({ paddingHorizontal }) =>
    paddingHorizontal &&
    css`
      padding-left: ${paddingHorizontal + 'px'};
      padding-right: ${paddingHorizontal + 'px'};
    `}

  ${({ paddingVertical }) =>
    paddingVertical &&
    css`
      padding-top: ${paddingVertical + 'px'};
      padding-bottom: ${paddingVertical + 'px'};
    `}

  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop + 'px'};
    `}

  ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom + 'px'};
    `}

  ${({ paddingRight }) =>
    paddingRight &&
    css`
      padding-right: ${paddingRight + 'px'};
    `}

  ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft + 'px'};
    `}
`

export default Padding
