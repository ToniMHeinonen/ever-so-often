import { StatusBar } from 'expo-status-bar'
import { Container, StatusBarStyle } from './style'
import theme from '../../utils/theme'
import HomePage from '../HomePage'
import ReminderPage from '../ReminderPage'
import AlertDialog from '../AlertDialog'
import BottomAppBar from '../BottomAppBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native'
import { NavState, RootStackParamList } from '../../utils/types'

const navigationTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.appBackground,
  },
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Main = (): JSX.Element => {
  const [navState, setNavState] = useState<NavState>({
    state: {
      routes: [{ name: 'Home' }],
    },
  })

  return (
    <Container>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar
          backgroundColor={theme.colors.appBarBackground}
          style="light"
        />
        <StatusBarStyle />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
          screenListeners={{
            state: (e): void => {
              const data = e.data as NavState
              setNavState(data)
            },
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Reminder" component={ReminderPage} />
        </Stack.Navigator>
        <AlertDialog />
        <BottomAppBar routes={navState.state.routes} />
      </NavigationContainer>
    </Container>
  )
}

export default Main
