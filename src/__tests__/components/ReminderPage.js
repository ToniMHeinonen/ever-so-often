import { fireEvent, render, waitFor } from '@testing-library/react-native'
import {
  ReminderFormContainer,
  initialValues,
  initialActivity,
} from '../../components/ReminderPage/ReminderForm'
import constants from '../../utils/constants'

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
              getByPlaceholderText(constants.placeholder.reminderName),
              'Reminder'
            )
            fireEvent.changeText(
              getByPlaceholderText(constants.placeholder.activityName),
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

      describe('modify reminder', () => {
        it('throws error if end date is before start date', async () => {
          const onSubmit = jest.fn()
          const { queryByText } = render(
            <ReminderFormContainer
              onSubmit={onSubmit}
              values={{
                ...initialValues,
                endDate: '2023/01/01',
                startDate: '2023/01/02',
              }}
            />
          )

          fireEvent.press(queryByText('Save'))

          await waitFor(() => {
            expect(queryByText(constants.validation.endDate)).toBeVisible()
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

        expect(getAllByText(constants.validation.name).length).toBe(2)
      })
    })
  })
})
