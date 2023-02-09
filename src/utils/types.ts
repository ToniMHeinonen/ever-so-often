import { NavigationProp } from '@react-navigation/native'

/*--- Reminder ---*/

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

/*--- Navigation ---*/

export type RootStackParamList = {
  Home: undefined
  Reminder: { id: string | undefined }
}

export type StackNavigation = NavigationProp<RootStackParamList>

export interface NavState {
  state: NavRoutes
}

export interface NavRoutes {
  routes: [{ name: string }]
}

export enum Route {
  Home = 'Home',
  Reminder = 'Reminder',
}
