import {
  getActiveDay,
  getReminderActiveDay,
  getReminderMaxDay,
  sortRemindersByActiveState,
  splitRemindersByActiveState,
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

describe('getActiveDay()', () => {
  const reminder = {
    startDate: '2022/01/01',
    activities: [
      { name: 'Activity 1', day: 1 },
      { name: 'Activity 3', day: 3 },
      { name: 'Activity 5', day: 5 },
    ],
  }

  it('start date should return 1', () => {
    expect(getActiveDay(reminder, new Date('2022/01/01')).day).toBe(1)
  })

  it('second day should return undefined', () => {
    expect(getActiveDay(reminder, new Date('2022/01/02'))).toBe(undefined)
  })
  it('third day should return 3', () => {
    expect(getActiveDay(reminder, new Date('2022/01/03')).day).toBe(3)
  })
  it('fourth day should return undefined', () => {
    expect(getActiveDay(reminder, new Date('2022/01/04'))).toBe(undefined)
  })
  it('fifth day should return 5', () => {
    expect(getActiveDay(reminder, new Date('2022/01/05')).day).toBe(5)
  })
  it('sixth day should return 1', () => {
    expect(getActiveDay(reminder, new Date('2022/01/06')).day).toBe(1)
  })
})

describe('Active state handlers', () => {
  const reminder1 = {
    value: 1,
    startDate: '2022/01/01',
    activities: [
      { name: 'Activity 3', day: 3 },
      { name: 'Activity 5', day: 5 },
    ],
  }

  const reminder2 = {
    value: 2,
    startDate: '2022/01/01',
    activities: [
      { name: 'Activity 1', day: 1 },
      { name: 'Activity 5', day: 5 },
    ],
  }

  const reminder3 = {
    value: 3,
    startDate: '2022/01/01',
    activities: [
      { name: 'Activity 3', day: 3 },
      { name: 'Activity 5', day: 5 },
    ],
  }

  const reminder4 = {
    value: 4,
    startDate: '2022/01/01',
    activities: [
      { name: 'Activity 1', day: 1 },
      { name: 'Activity 3', day: 3 },
      { name: 'Activity 4', day: 4 },
    ],
  }

  const reminders = [reminder1, reminder2, reminder3, reminder4]

  describe('sortRemindersByActiveState()', () => {
    it('start date return order should be 2, 4, 1, 3', () => {
      const sorted = sortRemindersByActiveState(
        reminders,
        new Date('2022/01/01')
      )
      expect(sorted[0].value).toBe(2)
      expect(sorted[1].value).toBe(4)
      expect(sorted[2].value).toBe(1)
      expect(sorted[3].value).toBe(3)
    })

    it('second day return order should be 1, 2, 3, 4', () => {
      const sorted = sortRemindersByActiveState(
        reminders,
        new Date('2022/01/02')
      )
      expect(sorted[0].value).toBe(1)
      expect(sorted[1].value).toBe(2)
      expect(sorted[2].value).toBe(3)
      expect(sorted[3].value).toBe(4)
    })

    it('third day return order should be 1, 3, 4, 2', () => {
      const sorted = sortRemindersByActiveState(
        reminders,
        new Date('2022/01/03')
      )
      expect(sorted[0].value).toBe(1)
      expect(sorted[1].value).toBe(3)
      expect(sorted[2].value).toBe(4)
      expect(sorted[3].value).toBe(2)
    })

    it('fourth day return order should be 4, 1, 2, 3', () => {
      const sorted = sortRemindersByActiveState(
        reminders,
        new Date('2022/01/04')
      )
      expect(sorted[0].value).toBe(4)
      expect(sorted[1].value).toBe(1)
      expect(sorted[2].value).toBe(2)
      expect(sorted[3].value).toBe(3)
    })

    it('fifth day return order should be 1, 2, 3, 4', () => {
      const sorted = sortRemindersByActiveState(
        reminders,
        new Date('2022/01/05')
      )
      expect(sorted[0].value).toBe(1)
      expect(sorted[1].value).toBe(2)
      expect(sorted[2].value).toBe(3)
      expect(sorted[3].value).toBe(4)
    })
  })

  describe('splitRemindersByActiveState()', () => {
    it('start date should return [2, 4] and [1, 3]', () => {
      const [active, inactive] = splitRemindersByActiveState(
        reminders,
        new Date('2022/01/01')
      )
      expect(active[0].value).toBe(2)
      expect(active[1].value).toBe(4)
      expect(inactive[0].value).toBe(1)
      expect(inactive[1].value).toBe(3)
    })
    it('second day should return [] and [1, 2, 3, 4]', () => {
      const [active, inactive] = splitRemindersByActiveState(
        reminders,
        new Date('2022/01/02')
      )
      expect(active.length).toBe(0)
      expect(inactive[0].value).toBe(1)
      expect(inactive[1].value).toBe(2)
      expect(inactive[2].value).toBe(3)
      expect(inactive[3].value).toBe(4)
    })
    it('third day should return [1, 3, 4] and [2]', () => {
      const [active, inactive] = splitRemindersByActiveState(
        reminders,
        new Date('2022/01/03')
      )
      expect(active[0].value).toBe(1)
      expect(active[1].value).toBe(3)
      expect(active[2].value).toBe(4)
      expect(inactive[0].value).toBe(2)
    })
    it('fourth day should return [4] and [1, 2, 3]', () => {
      const [active, inactive] = splitRemindersByActiveState(
        reminders,
        new Date('2022/01/04')
      )
      expect(active[0].value).toBe(4)
      expect(inactive[0].value).toBe(1)
      expect(inactive[1].value).toBe(2)
      expect(inactive[2].value).toBe(3)
    })
    it('fifth day should return [1, 2, 3, 4] and []', () => {
      const [active, inactive] = splitRemindersByActiveState(
        reminders,
        new Date('2022/01/05')
      )
      expect(inactive.length).toBe(0)
      expect(active[0].value).toBe(1)
      expect(active[1].value).toBe(2)
      expect(active[2].value).toBe(3)
      // 4 is active since it has 4 max days, so Activity 1 is active
      expect(active[3].value).toBe(4)
    })
  })
})
