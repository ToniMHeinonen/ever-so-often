import TextButton from '../TextButton'
import { dateButtonStyle, DateButtonTextStyle } from './style'

const DateButton = ({ date, placeholder, setVisible }) => {
  const showPlaceholder = !date || date === ''

  return (
    <TextButton
      buttonStyle={dateButtonStyle}
      textStyleComponent={DateButtonTextStyle}
      textProps={{ placeholder: showPlaceholder }}
      onPress={() => setVisible(true)}
    >
      {showPlaceholder ? placeholder : date}
    </TextButton>
  )
}

export default DateButton
