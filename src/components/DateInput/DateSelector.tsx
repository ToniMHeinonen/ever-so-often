import React from 'react'
import { StyleSheet } from 'react-native'
import DatePicker from 'react-native-modern-datepicker'
import theme from '../../utils/theme'

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
  },
})

interface Props {
  date: string
  setDate: (value: string) => void
}

const DateSelector = ({ date, setDate }: Props): JSX.Element => {
  return (
    <DatePicker
      options={{
        backgroundColor: theme.colors.contentBackground,
        textHeaderColor: theme.colors.primary,
        textDefaultColor: theme.colors.textPrimary,
        selectedTextColor: theme.colors.textPrimary,
        mainColor: theme.colors.primary,
        textSecondaryColor: theme.colors.textSecondary,
        borderColor: theme.colors.border,
      }}
      mode="calendar"
      current={date}
      selected={date}
      style={styles.container}
      onSelectedChange={(d): void => {
        if (date === d) return
        setDate(d)
      }}
    />
  )
}

export default DateSelector
