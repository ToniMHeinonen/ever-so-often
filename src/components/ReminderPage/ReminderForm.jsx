import { FieldArray, Formik } from 'formik'
import React from 'react'
import FormikTextInput from '../FormikTextInput'
import TextButton from '../TextButton'
import {
  Container,
  DeleteButton,
  RemoveActivityView,
  RemoveReminderView,
  Row,
  SaveButton,
  saveButtonStyle,
  UpdateButtonsRow,
} from './style'
import SizedBox from '../../styles/SizedBox'
import FormikDateInput from '../FormikDateInput'
import { ScrollView, View } from 'react-native'
import Text from '../../styles/Text'
import FormikNumberInput from '../FormikNumberInput'
import FormikArrayError from '../FormikArrayError'
import IconButton from '../IconButton'
import theme from '../theme'

import Padding from '../../styles/Padding'
import { validationSchema } from './validation'
import { getFormattedNewDate } from '../../utils/reminderHandler'
import GettingStarted from './GettingStarted'

const initialActivity = {
  name: '',
  day: 1,
}

const initialValues = {
  name: '',
  startDate: getFormattedNewDate(),
  endDate: '',
  timeFrame: '',
  activities: [initialActivity],
}

export const ReminderFormContainer = ({ onSubmit, onRemove, values }) => {
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
            onRemove={onRemove}
            values={values}
            newReminder={newReminder}
          />
        )}
      </Formik>
    </ScrollView>
  )
}

const ReminderForm = ({ onSubmit, onRemove, values, newReminder }) => {
  const paddingHeight = 10
  const paddingLargeHeight = 15

  const newButtons = <TextButton onPress={onSubmit}>Submit</TextButton>

  const updateButtons = (
    <UpdateButtonsRow>
      <SaveButton onPress={onSubmit} buttonStyle={saveButtonStyle}>
        Save
      </SaveButton>
      <DeleteButton
        name="trash"
        size={32}
        color={theme.colors.error}
        styleComponent={RemoveReminderView}
        onPress={onRemove}
      />
    </UpdateButtonsRow>
  )

  return (
    <Container>
      <GettingStarted />
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
                    styleComponent={RemoveActivityView}
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
      {newReminder ? newButtons : updateButtons}
    </Container>
  )
}
