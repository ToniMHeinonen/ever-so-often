import { differenceInDays, format } from 'date-fns'
import _ from 'lodash'
import { Activity, Reminder } from './types'

/**
 * Retrieves maximum activity day for reminder.
 * @param {Reminder} reminder reminder to check
 * @returns {number} maximum activity day or time frame if defined, -1 if something went wrong
 */
export const getReminderMaxDay = (reminder: Reminder): number => {
  // Return time frame if defined, since it is always the highest value
  const timeFrame = reminder.timeFrame
  if (timeFrame) return timeFrame

  return _.maxBy(reminder.activities, (a) => a.day)?.day || -1
}

/**
 * Retrieves the reminder active day number.
 * @param {Reminder} reminder reminder to check
 * @param {Date} currentDate current date
 * @returns {number} active day number
 */
export const getReminderActiveDay = (
  reminder: Reminder,
  currentDate: Date
): number => {
  const maxDay = getReminderMaxDay(reminder)
  const daysFromStartDate = differenceInDays(
    currentDate,
    new Date(reminder.startDate)
  )

  return (daysFromStartDate % maxDay) + 1
}

/**
 * Retrieves the active activity for reminder.
 * @param {Reminder} reminder reminder to check
 * @param {Date} currentDate current date
 * @returns {Activity | undefined}found active activity, undefined if not active
 */
export const getActiveActivity = (
  reminder: Reminder,
  currentDate: Date
): Activity | undefined => {
  // If end date has already passed, return undefined
  if (
    reminder.endDate &&
    differenceInDays(new Date(reminder.endDate), currentDate) < 0
  ) {
    return undefined
  }

  const activeDay = getReminderActiveDay(reminder, currentDate)
  return _.find(reminder.activities, { day: activeDay })
}

/**
 * Sorts reminders by their active state.
 * @param {[Reminder]} reminders reminders to sort
 * @param {Date} currentDate current date
 * @returns {[Reminder]} sorted reminders by active state, active reminders first
 */
export const sortRemindersByActiveState = (
  reminders: Reminder[],
  currentDate: Date
): Reminder[] => {
  const sorted = _.sortBy(
    reminders,
    (r) => getActiveActivity(r, currentDate) === undefined
  )
  return sorted
}

/**
 * Splits reminders by their active state.
 * @param {[Reminder]} reminders reminders to split
 * @param {Date} currentDate current date
 * @returns {[[Reminder], [Reminder]]} splitted reminders by active state, active in first array
 */
export const splitRemindersByActiveState = (
  reminders: Reminder[],
  currentDate: Date
): [Reminder[], Reminder[]] => {
  const [active, inactive] = _.partition(
    reminders,
    (r) => getActiveActivity(r, currentDate) !== undefined
  )
  return [active, inactive]
}

export const getFormattedNewDate = (): string =>
  format(new Date(), 'yyyy/MM/dd')
