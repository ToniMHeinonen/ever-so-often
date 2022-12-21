import { useField } from 'formik'
import FormikErrorText from '../../styles/FormikErrorText'
import DateInput from '../DateInput'

const FormikDateInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  const dateChanged = (value) => {
    helpers.setValue(value)
    helpers.setTouched(true)
  }

  return (
    <>
      <DateInput setDate={dateChanged} date={field.value} {...props} />
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </>
  )
}

export default FormikDateInput
