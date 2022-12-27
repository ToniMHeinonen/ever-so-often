import { differenceInDays } from 'date-fns'
import _ from 'lodash'

export const getReminderMaxDay = (reminder) => {
  return _.maxBy(reminder.activities, (a) => a.day).day
}

export const getReminderActiveDay = (reminder, currentDate) => {
  const maxDay = getReminderMaxDay(reminder)
  const daysFromStartDate = differenceInDays(
    currentDate,
    new Date(reminder.startDate)
  )

  return (daysFromStartDate % maxDay) + 1
}
