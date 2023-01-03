import { differenceInDays, format } from 'date-fns'
import _ from 'lodash'

/**
 * Retrieves maximum activity day for reminder.
 * @param {object} reminder reminder to check
 * @returns {number} maximum activity day or time frame if defined
 */
export const getReminderMaxDay = (reminder) => {
  // Return time frame if defined, since it is always the highest value
  const timeFrame = reminder.timeFrame
  if (timeFrame && timeFrame != '') return timeFrame

  return _.maxBy(reminder.activities, (a) => a.day).day
}

/**
 * Retrieves the reminder active day number.
 * @param {object} reminder reminder to check
 * @param {Date} currentDate current date
 * @returns {number} active day number
 */
export const getReminderActiveDay = (reminder, currentDate) => {
  const maxDay = getReminderMaxDay(reminder)
  const daysFromStartDate = differenceInDays(
    currentDate,
    new Date(reminder.startDate)
  )

  return (daysFromStartDate % maxDay) + 1
}

/**
 * Retrieves the active activity for reminder.
 * @param {object} reminder reminder to check
 * @param {Date} currentDate current date
 * @returns {object | undefined}found active activity, undefined if not active
 */
export const getActiveActivity = (reminder, currentDate) => {
  // If end date has already passed, return undefined
  if (
    reminder.endDate !== '' &&
    differenceInDays(new Date(reminder.endDate), currentDate) < 0
  ) {
    return undefined
  }

  const activeDay = getReminderActiveDay(reminder, currentDate)
  return _.find(reminder.activities, { day: activeDay })
}

/**
 * Sorts reminders by their active state.
 * @param {[object]} reminders reminders to sort
 * @param {Date} currentDate current date
 * @returns {[object]} sorted reminders by active state, active reminders first
 */
export const sortRemindersByActiveState = (reminders, currentDate) => {
  const sorted = _.sortBy(
    reminders,
    (r) => getActiveActivity(r, currentDate) === undefined
  )
  return sorted
}

/**
 * Splits reminders by their active state.
 * @param {[object]} reminders reminders to split
 * @param {Date} currentDate current date
 * @returns {[[object], [object]]} splitted reminders by active state, active in first array
 */
export const splitRemindersByActiveState = (reminders, currentDate) => {
  const [active, inactive] = _.partition(
    reminders,
    (r) => getActiveActivity(r, currentDate) !== undefined
  )
  return [active, inactive]
}

export const getFormattedNewDate = () => format(new Date(), 'yyyy/MM/dd')
