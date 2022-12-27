import {
  getReminderActiveDay,
  getReminderMaxDay,
} from '../../utils/reminderHandler'

describe('getReminderMaxDay()', () => {
  const reminder1 = {
    startDate: '2022/01/01',
    activities: [{ day: 1 }, { day: 5 }, { day: 2 }],
  }

  it('reminder1 should return 5', () => {
    expect(getReminderMaxDay(reminder1)).toBe(5)
  })

  const reminder2 = {
    startDate: '2022/01/01',
    activities: [{ day: 10 }, { day: 4 }, { day: 120 }],
  }

  it('reminder2 should return 120', () => {
    expect(getReminderMaxDay(reminder2)).toBe(120)
  })
})

describe('getReminderActiveDay()', () => {
  const reminder = {
    startDate: '2022/01/01',
    activities: [
      { name: 'Activity 1', day: 1 },
      { name: 'Activity 2', day: 2 },
      { name: 'Activity 5', day: 5 },
    ],
  }

  it('start date should return 1', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/01'))).toBe(1)
  })

  it('next day should return 2', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/02'))).toBe(2)
  })
  it('fifth day should return 5', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/05'))).toBe(5)
  })
  it('sixth day should return 1', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/06'))).toBe(1)
  })
  it('day 20 should return 5', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/20'))).toBe(5)
  })
  it('month 2 day 1 should return 2', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/02/01'))).toBe(2)
  })
})
