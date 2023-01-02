import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  alert: null,
}

export const StateContext = createContext([initialState, () => initialState])

export const StateProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateValue = () => useContext(StateContext)

export const setAlert = (alert) => {
  return {
    type: 'SET_ALERT',
    payload: {
      ...alert,
      visible: alert.visible !== undefined ? alert.visible : true,
    },
  }
}
