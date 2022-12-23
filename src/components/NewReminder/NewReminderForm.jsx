import { FieldArray, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FormikTextInput from '../FormikTextInput'
import TextButton from '../TextButton'
import { Container, RemoveButton, Row } from './style'
import { format } from 'date-fns'
import SizedBox from '../../styles/SizedBox'
import FormikDateInput from '../FormikDateInput'
import { ScrollView, View } from 'react-native'
import Text from '../../styles/Text'
import FormikNumberInput from '../FormikNumberInput'
import FormikArrayError from '../FormikArrayError'
import IconButton from '../IconButton'
import theme from '../theme'
import _ from 'lodash'

const initialActivity = {
  name: '',
  day: 1,
}

const initialValues = {
  name: '',
  startDate: format(new Date(), 'yyyy/MM/dd'),
  endDate: '',
  activities: [initialActivity],
}

yup.addMethod(yup.array, 'uniqueProperty', function (propertyPath, message) {
  return this.test('unique', '', function (list) {
    const errors = []

    list.forEach((item, index) => {
      const propertyValue = _.get(item, propertyPath)

      if (
        propertyValue &&
        _.filter(list, [propertyPath, propertyValue]).length > 1
      ) {
        errors.push(
          this.createError({
            path: `${this.path}[${index}].${propertyPath}`,
            message,
          })
        )
      }
    })

    if (!_.isEmpty(errors)) {
      throw new yup.ValidationError(errors)
    }

    return true
  })
})

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
    .uniqueProperty('day', 'Day must be unique')
    .required('Activities are required')
    .min(1, 'At least 1 activity is required'),
})

export const NewReminderFormContainer = ({ onSubmit }) => {
  return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values }) => (
          <NewReminderForm onSubmit={handleSubmit} values={values} />
        )}
      </Formik>
    </ScrollView>
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
        <FormikDateInput
          name="endDate"
          title="End Date"
          placeholder="(optional)"
        />
      </Row>
      <SizedBox height={15} />
      <Text title center>
        Activities
      </Text>
      <SizedBox height={10} />
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
                    layout="vertical-left"
                  />
                  <FormikNumberInput
                    title="Target Day"
                    name={`activities[${index}].day`}
                  />
                  <IconButton
                    name="close"
                    size={18}
                    color={theme.colors.error}
                    styleComponent={RemoveButton}
                    onPress={() => arrayHelpers.remove(index)}
                  />
                </Row>
                <SizedBox height={10} />
              </View>
            ))}
            <IconButton
              name="add-circle"
              onPress={() => arrayHelpers.push(initialActivity)}
            />
          </View>
        )}
      />
      <FormikArrayError name="activities" />
      <SizedBox height={15} />
      <TextButton onPress={onSubmit}>Save</TextButton>
    </Container>
  )
}
