import styled from 'styled-components/native'
import theme from '../utils/theme'
import {
  ImageBackground as NativeImageBackground,
  ImageBackgroundProps,
} from 'react-native'

interface Props {
  source?: string
}

const ImageBackground = styled(NativeImageBackground).attrs(
  ({
    source = require('../images/repeat_bg.png'),
  }: Props & Partial<ImageBackgroundProps>) => ({
    source: source,
    imageStyle: {
      resizeMode: 'repeat',
      borderRadius: theme.borders.radiusDefaultNumber,
      opacity: 0.8,
    },
  })
)`
  border-color: ${theme.colors.border};
  border-width: 2px;
  border-radius: ${theme.borders.radiusDefault};
  border-style: dotted;
  padding: 5px;
`

export default ImageBackground
