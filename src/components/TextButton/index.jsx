import { Pressable } from 'react-native'
import { ButtonText, Container } from './style'

const TextButton = ({ onPress, ...props }) => {
  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => (
        <Container pressed={pressed}>
          <ButtonText bold title>
            {props.children}
          </ButtonText>
        </Container>
      )}
    </Pressable>
  )
}

export default TextButton
