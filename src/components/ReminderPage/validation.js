import * as yup from 'yup'
import _ from 'lodash'
import { getReminderMaxDay } from '../../utils/reminderHandler'
import constants from '../../utils/constants'

yup.addMethod(yup.array, 'uniqueProperty', function (propertyPath, message) {
  return this.test('unique', '', function (list) {
    const errors = []

    list.forEach((item, index) => {
      const propertyValue = _.get(item, propertyPath)

      if (
        propertyValue &&
        _.filter(list, [propertyPath, propertyValue]).length > 1
      ) {
        errors.push(
          this.createError({
            path: `${this.path}[${index}].${propertyPath}`,
            message,
          })
        )
      }
    })

    if (!_.isEmpty(errors)) {
      throw new yup.ValidationError(errors)
    }

    return true
  })
})

yup.addMethod(yup.mixed, 'moreThanMaxDay', function () {
  return this.test('moreThanMaxDay', '', function (value) {
    // Check only if value has been provided
    if (!value) return true

    const maxDay = getReminderMaxDay({ activities: this.parent.activities })

    if (value < maxDay) {
      const error = this.createError({
        path: `${this.path}`,
        message: constants.validation.timeFrame,
      })
      throw new yup.ValidationError(error)
    }

    return true
  })
})

export const validationSchema = yup.object().shape({
  name: yup.string().required(constants.validation.name),
  startDate: yup.date().required(constants.validation.startDate),
  endDate: yup.date().min(yup.ref('startDate'), constants.validation.endDate),
  timeFrame: yup.mixed().moreThanMaxDay(),
  activities: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(constants.validation.name),
        day: yup
          .number()
          .typeError(constants.validation.dayNumber)
          .required(constants.validation.targetDay),
      })
    )
    .uniqueProperty('day', constants.validation.dayUnique)
    .required()
    .min(1, constants.validation.activityCount),
})
