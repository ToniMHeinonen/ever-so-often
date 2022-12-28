import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import theme from '../components/theme'

export const Icon = styled(Ionicons).attrs(({ size, color }) => ({
  size: size || 32,
  color: color || theme.colors.textPrimary,
}))`
  text-align: center;
`
