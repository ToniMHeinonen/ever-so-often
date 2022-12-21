import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FormikTextInput from '../FormikTextInput'
import TextButton from '../TextButton'
import { Container, DateRow, DateTitleRow } from './style'
import { format } from 'date-fns'
import SizedBox from '../../styles/SizedBox'
import FormikDateInput from '../FormikDateInput'
import { FormFieldTitle } from '../../styles/FormFieldTitle'

const initialValues = {
  title: '',
  startDate: format(new Date(), 'yyyy/MM/dd'),
  endDate: '',
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
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
      {({ handleSubmit }) => <NewReminderForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const NewReminderForm = ({ onSubmit }) => {
  return (
    <Container>
      <FormikTextInput name="title" placeholder="Title" />
      <DateRow>
        <FormikDateInput name="startDate" title="Start Date" />
        <FormikDateInput name="endDate" title="End Date (optional)" />
      </DateRow>
      <SizedBox height={15} />
      <TextButton onPress={onSubmit}>Submit</TextButton>
    </Container>
  )
}
