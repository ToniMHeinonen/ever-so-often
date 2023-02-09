import styled from 'styled-components/native'
import theme from '../utils/theme'
import { formFieldBaseStyles } from './fragments'
import Text from './Text'

const TitleTop = styled(Text)`
  ${formFieldBaseStyles}
  text-align: center;
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 2px;
  border-bottom-width: ${theme.borders.shadowWidth};
  border-bottom-color: ${theme.colors.appBackground};
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${theme.colors.appBarBackground};
  color: ${theme.colors.textSecondary};
`

export const TitleTopCenter = styled(TitleTop)`
  margin-left: auto;
  margin-right: auto;
`

export const TitleTopLeft = styled(TitleTop)`
  margin-left: 15px;
  margin-right: auto;
`

export const TitleLeft = styled(Text)`
  ${formFieldBaseStyles}
  margin-right: 0px;
  border-right-width: ${theme.borders.shadowWidth};
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${theme.colors.appBarBackground};
  padding: 10px;
  align-self: center;
  border-right-color: ${theme.colors.appBackground};
`
