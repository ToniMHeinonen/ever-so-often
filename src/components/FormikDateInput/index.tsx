import { useField } from 'formik'
import { TitleTopCenter } from '../../styles/FormFieldTitle'
import FormikErrorText from '../../styles/FormikErrorText'
import DateInput, { DateInputProps } from '../DateInput'
import { Container } from './style'

interface Props {
  name: string
  title: string
}

const FormikDateInput = ({
  name,
  title,
  ...props
}: Props & Partial<DateInputProps>): JSX.Element => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  const dateChanged = async (value: string): Promise<void> => {
    // Wait for setValue to be set so setTouched functions correctly
    await helpers.setValue(value)
    helpers.setTouched(true)
  }

  return (
    <Container>
      <TitleTopCenter>{title}</TitleTopCenter>
      <DateInput setDate={dateChanged} date={field.value} {...props} />
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </Container>
  )
}

export default FormikDateInput
