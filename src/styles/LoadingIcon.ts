import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import theme from '../utils/theme'

const LoadingIcon = styled(ActivityIndicator).attrs({
  size: 'large',
  color: theme.colors.primary,
})`
  flex: 1;
  justify-content: center;
`

export default LoadingIcon
