import React, { useState } from 'react'
import { View } from 'react-native'
import Modal, { ModalContent, SlideAnimation } from 'react-native-modals'
import TextButton from '../TextButton'
import theme from '../theme'
import DateSelector from './DateSelector'
import { dateButtonStyle, DateButtonTextStyle } from './style'

const DateInput = ({ date, setDate, placeholder }) => {
  const [visible, setVisible] = useState(false)

  const showPlaceholder = date === ''

  return (
    <View>
      <TextButton
        buttonStyle={dateButtonStyle}
        textStyleComponent={DateButtonTextStyle}
        textProps={{ placeholder: showPlaceholder }}
        onPress={() => setVisible(true)}
      >
        {showPlaceholder ? placeholder : date}
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
