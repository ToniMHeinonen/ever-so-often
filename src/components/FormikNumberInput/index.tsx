import { useField } from 'formik'
import { View } from 'react-native'
import { TitleTopCenter } from '../../styles/FormFieldTitle'
import FormikErrorText from '../../styles/FormikErrorText'
import NumberInput, { NumberInputProps } from '../NumberInput'
import { numberInputStyle } from './style'

interface Props {
  name: string
  title: string
}

const FormikNumberInput = ({
  name,
  title,
  ...props
}: Props & Partial<NumberInputProps>): JSX.Element => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <View>
      <TitleTopCenter>{title}</TitleTopCenter>
      <NumberInput
        {...props}
        onChange={(value): void => helpers.setValue(value)}
        onBlur={(): void => helpers.setTouched(true)}
        value={field.value}
        style={numberInputStyle}
      />
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </View>
  )
}

export default FormikNumberInput
