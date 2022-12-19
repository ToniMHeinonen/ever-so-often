import { Pressable, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import Text from '../../styles/Text'
import FormikTextInput from '../FormikTextInput'

const initialValues = {
  title: '',
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
})

export const NewReminderFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <NewReminderForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const NewReminderForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="title" placeholder="Title" />
      <Pressable onPress={onSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  )
}
