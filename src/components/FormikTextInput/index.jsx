import { useField } from 'formik'
import {
  TitleLeft,
  TitleTopCenter,
  TitleTopLeft,
} from '../../styles/FormFieldTitle'
import FormikErrorText from '../../styles/FormikErrorText'
import {
  Container,
  StyledTextInputHorizontal,
  StyledTextInputVertical,
  TextInputColumn,
  TextInputRow,
} from './style'

const FormikTextInput = ({ name, title, layout, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  let Layout, Title, StyledTextInput

  switch (layout) {
    case 'horizontal':
      Layout = TextInputRow
      Title = TitleLeft
      StyledTextInput = StyledTextInputHorizontal
      break
    case 'vertical-left':
      Layout = TextInputColumn
      Title = TitleTopLeft
      StyledTextInput = StyledTextInputVertical
      break
    case 'vertical':
    default:
      Layout = TextInputColumn
      Title = TitleTopCenter
      StyledTextInput = StyledTextInputVertical
      break
  }

  return (
    <Container>
      <Layout>
        <Title>{title}</Title>
        <StyledTextInput
          onChangeText={(value) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
        />
      </Layout>
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </Container>
  )
}

export default FormikTextInput
