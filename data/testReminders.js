const testReminders = [
  {
    name: 'Cleaning day',
    startDate: '2022/01/01',
    endDate: '',
    activities: [
      { name: 'Vacuum', day: 1 },
      { name: 'Laundry', day: 2 },
      { name: 'Dusting', day: 3 },
    ],
  },
  {
    name: 'Workout',
    startDate: '2022/01/01',
    endDate: '',
    timeFrame: 4,
    activities: [
      { name: 'Jogging', day: 1 },
      { name: 'Gym', day: 3 },
    ],
  },
  {
    name: 'Game practise',
    startDate: '2022/01/01',
    endDate: '',
    activities: [
      { name: 'Super Smash Bros. Melee', day: 1 },
      { name: 'Rocket League', day: 2 },
      { name: 'Counter Strike: Global Offensive', day: 3 },
    ],
  },
  {
    name: 'Always inactive reminder',
    startDate: '2022/01/01',
    endDate: '',
    activities: [{ name: 'Never active', day: 9999 }],
  },
  {
    name: 'Another inactive reminder',
    startDate: '2022/01/01',
    endDate: '',
    activities: [{ name: 'Never active', day: 9999 }],
  },
]

export const activeTestReminder = {
  name: 'Active test reminder',
  startDate: '2022/01/01',
  endDate: '',
  activities: [{ name: 'Always active', day: 1 }],
}

export const inactiveTestReminder = {
  name: 'Inactive test reminder',
  startDate: '2022/01/01',
  endDate: '',
  activities: [{ name: 'Always inactive', day: 9999 }],
}

export default testReminders
