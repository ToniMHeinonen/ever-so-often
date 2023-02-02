import React, { createContext, useContext, useReducer } from 'react'
import { Alert } from '../components/AlertDialog'
import { Action } from './reducer'

export type State = {
  alert: Alert
}

const initialState: State = {
  alert: { title: '', message: '', buttons: [], visible: false },
}

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  (): State => initialState,
])

type StateProviderProps = {
  reducer: React.Reducer<State, Action>
  children: React.ReactElement
}

export const StateProvider = ({
  reducer,
  children,
}: StateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = (): [State, React.Dispatch<Action>] =>
  useContext(StateContext)

export const setAlert = (alert: Alert): Action => {
  return {
    type: 'SET_ALERT',
    payload: {
      ...alert,
      visible: alert.visible !== undefined ? alert.visible : true,
    },
  }
}
