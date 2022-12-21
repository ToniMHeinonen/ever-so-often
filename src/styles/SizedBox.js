import styled from 'styled-components/native'
import { css } from 'styled-components'

const SizedBox = styled.View`
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
