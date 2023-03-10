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
  TargetDayContainer,
  TimeFrameContainer,
  UpdateButtonsRow,
} from './style'
import SizedBox from '../../styles/SizedBox'
import FormikDateInput from '../FormikDateInput'
import { ScrollView, View } from 'react-native'
import Text from '../../styles/Text'
import FormikNumberInput from '../FormikNumberInput'
import FormikArrayError from '../FormikArrayError'
import IconButton from '../IconButton'
import theme from '../../utils/theme'

import Padding from '../../styles/Padding'
import { validationSchema } from './validation'
import { getFormattedNewDate } from '../../utils/reminderHandler'
import GettingStarted from './GettingStarted'
import constants from '../../utils/constants'
import { Activity, Reminder } from '../../utils/types'
import ImageBackground from '../../styles/ImageBackground'

export const initialActivity: Activity = {
  name: '',
  day: 1,
}

export const initialValues: Reminder = {
  id: '',
  name: '',
  startDate: getFormattedNewDate(),
  endDate: undefined,
  timeFrame: undefined,
  activities: [initialActivity],
}

export interface FormContainerProps {
  onSubmit: (values: Reminder) => void
  onRemove: () => void
  values: Reminder | undefined
}

interface FormProps {
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
  onRemove: () => void
  values: Reminder
  newReminder: boolean
}

export const ReminderFormContainer = ({
  onSubmit,
  onRemove,
  values,
}: FormContainerProps): JSX.Element => {
  const valuesToUse = { ...initialValues, ...values }
  const newReminder = values === undefined
  return (
    <ScrollView>
      <Formik
        initialValues={valuesToUse}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values }): JSX.Element => (
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

const ReminderForm = ({
  onSubmit,
  onRemove,
  values,
  newReminder,
}: FormProps): JSX.Element => {
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
        size={30}
        color={theme.colors.remove}
        styleComponent={RemoveReminderView}
        onPress={onRemove}
      />
    </UpdateButtonsRow>
  )

  return (
    <Container>
      <ImageBackground>
        <Row>
          <FormikTextInput
            name="name"
            title="Name"
            placeholder={constants.placeholder.reminderName}
            layout="horizontal"
          />
          <GettingStarted />
        </Row>
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
        <TimeFrameContainer>
          <FormikNumberInput
            title="Time Frame"
            name="timeFrame"
            placeholder="(optional)"
            minWidth={80}
            allowEmpty
          />
        </TimeFrameContainer>
      </ImageBackground>
      <Padding paddingTop={paddingLargeHeight} paddingBottom={paddingHeight}>
        <Text title center>
          Activities
        </Text>
      </Padding>
      <FieldArray
        name="activities"
        render={(arrayHelpers): JSX.Element => (
          <View>
            {values.activities.map((a, index) => (
              <View key={index}>
                <ImageBackground>
                  <Row>
                    <FormikTextInput
                      title="Name"
                      placeholder={constants.placeholder.activityName}
                      name={`activities[${index}].name`}
                      layout="vertical-left"
                    />
                    <TargetDayContainer>
                      <FormikNumberInput
                        title="Target Day"
                        name={`activities[${index}].day`}
                      />
                    </TargetDayContainer>
                    <SizedBox width={10} />
                    <IconButton
                      name="close"
                      size={16}
                      color={theme.colors.borderLight}
                      styleComponent={RemoveActivityView}
                      onPress={(): void => arrayHelpers.remove(index)}
                    />
                  </Row>
                </ImageBackground>
                <SizedBox height={paddingHeight} />
              </View>
            ))}
            <IconButton
              name="add-circle"
              onPress={(): void => arrayHelpers.push(initialActivity)}
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
