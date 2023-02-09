import { getFormattedNewDate } from '../src/utils/reminderHandler'
import { Reminder } from '../src/utils/types'

const initialReminders: Reminder[] = [
  {
    id: '',
    name: 'Cleaning day',
    startDate: getFormattedNewDate(),
    endDate: '',
    timeFrame: 6,
    activities: [
      { name: 'Vacuum', day: 1 },
      { name: 'Laundry', day: 3 },
      { name: 'Dusting', day: 5 },
    ],
  },
  {
    id: '',
    name: 'Workout',
    startDate: getFormattedNewDate(),
    endDate: '',
    activities: [
      { name: 'Jogging', day: 2 },
      { name: 'Gym', day: 4 },
      { name: 'Swimming', day: 6 },
    ],
  },
]

export default initialReminders
