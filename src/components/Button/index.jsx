import { Pressable, View } from 'react-native'

const Button = ({ component, ...props }) => {
  const Component = component ?? View
  return (
    <Pressable>
      {({ pressed }) => (
        <Component pressed={pressed}>{props.children}</Component>
      )}
    </Pressable>
  )
}

export default Button
