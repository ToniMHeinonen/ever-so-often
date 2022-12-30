import {
  getActiveActivity,
  getReminderActiveDay,
  getReminderMaxDay,
  sortRemindersByActiveState,
  splitRemindersByActiveState,
} from '../../utils/reminderHandler'

const oneDayReminder = {
  value: 1,
  startDate: '2022/01/01',
  activities: [{ day: 1 }],
}

const twoDayReminder = {
  value: 2,
  startDate: '2022/01/01',
  activities: [{ day: 1 }, { day: 2 }],
}

const smallReminders = [oneDayReminder, twoDayReminder]

const endDateReminder1 = {
  value: 1,
  startDate: '2022/01/01',
  endDate: '2022/01/01',
  activities: [{ name: 'Activity 1', day: 1 }],
}

const endDateReminder2 = {
  value: 2,
  startDate: '2022/01/01',
  endDate: '2022/01/02',
  activities: [{ name: 'Activity 1', day: 1 }],
}

const endDateReminders = [endDateReminder1, endDateReminder2]

describe('getReminderMaxDay()', () => {
  it('reminder with highest day 5 should return 5', () => {
    const reminder = {
      startDate: '2022/01/01',
      activities: [{ day: 1 }, { day: 5 }, { day: 2 }],
    }

    expect(getReminderMaxDay(reminder)).toBe(5)
  })

  it('reminder with highest day 120 should return 120', () => {
    const reminder = {
      startDate: '2022/01/01',
      activities: [{ day: 10 }, { day: 4 }, { day: 120 }],
    }

    expect(getReminderMaxDay(reminder)).toBe(120)
  })

  it('reminder with time frame 5 should return 5', () => {
    const reminder = {
      startDate: '2022/01/01',
      timeFrame: 5,
      activities: [{ day: 1 }, { day: 2 }, { day: 3 }],
    }

    expect(getReminderMaxDay(reminder)).toBe(5)
  })

  it('reminder with undefined time frame should return 3', () => {
    const reminder = {
      startDate: '2022/01/01',
      timeFrame: undefined,
      activities: [{ day: 1 }, { day: 2 }, { day: 3 }],
    }

    expect(getReminderMaxDay(reminder)).toBe(3)
  })

  it('reminder with empty time frame should return 3', () => {
    const reminder = {
      startDate: '2022/01/01',
      timeFrame: '',
      activities: [{ day: 1 }, { day: 2 }, { day: 3 }],
    }

    expect(getReminderMaxDay(reminder)).toBe(3)
  })

  it('oneDayReminder should return 1', () => {
    expect(getReminderMaxDay(oneDayReminder)).toBe(1)
  })

  it('twoDayReminder should return 2', () => {
    expect(getReminderMaxDay(twoDayReminder)).toBe(2)
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

  it('second day should return 2', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/02'))).toBe(2)
  })
  it('fifth day should return 5', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/05'))).toBe(5)
  })
  it('sixth day should return 1', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/06'))).toBe(1)
  })
  it('sixth day with time frame 6 should return 6', () => {
    const alteredReminder = { ...reminder, timeFrame: 6 }
    expect(getReminderActiveDay(alteredReminder, new Date('2022/01/06'))).toBe(
      6
    )
  })
  it('day 20 should return 5', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/01/20'))).toBe(5)
  })
  it('month 2 day 1 should return 2', () => {
    expect(getReminderActiveDay(reminder, new Date('2022/02/01'))).toBe(2)
  })
  it('oneDayReminder start date should return 1', () => {
    expect(getReminderActiveDay(oneDayReminder, new Date('2022/01/01'))).toBe(1)
  })
  it('twoDayReminder start date should return 1', () => {
    expect(getReminderActiveDay(twoDayReminder, new Date('2022/01/01'))).toBe(1)
  })
  it('oneDayReminder second day should return 1', () => {
    expect(getReminderActiveDay(oneDayReminder, new Date('2022/01/02'))).toBe(1)
  })
  it('twoDayReminder second day should return 2', () => {
    expect(getReminderActiveDay(twoDayReminder, new Date('2022/01/02'))).toBe(2)
  })
})

describe('getActiveActivity()', () => {
  const reminder = {
    startDate: '2022/01/01',
    activities: [
      { name: 'Activity 1', day: 1 },
      { name: 'Activity 3', day: 3 },
      { name: 'Activity 5', day: 5 },
    ],
  }

  it('start date should return 1', () => {
    expect(getActiveActivity(reminder, new Date('2022/01/01')).day).toBe(1)
  })
  it('second day should return undefined', () => {
    expect(getActiveActivity(reminder, new Date('2022/01/02'))).toBe(undefined)
  })
  it('third day should return 3', () => {
    expect(getActiveActivity(reminder, new Date('2022/01/03')).day).toBe(3)
  })
  it('fourth day should return undefined', () => {
    expect(getActiveActivity(reminder, new Date('2022/01/04'))).toBe(undefined)
  })
  it('fifth day should return 5', () => {
    expect(getActiveActivity(reminder, new Date('2022/01/05')).day).toBe(5)
  })
  it('sixth day should return 1', () => {
    expect(getActiveActivity(reminder, new Date('2022/01/06')).day).toBe(1)
  })
  it('oneDayReminder start date should return 1', () => {
    expect(getActiveActivity(oneDayReminder, new Date('2022/01/01')).day).toBe(
      1
    )
  })
  it('twoDayReminder start date should return 1', () => {
    expect(getActiveActivity(twoDayReminder, new Date('2022/01/01')).day).toBe(
      1
    )
  })
  it('oneDayReminder second day should return 1', () => {
    expect(getActiveActivity(oneDayReminder, new Date('2022/01/02')).day).toBe(
      1
    )
  })
  it('oneDayReminder second day with time frame 2 should return undefined', () => {
    const alteredOneDayReminder = { ...oneDayReminder, timeFrame: 2 }
    expect(
      getActiveActivity(alteredOneDayReminder, new Date('2022/01/02'))
    ).toBe(undefined)
  })
  it('twoDayReminder second day should return 2', () => {
    expect(getActiveActivity(twoDayReminder, new Date('2022/01/02')).day).toBe(
      2
    )
  })
  describe('end date defined', () => {
    it('start date should return 1', () => {
      expect(
        getActiveActivity(endDateReminder1, new Date('2022/01/01')).day
      ).toBe(1)
    })
    it('second day should return undefined', () => {
      expect(getActiveActivity(endDateReminder1, new Date('2022/01/02'))).toBe(
        undefined
      )
    })
  })
})

describe('Active state handlers', () => {
  const reminders = [
    {
      value: 1,
      startDate: '2022/01/01',
      activities: [
        { name: 'Activity 3', day: 3 },
        { name: 'Activity 5', day: 5 },
      ],
    },
    {
      value: 2,
      startDate: '2022/01/01',
      activities: [
        { name: 'Activity 1', day: 1 },
        { name: 'Activity 5', day: 5 },
      ],
    },
    {
      value: 3,
      startDate: '2022/01/01',
      activities: [
        { name: 'Activity 3', day: 3 },
        { name: 'Activity 5', day: 5 },
      ],
    },
    {
      value: 4,
      startDate: '2022/01/01',
      activities: [
        { name: 'Activity 1', day: 1 },
        { name: 'Activity 3', day: 3 },
        { name: 'Activity 4', day: 4 },
      ],
    },
  ]

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

    it('smallReminders start date return order should be 1, 2', () => {
      const sorted = sortRemindersByActiveState(
        smallReminders,
        new Date('2022/01/01')
      )
      expect(sorted[0].value).toBe(1)
      expect(sorted[1].value).toBe(2)
    })

    it('smallReminders second day return order should be 1, 2', () => {
      const sorted = sortRemindersByActiveState(
        smallReminders,
        new Date('2022/01/02')
      )
      expect(sorted[0].value).toBe(1)
      expect(sorted[1].value).toBe(2)
    })

    describe('endDateReminders', () => {
      it('start date return order should be 1, 2', () => {
        const sorted = sortRemindersByActiveState(
          endDateReminders,
          new Date('2022/01/01')
        )
        expect(sorted[0].value).toBe(1)
        expect(sorted[1].value).toBe(2)
      })

      it('second day return order should be 2, 1', () => {
        const sorted = sortRemindersByActiveState(
          endDateReminders,
          new Date('2022/01/02')
        )
        expect(sorted[0].value).toBe(2)
        expect(sorted[1].value).toBe(1)
      })

      it('third day return order should be 1, 2', () => {
        const sorted = sortRemindersByActiveState(
          endDateReminders,
          new Date('2022/01/03')
        )
        expect(sorted[0].value).toBe(1)
        expect(sorted[1].value).toBe(2)
      })
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
    it('fifth day with time frame 5 should return [1, 2, 3] and [4]', () => {
      const alteredReminders = [...reminders]
      alteredReminders[3].timeFrame = 5

      const [active, inactive] = splitRemindersByActiveState(
        alteredReminders,
        new Date('2022/01/05')
      )
      expect(active[0].value).toBe(1)
      expect(active[1].value).toBe(2)
      expect(active[2].value).toBe(3)
      expect(inactive[0].value).toBe(4)
    })
    describe('smallReminders', () => {
      it('start date should return [1, 2] and []', () => {
        const [active, inactive] = splitRemindersByActiveState(
          smallReminders,
          new Date('2022/01/01')
        )
        expect(inactive.length).toBe(0)
        expect(active[0].value).toBe(1)
        expect(active[1].value).toBe(2)
      })
      it('second day should return [1, 2] and []', () => {
        const [active, inactive] = splitRemindersByActiveState(
          smallReminders,
          new Date('2022/01/02')
        )
        expect(inactive.length).toBe(0)
        expect(active[0].value).toBe(1)
        expect(active[1].value).toBe(2)
      })
    })
    describe('endDateReminders', () => {
      it('start date should return [1, 2] and []', () => {
        const [active, inactive] = splitRemindersByActiveState(
          endDateReminders,
          new Date('2022/01/01')
        )
        expect(inactive.length).toBe(0)
        expect(active[0].value).toBe(1)
        expect(active[1].value).toBe(2)
      })

      it('second day should return [2] and [1]', () => {
        const [active, inactive] = splitRemindersByActiveState(
          endDateReminders,
          new Date('2022/01/02')
        )
        expect(active[0].value).toBe(2)
        expect(inactive[0].value).toBe(1)
      })

      it('third day should return [] and [1, 2]', () => {
        const [active, inactive] = splitRemindersByActiveState(
          endDateReminders,
          new Date('2022/01/03')
        )
        expect(active.length).toBe(0)
        expect(inactive[0].value).toBe(1)
        expect(inactive[1].value).toBe(2)
      })
    })
  })
})
