import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#e8e8e8',
    textSecondary: '#c5c7c7',
    primary: '#f08411',
    appBarBackground: '#323536',
    appBackground: '#1e1e1f',
  },
  fontSizes: {
    body: 14,
    heading1: 20,
    appBarTab: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
}

export default theme
