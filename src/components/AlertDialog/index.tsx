import { View } from 'react-native'
import Modal, { ModalContent, SlideAnimation } from 'react-native-modals'
import { setAlert, useStateValue } from '../../state'
import theme from '../theme'
import {
  ButtonRow,
  Container,
  DialogButton,
  Message,
  neutralStyle,
  okStyle,
  removeStyle,
  Title,
} from './style'

export interface Alert {
  title: string
  message: string
  buttons: AlertButton[]
  visible?: boolean
}

export interface AlertButton {
  text: string
  style?: string
  onPress?: () => void
}

const AlertDialog = (): JSX.Element => {
  const [{ alert }, dispatch] = useStateValue()

  const buttonPressed = (button: AlertButton): void => {
    button.onPress?.()
    closeDialog()
  }

  const closeDialog = (): void => {
    dispatch(setAlert({ ...alert, visible: false }))
  }

  const getButtonStyle = (style?: string): object => {
    switch (style) {
      case 'ok':
        return okStyle
      case 'remove':
        return removeStyle
      default:
        return neutralStyle
    }
  }

  return (
    <View>
      <Modal
        width={0.9}
        visible={alert?.visible}
        onTouchOutside={closeDialog}
        modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        overlayBackgroundColor={theme.colors.appBackground}
        modalStyle={{
          backgroundColor: 'rgba(0,0,0,0)',
        }}
      >
        <ModalContent>
          <View>
            <Title title center>
              {alert?.title}
            </Title>
            <Container>
              <Message>{alert?.message}</Message>
              <ButtonRow>
                {alert?.buttons?.map((b: AlertButton) => (
                  <DialogButton
                    key={b.text}
                    onPress={(): void => buttonPressed(b)}
                    buttonStyle={getButtonStyle(b.style)}
                  >
                    {b.text}
                  </DialogButton>
                ))}
              </ButtonRow>
            </Container>
          </View>
        </ModalContent>
      </Modal>
    </View>
  )
}

export default AlertDialog
