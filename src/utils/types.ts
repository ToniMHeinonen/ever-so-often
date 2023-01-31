export interface Reminder {
  id: string
  name: string
  startDate: string
  endDate?: string
  timeFrame?: number
  activities: Activity[]
}

export type NewReminder = Omit<Reminder, 'id'>

export interface Activity {
  name: string
  day: number
}
