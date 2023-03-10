import { TextInputProps } from 'react-native'
import TextInput from '../../styles/TextInput'
import IconButton from '../IconButton'
import {
  Container,
  minusButtonStyle,
  numberInputStyle,
  plusButtonStyle,
} from './style'

export interface NumberInputProps extends Omit<TextInputProps, 'onChange'> {
  value: string
  onChange?: (value: number | string) => void
  onBlur?: () => void
  minValue?: number
  maxLength?: number
  minWidth?: number
  allowDecimals?: boolean
  allowEmpty?: boolean
  style?: object
}

const NumberInput = ({
  value,
  onChange,
  onBlur,
  minValue = 1,
  maxLength = 4,
  minWidth = 40,
  allowDecimals,
  allowEmpty,
  style,
  ...props
}: NumberInputProps): JSX.Element => {
  const onFocusLost = (): void => {
    if (allowEmpty && value === '') return

    const textValue = Number(value)
    const limitedValue = parseNumber(textValue)

    onChange?.(limitedValue)
    onBlur?.()
  }

  const parseNumber = (value: number): number => {
    const limited = isNaN(value) ? minValue : Math.max(value, minValue)
    return allowDecimals ? limited : Math.round(limited)
  }

  const decrease = (): void => {
    const textValue = Number(value)
    const num = parseNumber(textValue - 1)
    onChange?.(num)
  }

  const increase = (): void => {
    const textValue = Number(value)
    const num = parseNumber(textValue + 1)
    onChange?.(num)
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
        style={[numberInputStyle, style, { minWidth: minWidth }]}
        onChangeText={onChange}
        onBlur={onFocusLost}
        value={value ? value.toString() : ''}
        maxLength={maxLength}
        // Use multiline to fix cursor jumping to right when input is modified to empty
        multiline
        numberOfLines={1}
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
