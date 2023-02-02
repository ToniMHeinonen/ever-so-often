/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components/native'
import { css } from 'styled-components'

interface Props {
  width?: number
  height?: number
}

const SizedBox = styled.View<Props>`
  ${({ width }) =>
    width &&
    css`
      width: ${width + 'px'};
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height + 'px'};
    `}
`

export default SizedBox
