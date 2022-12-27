import { differenceInDays } from 'date-fns'
import _ from 'lodash'

/**
 * Retrieves maximum activity day for reminder.
 * @param {object} reminder reminder to check
 * @returns {number} maximum activity day
 */
export const getReminderMaxDay = (reminder) => {
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
 * Retrieves the active day for reminder.
 * @param {object} reminder reminder to check
 * @param {Date} currentDate current date
 * @returns found active activity, undefined if not active
 */
export const getActiveDay = (reminder, currentDate) => {
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
    (r) => getActiveDay(r, currentDate) === undefined
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
  const [active, inactive] = _.partition(reminders, (r) => {
    const day = getActiveDay(r, currentDate)
    console.log('day', day)
    return getActiveDay(r, currentDate) !== undefined
  })
  return [active, inactive]
}
