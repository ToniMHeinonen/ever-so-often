import { Pressable } from 'react-native'
import { Container, StyledIonicons } from './style'
import theme from '../theme'

const IconButton = ({
  onPress,
  name,
  size,
  color,
  styleComponent,
  style,
  ...props
}) => {
  const StyleContainer = styleComponent ?? Container

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => (
        <StyleContainer style={style} pressed={pressed}>
          <StyledIonicons
            name={name}
            size={size || 32}
            color={color || theme.colors.textPrimary}
          />
        </StyleContainer>
      )}
    </Pressable>
  )
}

export default IconButton
