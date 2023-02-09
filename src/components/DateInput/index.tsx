import React, { useState } from 'react'
import { View } from 'react-native'
import Modal, { ModalContent, SlideAnimation } from 'react-native-modals'
import theme from '../../utils/theme'
import DateButton from './DateButton'
import DateHeader from './DateHeader'
import DateSelector from './DateSelector'

export interface DateInputProps {
  date: string
  setDate: (value: string) => void
  placeholder?: string
}

const DateInput = ({
  date,
  setDate,
  placeholder = '',
}: DateInputProps): JSX.Element => {
  const [visible, setVisible] = useState(false)

  return (
    <View>
      <DateButton
        date={date}
        placeholder={placeholder}
        setVisible={setVisible}
      />
      <Modal
        width={0.9}
        visible={visible}
        onTouchOutside={(): void => setVisible(false)}
        modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        overlayBackgroundColor={theme.colors.appBackground}
        modalStyle={{
          backgroundColor: 'rgba(0,0,0,0)',
        }}
        modalTitle={<DateHeader setVisible={setVisible} setDate={setDate} />}
      >
        <ModalContent>
          <DateSelector date={date} setDate={setDate} />
        </ModalContent>
      </Modal>
    </View>
  )
}

export default DateInput
