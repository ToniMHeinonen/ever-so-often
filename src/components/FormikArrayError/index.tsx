import { useField } from 'formik'
import { View } from 'react-native'
import FormikErrorText from '../../styles/FormikErrorText'

interface Props {
  name: string
}

const FormikArrayError = ({ name }: Props): JSX.Element => {
  const [, meta] = useField(name)

  return (
    <View>
      {typeof meta.error === 'string' ? (
        <FormikErrorText>{meta.error}</FormikErrorText>
      ) : null}
    </View>
  )
}

export default FormikArrayError
