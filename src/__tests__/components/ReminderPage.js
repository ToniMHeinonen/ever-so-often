import { fireEvent, render, waitFor } from '@testing-library/react-native'
import {
  ReminderFormContainer,
  initialValues,
  initialActivity,
} from '../../components/ReminderPage/ReminderForm'

describe('ReminderPage', () => {
  describe('ReminderForm', () => {
    describe('ReminderFormContainer', () => {
      describe('new reminder', () => {
        it('calls on submit with defined names and initial values', async () => {
          const onSubmit = jest.fn()
          const { getByPlaceholderText, getByText } = render(
            <ReminderFormContainer onSubmit={onSubmit} />
          )

          await waitFor(() => {
            fireEvent.changeText(
              getByPlaceholderText('Reminder name...'),
              'Reminder'
            )
            fireEvent.changeText(
              getByPlaceholderText('Activity for the day...'),
              'Activity'
            )

            fireEvent.press(getByText('Submit'))
          })

          expect(onSubmit).toHaveBeenCalledTimes(1)

          // onSubmit.mock.calls[0][0] contains the first argument of the first call
          expect(onSubmit.mock.calls[0][0]).toEqual({
            ...initialValues,
            name: 'Reminder',
            activities: [
              {
                ...initialActivity,
                name: 'Activity',
              },
            ],
          })
        })
      })

      it('throws error if names are not defined', async () => {
        const onSubmit = jest.fn()
        const { getByText, getAllByText } = render(
          <ReminderFormContainer onSubmit={onSubmit} />
        )

        await waitFor(() => {
          fireEvent.press(getByText('Submit'))
        })

        expect(getAllByText('Name is required').length).toBe(2)
      })
    })
  })
})
