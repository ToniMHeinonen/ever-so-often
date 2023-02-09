import styled, { css } from 'styled-components/native'
import theme from '../../utils/theme'
import Text from '../../styles/Text'
import { pressedContentColor } from '../../styles/fragments'
import { Icon } from '../../styles/Icon'
import constants from '../../utils/constants'

export const PageContainer = styled.View`
  background-color: ${theme.colors.contentBackground};
  // TODO: Add better way later for handling bottom app bar margin
  margin-bottom: ${constants.appBar.height + 'px'};
`

export const ReminderSeparator = styled.View`
  padding: 10px 0px;
`

export const ReminderListContainer = styled.View`
  padding-bottom: 20px;
`

export const ReminderHeader = styled(Text)`
  margin: 15px;
  padding: 5px 10px;
  text-align: center;
  background-color: ${theme.colors.appBarBackground};
  border-radius: ${theme.borders.radiusDefault};
  border-width: 1px;
  border-color: ${theme.colors.borderLight};
`

export const ActiveContainer = styled.View`
  background-color: ${theme.colors.appBackground};
  border-color: ${theme.colors.primary};
  border-width: 1px;
  border-radius: ${theme.borders.radiusDefault};
  margin: 0px 15px;

  ${pressedContentColor}
`

export const InactiveContainer = styled.View`
  background-color: ${theme.colors.appBackground};
  border-color: ${theme.colors.accent};
  border-width: 1px;
  border-radius: ${theme.borders.radiusDefault};
  margin: 0px 15px;

  ${pressedContentColor}
`

export const ReminderIcon = styled(Icon)`
  margin: 10px;
`

export const ActiveTextContainer = styled.View`
  flex-direction: column;
  margin: 10px;
`

export const ActiveTitle = styled(Text)``

export const InactiveTitle = styled(Text)`
  text-align: center;
  margin: 15px;
`

export const ActiveActivity = styled(Text)`
  margin-top: 10px;
`

export const debugButtonStyle = css`
  border-color: ${theme.colors.borderLight};
  padding: 5px;
`
