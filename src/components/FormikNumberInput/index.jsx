import { useField } from 'formik'
import { View } from 'react-native'
import { TitleTopCenter } from '../../styles/FormFieldTitle'
import FormikErrorText from '../../styles/FormikErrorText'
import NumberInput from '../NumberInput'
import { numberInputStyle } from './style'

const FormikNumberInput = ({ name, title, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <View>
      <TitleTopCenter>{title}</TitleTopCenter>
      <NumberInput
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={numberInputStyle}
        {...props}
      />
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </View>
  )
}

export default FormikNumberInput
