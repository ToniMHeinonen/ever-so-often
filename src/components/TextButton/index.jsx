import { Pressable } from 'react-native'
import { ButtonText, Container } from './style'

const TextButton = ({
  onPress,
  buttonProps,
  buttonStyle,
  buttonStyleComponent,
  textProps,
  textStyle,
  textStyleComponent,
  ...props
}) => {
  const ButtonStyle = buttonStyleComponent ?? Container
  const TextStyle = textStyleComponent ?? ButtonText

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => (
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
