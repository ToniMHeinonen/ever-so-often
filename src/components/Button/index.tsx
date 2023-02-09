import { Pressable, View } from 'react-native'

interface ButtonProps {
  pressed?: boolean
}

interface Props {
  onPress: () => void
  component?: React.FC<ButtonProps>
  children: React.ReactNode | React.ReactNode[]
}

const Button = ({ onPress, component, ...props }: Props): JSX.Element => {
  const Component = component ?? View
  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }): JSX.Element => (
        <Component pressed={pressed}>{props.children}</Component>
      )}
    </Pressable>
  )
}

export default Button
