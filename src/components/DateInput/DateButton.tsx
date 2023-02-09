import TextButton from '../TextButton'
import { dateButtonStyle, DateButtonTextStyle } from './style'

interface Props {
  date: string | undefined
  placeholder: string
  setVisible: (value: boolean) => void
}

const DateButton = ({ date, placeholder, setVisible }: Props): JSX.Element => {
  const showPlaceholder = !date || date === ''

  return (
    <TextButton
      buttonStyle={dateButtonStyle}
      textStyleComponent={DateButtonTextStyle}
      textProps={{ placeholder: showPlaceholder }}
      onPress={(): void => setVisible(true)}
    >
      {showPlaceholder ? placeholder : date}
    </TextButton>
  )
}

export default DateButton
