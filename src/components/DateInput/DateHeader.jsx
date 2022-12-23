import IconButton from '../IconButton'
import TextButton from '../TextButton'
import {
  dateHeaderClearText,
  DateHeaderClearButton,
  DateHeaderContainer,
  DateHeaderSeparator,
  DateHeaderCloseButton,
} from './style'

const DateHeader = ({ setVisible, setDate }) => {
  const clearDate = () => {
    setDate('')
    setVisible(false)
  }

  return (
    <DateHeaderContainer>
      <TextButton
        buttonStyleComponent={DateHeaderClearButton}
        textStyle={dateHeaderClearText}
        onPress={clearDate}
      >
        Clear
      </TextButton>
      <DateHeaderSeparator>|</DateHeaderSeparator>
      <IconButton
        name="close-circle"
        size={22}
        styleComponent={DateHeaderCloseButton}
        onPress={() => setVisible(false)}
      />
    </DateHeaderContainer>
  )
}

export default DateHeader
