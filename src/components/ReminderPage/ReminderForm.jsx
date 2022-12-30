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
import Padding from '../../styles/Padding'
import { getReminderMaxDay } from '../../utils/reminderHandler'

const initialActivity = {
  name: '',
  day: 1,
}

const initialValues = {
  name: '',
  startDate: format(new Date(), 'yyyy/MM/dd'),
  endDate: '',
  timeFrame: '',
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

yup.addMethod(yup.mixed, 'moreThanMaxDay', function () {
  return this.test('moreThanMaxDay', '', function (value) {
    // Check only if value has been provided
    if (!value) return true

    const maxDay = getReminderMaxDay({ activities: this.parent.activities })

    if (value < maxDay) {
      const error = this.createError({
        path: `${this.path}`,
        message: 'Time frame must be at least the highest target day',
      })
      throw new yup.ValidationError(error)
    }

    return true
  })
})

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  startDate: yup.string().required('Start date is required'),
  endDate: yup.string(),
  timeFrame: yup.mixed().moreThanMaxDay(),
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

export const ReminderFormContainer = ({ onSubmit, values }) => {
  const valuesToUse = { ...initialValues, ...values }
  const newReminder = values === undefined
  return (
    <ScrollView>
      <Formik
        initialValues={valuesToUse}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values }) => (
          <ReminderForm
            onSubmit={handleSubmit}
            values={values}
            newReminder={newReminder}
          />
        )}
      </Formik>
    </ScrollView>
  )
}

const ReminderForm = ({ onSubmit, values, newReminder }) => {
  const paddingHeight = 10
  const paddingLargeHeight = 15

  return (
    <Container>
      <FormikTextInput
        name="name"
        title="Name"
        placeholder="Reminder name..."
        layout="horizontal"
      />
      <Padding paddingVertical={paddingHeight}>
        <Row>
          <FormikDateInput name="startDate" title="Start Date" />
          <FormikDateInput
            name="endDate"
            title="End Date"
            placeholder="(optional)"
          />
        </Row>
      </Padding>
      <FormikNumberInput
        title="Time Frame"
        name="timeFrame"
        placeholder="(optional)"
        minWidth={80}
        allowEmpty
      />
      <Padding paddingTop={paddingLargeHeight} paddingBottom={paddingHeight}>
        <Text title center>
          Activities
        </Text>
      </Padding>
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
                <SizedBox height={paddingHeight} />
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
      <SizedBox height={paddingLargeHeight} />
      <TextButton onPress={onSubmit}>
        {newReminder ? 'Submit' : 'Save'}
      </TextButton>
    </Container>
  )
}
