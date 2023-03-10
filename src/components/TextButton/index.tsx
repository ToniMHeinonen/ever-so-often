import { Pressable } from 'react-native'
import { ButtonText, Container } from './style'

interface Props {
  onPress: () => void
  buttonProps?: object
  buttonStyle?: object
  buttonStyleComponent?: React.FC
  textProps?: object
  textStyle?: object
  textStyleComponent?: React.FC
  children?: React.ReactNode
}

const TextButton = ({
  onPress,
  buttonProps,
  buttonStyle,
  buttonStyleComponent,
  textProps,
  textStyle,
  textStyleComponent,
  ...props
}: Props): JSX.Element => {
  const ButtonStyle = buttonStyleComponent ?? Container
  const TextStyle = textStyleComponent ?? ButtonText

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }): JSX.Element => (
        <ButtonStyle pressed={pressed} style={buttonStyle} {...buttonProps}>
          <TextStyle style={textStyle} {...textProps}>
            {props.children}
          </TextStyle>
        </ButtonStyle>
      )}
    </Pressable>
  )
}

export default TextButton
