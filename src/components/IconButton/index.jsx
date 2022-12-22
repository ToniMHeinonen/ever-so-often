import { Pressable } from 'react-native'
import { Container } from './style'
import Ionicons from '@expo/vector-icons/Ionicons'
import theme from '../theme'

const IconButton = ({ onPress, name, size, color, style, ...props }) => {
  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => (
        <Container style={style} pressed={pressed}>
          <Ionicons
            name={name}
            size={size || 32}
            color={color || theme.colors.textPrimary}
          />
        </Container>
      )}
    </Pressable>
  )
}

export default IconButton
