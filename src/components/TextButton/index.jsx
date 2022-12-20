import { Pressable } from 'react-native'
import { ButtonText, Container } from './style'

const TextButton = ({ onPress, buttonStyle, textStyle, ...props }) => {
  const ButtonStyle = buttonStyle ? buttonStyle : Container
  const TextStyle = textStyle ? textStyle : ButtonText

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => (
        <ButtonStyle pressed={pressed}>
          <TextStyle>{props.children}</TextStyle>
        </ButtonStyle>
      )}
    </Pressable>
  )
}

export default TextButton
