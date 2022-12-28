import { Pressable } from 'react-native'
import { Container } from './style'
import theme from '../theme'
import { Icon } from '../../styles/Icon'

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
          <Icon
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
