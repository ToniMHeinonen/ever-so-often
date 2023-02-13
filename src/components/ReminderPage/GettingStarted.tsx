import { gettingStartedText } from '../../../data/tutorialTexts'
import { setAlert, useStateValue } from '../../state'
import IconButton from '../IconButton'
import { gettingStartedButton } from './style'

const GettingStarted = (): JSX.Element => {
  const [, dispatch] = useStateValue()

  const showGettingStartedAlert = (): void => {
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
    <IconButton
      name="help"
      size={24}
      onPress={showGettingStartedAlert}
      style={gettingStartedButton}
    />
  )
}

export default GettingStarted
