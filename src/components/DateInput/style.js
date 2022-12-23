import styled, { css } from 'styled-components/native'
import Text from '../../styles/Text'
import theme from '../theme'

export const dateButtonStyle = css`
  margin-top: 0px;
  border-color: ${theme.colors.borderLight};
`

export const DateButtonTextStyle = styled(Text)`
  font-size: ${theme.fontSizes.body};
  padding: 4px 0;
  text-align: center;

  ${({ placeholder }) =>
    placeholder &&
    css`
      color: ${theme.colors.textSecondary};
    `}
`
