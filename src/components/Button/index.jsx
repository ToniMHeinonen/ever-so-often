import { Pressable, View } from 'react-native'

const Button = ({ onPress, component, ...props }) => {
  const Component = component ?? View
  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => (
        <Component pressed={pressed}>{props.children}</Component>
      )}
    </Pressable>
  )
}

export default Button
