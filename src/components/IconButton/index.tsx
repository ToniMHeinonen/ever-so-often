import { Pressable } from 'react-native'
import { Container } from './style'
import theme from '../theme'
import { Icon } from '../../styles/Icon'

interface ButtonProps {
  pressed?: boolean
}

interface Props {
  onPress: () => void
  name: string
  size?: number
  color?: string
  style?: object
  styleComponent?: React.FC<ButtonProps>
}

const IconButton = ({
  onPress,
  name,
  size = 32,
  color = theme.colors.textPrimary,
  styleComponent,
  style,
  ...props
}: Props): JSX.Element => {
  const StyleContainer = styleComponent ?? Container

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }): JSX.Element => (
        <StyleContainer style={style} pressed={pressed}>
          <Icon name={name} size={size} color={color} />
        </StyleContainer>
      )}
    </Pressable>
  )
}

export default IconButton
