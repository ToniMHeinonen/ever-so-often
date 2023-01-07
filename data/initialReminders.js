import { getFormattedNewDate } from '../src/utils/reminderHandler'

const initialReminders = [
  {
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