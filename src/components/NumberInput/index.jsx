import TextInput from '../../styles/TextInput'
import IconButton from '../IconButton'
import {
  Container,
  minusButtonStyle,
  numberInputStyle,
  plusButtonStyle,
} from './style'

const NumberInput = ({
  value,
  onChange,
  onBlur,
  minValue = 1,
  allowDecimals,
  style,
  ...props
}) => {
  const onFocusLost = () => {
    const textValue = Number(value)
    const limitedValue = parseNumber(textValue)

    onChange(limitedValue)
    onBlur()
  }

  const parseNumber = (value) => {
    const limited = isNaN(value) ? minValue : Math.max(value, minValue)
    return allowDecimals ? limited : Math.round(limited)
  }

  const decrease = () => {
    const textValue = Number(value)
    const num = parseNumber(textValue - 1)
    onChange(num)
  }

  const increase = () => {
    const textValue = Number(value)
    const num = parseNumber(textValue + 1)
    onChange(num)
  }

  return (
    <Container>
      <IconButton
        name="remove"
        size={22}
        style={[minusButtonStyle, style]}
        onPress={decrease}
      />
      <TextInput
        textAlign="center"
        keyboardType="numeric"
        style={[numberInputStyle, style]}
        onChangeText={onChange}
        onBlur={onFocusLost}
        value={value.toString()}
        {...props}
      />
      <IconButton
        name="add"
        size={22}
        style={[plusButtonStyle, style]}
        onPress={increase}
      />
    </Container>
  )
}

export default NumberInput
