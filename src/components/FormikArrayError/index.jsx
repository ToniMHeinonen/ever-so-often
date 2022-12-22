import { useField } from 'formik'
import { View } from 'react-native'
import FormikErrorText from '../../styles/FormikErrorText'

const FormikArrayError = ({ name }) => {
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
