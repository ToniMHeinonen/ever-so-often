const constants = {
  appBar: {
    height: 55,
  },
  localStorage: {
    initialized: 'initialized',
  },
  route: {
    home: 'Home',
    reminder: 'Reminder',
  },
  validation: {
    name: 'Name is required',
    startDate: 'Start date is required',
    endDate: 'End date must be later than start date',
    timeFrame: 'Time frame must be at least the highest target day',
    targetDay: 'Day is required',
    dayUnique: 'Day must be unique',
    dayNumber: 'Day must be a number',
    activityCount: 'At least 1 activity is required',
  },
  placeholder: {
    reminderName: 'Reminder name...',
    activityName: 'Activity for the day...',
  },
}

export default constants
