import React, { useState } from 'react'
import { View } from 'react-native'
import Modal, { ModalContent, SlideAnimation } from 'react-native-modals'
import TextButton from '../TextButton'
import theme from '../theme'
import DateSelector from './DateSelector'
import { DateButtonStyle, DateButtonTextStyle } from './style'

const DateInput = ({ date, setDate }) => {
  const [visible, setVisible] = useState(false)

  return (
    <View>
      <TextButton
        buttonStyle={DateButtonStyle}
        textStyle={DateButtonTextStyle}
        onPress={() => setVisible(true)}
      >
        {date}
      </TextButton>
      <Modal
        width={0.9}
        visible={visible}
        onTouchOutside={() => setVisible(false)}
        modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        overlayBackgroundColor={theme.colors.appBackground}
        modalStyle={{
          backgroundColor: 'rgba(0,0,0,0)',
        }}
      >
        <ModalContent>
          <DateSelector date={date} setDate={setDate} />
        </ModalContent>
      </Modal>
    </View>
  )
}

export default DateInput
