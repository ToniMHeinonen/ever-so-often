import IconButton from '../IconButton'
import TextButton from '../TextButton'
import {
  dateHeaderClearText,
  DateHeaderClearButton,
  DateHeaderContainer,
  DateHeaderSeparator,
  DateHeaderCloseButton,
} from './style'

interface Props {
  setVisible: (value: boolean) => void
  setDate: (value: string) => void
}

const DateHeader = ({ setVisible, setDate }: Props): JSX.Element => {
  const clearDate = (): void => {
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
        onPress={(): void => setVisible(false)}
      />
    </DateHeaderContainer>
  )
}

export default DateHeader
