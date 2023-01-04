import { gettingStartedText } from '../../../data/tutorialTexts'
import { setAlert, useStateValue } from '../../state'
import TextButton from '../TextButton'
import { gettingStartedButton, gettingStartedButtonText } from './style'

const GettingStarted = () => {
  const [, dispatch] = useStateValue()

  const showGettingStartedAlert = () => {
    const alert = {
      title: 'Getting Started',
      message: gettingStartedText,
      buttons: [
        {
          text: 'Awesome, thanks!',
          style: 'ok',
        },
      ],
    }

    dispatch(setAlert(alert))
  }

  return (
    <TextButton
      buttonStyle={gettingStartedButton}
      textStyle={gettingStartedButtonText}
      onPress={showGettingStartedAlert}
    >
      Getting Started
    </TextButton>
  )
}

export default GettingStarted
