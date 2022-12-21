import { FieldArray, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FormikTextInput from '../FormikTextInput'
import TextButton from '../TextButton'
import { Container, DateRow } from './style'
import { format } from 'date-fns'
import SizedBox from '../../styles/SizedBox'
import FormikDateInput from '../FormikDateInput'
import { View } from 'react-native'
import Text from '../../styles/Text'

const initialTask = {
  text: '',
  eachDay: '1',
}

const initialValues = {
  name: '',
  startDate: format(new Date(), 'yyyy/MM/dd'),
  endDate: '',
  tasks: [initialTask],
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  startDate: yup.string().required('Start date is required'),
  endDate: yup.string(),
})

export const NewReminderFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values }) => (
        <NewReminderForm onSubmit={handleSubmit} values={values} />
      )}
    </Formik>
  )
}

const NewReminderForm = ({ onSubmit, values }) => {
  return (
    <Container>
      <FormikTextInput
        name="name"
        title="Name"
        placeholder="Reminder name..."
      />
      <DateRow>
        <FormikDateInput name="startDate" title="Start Date" />
        <FormikDateInput name="endDate" title="End Date (optional)" />
      </DateRow>
      <SizedBox height={15} />
      <Text title center>
        Tasks
      </Text>
      <FieldArray
        name="tasks"
        render={(arrayHelpers) => (
          <View>
            {values.tasks.map((reminder, index) => (
              <View key={index}>
                <FormikTextInput title="Task" name={`tasks[${index}].text`} />
                <FormikTextInput
                  title="Repeat every x days"
                  name={`tasks[${index}].eachDay`}
                />
                <TextButton onPress={() => arrayHelpers.remove(index)}>
                  Remove
                </TextButton>
              </View>
            ))}
            <TextButton onPress={() => arrayHelpers.push(initialTask)}>
              Add
            </TextButton>
          </View>
        )}
      />
      <SizedBox height={15} />
      <TextButton onPress={onSubmit}>Submit</TextButton>
    </Container>
  )
}
