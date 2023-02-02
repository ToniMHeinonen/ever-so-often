import { Pressable } from 'react-native'
import { Container } from './style'
import theme from '../theme'
import { Icon } from '../../styles/Icon'

interface Props {
  onPress: () => void
  name: string
  size?: number
  color?: string
  style?: object
  styleComponent?: React.FC
}

const IconButton = ({
  onPress,
  name,
  size,
  color,
  styleComponent,
  style,
  ...props
}: Props): JSX.Element => {
  // TODO: Make this work without using any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const StyleContainer: any = styleComponent ?? Container

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }): JSX.Element => (
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
