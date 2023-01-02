import styled, { css } from 'styled-components/native'
import { pressedContentColor } from '../../styles/fragments'
import IconButton from '../IconButton'
import TextButton from '../TextButton'
import theme from '../theme'

export const Container = styled.View`
  background-color: ${theme.colors.contentBackground};
  padding: 15px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const UpdateButtonsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const removeButtonStyle = css`
  border-width: ${theme.borders.widthDefault};
  border-color: ${theme.colors.remove};
  border-radius: ${theme.borders.radiusDefault};
  background-color: ${theme.colors.appBackground};
  padding: 3px;

  ${pressedContentColor};
`

export const RemoveActivityView = styled.View`
  ${removeButtonStyle}
  margin-top: 5px;
`

export const SaveButton = styled(TextButton)`
  flex: 1;
`

export const saveButtonStyle = css`
  margin-right: 0px;
`

export const DeleteButton = styled(IconButton)`
  margin-right: 10px;
`

export const RemoveReminderView = styled.View`
  ${removeButtonStyle}
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left-width: 0px;
  margin-left: 0px;
`
