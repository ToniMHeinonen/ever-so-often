import { differenceInDays } from 'date-fns'
import _ from 'lodash'

export const getReminderMaxDay = (reminder) => {
  const max = _.maxBy(reminder.activities, (a) => a.day)
  console.log(max)
  return _.maxBy(reminder.activities, (a) => a.day).day
}

export const getReminderActiveDay = (reminder, currentDate) => {
  const maxDay = getReminderMaxDay(reminder)
  const daysFromStartDate = differenceInDays(
    currentDate,
    new Date(reminder.startDate)
  )

  return daysFromStartDate % maxDay
}
