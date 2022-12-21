import { useField } from 'formik'
import FormikErrorText from '../../styles/FormikErrorText'
import TextInput from '../../styles/TextInput'

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </>
  )
}

export default FormikTextInput
