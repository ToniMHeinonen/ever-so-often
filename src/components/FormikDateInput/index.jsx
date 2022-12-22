import { useField } from 'formik'
import { FormFieldTitle } from '../../styles/FormFieldTitle'
import FormikErrorText from '../../styles/FormikErrorText'
import DateInput from '../DateInput'
import { Container } from './style'

const FormikDateInput = ({ name, title, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  const dateChanged = (value) => {
    helpers.setValue(value)
    helpers.setTouched(true)
  }

  return (
    <Container>
      <FormFieldTitle>{title}</FormFieldTitle>
      <DateInput setDate={dateChanged} date={field.value} {...props} />
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </Container>
  )
}

export default FormikDateInput