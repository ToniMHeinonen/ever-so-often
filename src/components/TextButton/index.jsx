import { Pressable } from 'react-native'
import { ButtonText, Container } from './style'

const TextButton = ({
  onPress,
  textColor,
  buttonStyle,
  textStyle,
  ...props
}) => {
  const ButtonStyle = buttonStyle ?? Container
  const TextStyle = textStyle ?? ButtonText

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => (
        <ButtonStyle pressed={pressed}>
          <TextStyle color={textColor}>{props.children}</TextStyle>
        </ButtonStyle>
      )}
    </Pressable>
  )
}

export default TextButton
