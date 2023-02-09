import { useField } from 'formik'
import { TextInputProps } from 'react-native'
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

interface Props {
  name: string
  title: string
  layout?: string
}

const FormikTextInput = ({
  name,
  title,
  layout,
  ...props
}: Props & Partial<TextInputProps>): JSX.Element => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  const controlFocusEnd = async (): Promise<void> => {
    await helpers.setValue(field.value.trim())
    helpers.setTouched(true)
  }

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
          onChangeText={(value): void => helpers.setValue(value)}
          onBlur={controlFocusEnd}
          value={field.value}
          {...props}
        />
      </Layout>
      {showError && <FormikErrorText>{meta.error}</FormikErrorText>}
    </Container>
  )
}

export default FormikTextInput
