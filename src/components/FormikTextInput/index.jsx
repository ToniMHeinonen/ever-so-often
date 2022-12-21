import { useField } from 'formik'
import { View } from 'react-native'
import FormikErrorText from '../../styles/FormikErrorText'
import { StyledTextInput, TextInputRow, TextInputTitle } from './style'

const FormikTextInput = ({ name, title, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <View>
      <TextInputRow>
        <TextInputTitle>{title}</TextInputTitle>
        <StyledTextInput
          onChangeText={(value) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
        />
      </TextInputRow>
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </View>
  )
}

export default FormikTextInput
