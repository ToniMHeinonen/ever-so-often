import styled from 'styled-components/native'
import { css } from 'styled-components'

const Padding = styled.View`
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
