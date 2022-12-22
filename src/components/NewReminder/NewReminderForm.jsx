import { FieldArray, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FormikTextInput from '../FormikTextInput'
import TextButton from '../TextButton'
import { Container, Row } from './style'
import { format } from 'date-fns'
import SizedBox from '../../styles/SizedBox'
import FormikDateInput from '../FormikDateInput'
import { View } from 'react-native'
import Text from '../../styles/Text'
import FormikNumberInput from '../FormikNumberInput'
import FormikArrayError from '../FormikArrayError'

const initialActivity = {
  name: '',
  day: '1',
}

const initialValues = {
  name: '',
  startDate: format(new Date(), 'yyyy/MM/dd'),
  endDate: '',
  activities: [initialActivity],
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  startDate: yup.string().required('Start date is required'),
  endDate: yup.string(),
  activities: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required('Name is required'),
        day: yup
          .number()
          .typeError('Day must be a number')
          .required('Day is required'),
      })
    )
    .required('Activities are required')
    .min(1, 'At least 1 activity is required'),
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
        layout="horizontal"
      />
      <Row>
        <FormikDateInput name="startDate" title="Start Date" />
        <FormikDateInput name="endDate" title="End Date (optional)" />
      </Row>
      <SizedBox height={15} />
      <Text title center>
        Activities
      </Text>
      <FieldArray
        name="activities"
        render={(arrayHelpers) => (
          <View>
            {values.activities.map((a, index) => (
              <View key={index}>
                <Row>
                  <FormikTextInput
                    title="Name"
                    placeholder="Activity for the day..."
                    name={`activities[${index}].name`}
                  />
                  <FormikNumberInput
                    title="Target Day"
                    name={`activities[${index}].day`}
                  />
                </Row>
                <TextButton onPress={() => arrayHelpers.remove(index)}>
                  Remove
                </TextButton>
              </View>
            ))}
            <TextButton onPress={() => arrayHelpers.push(initialActivity)}>
              Add
            </TextButton>
          </View>
        )}
      />
      <FormikArrayError name="activities" />
      <SizedBox height={15} />
      <TextButton onPress={onSubmit}>Save</TextButton>
    </Container>
  )
}
