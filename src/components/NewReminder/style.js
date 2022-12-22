import styled from 'styled-components/native'
import theme from '../theme'

export const Container = styled.View`
  background-color: ${theme.colors.contentBackground};
  padding: 15px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
