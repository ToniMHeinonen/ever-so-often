import { NewReminderFormContainer } from './NewReminderForm'

const NewReminder = () => {
  const onSubmit = async (values) => {
    console.log(values)
  }

  return <NewReminderFormContainer onSubmit={onSubmit} />
}

export default NewReminder
