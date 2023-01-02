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

const AlertDialog = () => {
  const [{ alert }, dispatch] = useStateValue()

  const buttonPressed = (button) => {
    button.onPress?.()
    closeDialog()
  }

  const closeDialog = () => {
    dispatch(setAlert({ ...alert, visible: false }))
  }

  const getButtonStyle = (style) => {
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
                {alert?.buttons?.map((b) => (
                  <DialogButton
                    key={b.text}
                    onPress={() => buttonPressed(b)}
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
