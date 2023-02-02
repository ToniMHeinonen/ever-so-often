import { Alert } from '../components/AlertDialog'
import { State } from './state'

export type Action = {
  type: 'SET_ALERT'
  payload: Alert
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        alert: action.payload,
      }
    default:
      return state
  }
}
