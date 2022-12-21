import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FormikTextInput from '../FormikTextInput'
import TextButton from '../TextButton'
import { Container } from './style'
import { format } from 'date-fns'
import FormikDateInput from '../FormikDateInput'
import SizedBox from '../../styles/SizedBox'

const initialValues = {
  title: '',
  startDate: format(new Date(), 'yyyy/MM/dd'),
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  startDate: yup.string().required('Start date is required'),
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
      <FormikDateInput name="startDate" />
      <SizedBox height={15} />
      <TextButton onPress={onSubmit}>Submit</TextButton>
    </Container>
  )
}
