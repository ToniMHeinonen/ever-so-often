import styled, { css } from 'styled-components/native'
import { TitleTopCenter } from '../../styles/FormFieldTitle'
import Text from '../../styles/Text'
import TextButton from '../TextButton'
import theme from '../../utils/theme'
import { Dimensions } from 'react-native'

const maxScreenHeight = Dimensions.get('window').height - 100

export const Container = styled.View`
  background-color: ${theme.colors.contentBackground};
  border-radius: ${theme.borders.radiusDefault};
  border-color: ${theme.colors.borderLight};
  border-width: ${theme.borders.widthDefault};
  max-height: ${maxScreenHeight + 'px'};
  margin-top: 0px;
`

export const Title = styled(TitleTopCenter)`
  margin-bottom: -1px;
  margin-left: 5px;
  margin-right: 5px;
`

export const Message = styled(Text).attrs({
  // Without this the scroll does not activate every time
  onStartShouldSetResponder: (): boolean => true,
})`
  margin: 15px 20px 0px 20px;
`

export const ButtonRow = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
`

export const DialogButton = styled(TextButton)`
  flex: 1;
  margin: 5px;
`

export const okStyle = css`
  border-color: ${theme.colors.primary};
`

export const removeStyle = css`
  border-color: ${theme.colors.remove};
`

export const neutralStyle = css`
  border-color: ${theme.colors.borderLight};
`
