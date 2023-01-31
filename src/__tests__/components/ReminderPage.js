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

      describe('modify reminder', () => {
        const reminder = {
          ...initialValues,
          name: 'Reminder',
          activities: [
            {
              name: 'Activity',
              day: 1,
            },
          ],
        }

        it('throws error if end date is before start date', async () => {
          const onSubmit = jest.fn()
          const { queryByText } = render(
            <ReminderFormContainer
              onSubmit={onSubmit}
              values={{
                ...reminder,
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

        it('throws error if time frame is lower than highest day', async () => {
          const onSubmit = jest.fn()
          const { queryByText } = render(
            <ReminderFormContainer
              onSubmit={onSubmit}
              values={{
                ...reminder,
                timeFrame: 1,
                activities: [
                  {
                    ...initialActivity,
                    name: 'Activity',
                    day: 2,
                  },
                ],
              }}
            />
          )

          fireEvent.press(queryByText('Save'))

          await waitFor(() => {
            expect(queryByText(constants.validation.timeFrame)).toBeVisible()
          })
        })

        it('throws error if two target days have identical number', async () => {
          const onSubmit = jest.fn()
          const { queryByText, queryAllByText } = render(
            <ReminderFormContainer
              onSubmit={onSubmit}
              values={{
                ...reminder,
                activities: [
                  {
                    ...initialActivity,
                    name: 'Activity 1',
                    day: 1,
                  },
                  {
                    ...initialActivity,
                    name: 'Activity 2',
                    day: 1,
                  },
                ],
              }}
            />
          )

          fireEvent.press(queryByText('Save'))

          await waitFor(() => {
            expect(queryAllByText(constants.validation.dayUnique).length).toBe(
              2
            )
          })
        })

        it('throws error if there are no activities', async () => {
          const onSubmit = jest.fn()
          const { queryByText } = render(
            <ReminderFormContainer
              onSubmit={onSubmit}
              values={{
                ...reminder,
                activities: [],
              }}
            />
          )

          fireEvent.press(queryByText('Save'))

          await waitFor(() => {
            expect(
              queryByText(constants.validation.activityCount)
            ).toBeVisible()
          })
        })

        it('throws error if start date is not defined', async () => {
          const onSubmit = jest.fn()
          const { queryByText } = render(
            <ReminderFormContainer
              onSubmit={onSubmit}
              values={{
                ...reminder,
                startDate: '',
              }}
            />
          )

          fireEvent.press(queryByText('Save'))

          await waitFor(() => {
            expect(queryByText(constants.validation.startDate)).toBeVisible()
          })
        })

        it('throws error if target day is not defined', async () => {
          const onSubmit = jest.fn()
          const { queryByText } = render(
            <ReminderFormContainer
              onSubmit={onSubmit}
              values={{
                ...reminder,
                activities: [
                  {
                    ...initialActivity,
                    day: '',
                  },
                ],
              }}
            />
          )

          fireEvent.press(queryByText('Save'))

          await waitFor(() => {
            expect(queryByText(constants.validation.targetDay)).toBeVisible()
          })
        })

        it('throws error if target day is not a number', async () => {
          const onSubmit = jest.fn()
          const { queryByText } = render(
            <ReminderFormContainer
              onSubmit={onSubmit}
              values={{
                ...reminder,
                activities: [
                  {
                    ...initialActivity,
                    day: 'Text',
                  },
                ],
              }}
            />
          )

          fireEvent.press(queryByText('Save'))

          await waitFor(() => {
            expect(queryByText(constants.validation.dayNumber)).toBeVisible()
          })
        })
      })
    })
  })
})
