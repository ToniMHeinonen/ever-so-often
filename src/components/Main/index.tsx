import { StatusBar } from 'expo-status-bar'
import { Container, StatusBarStyle } from './style'
import theme from '../theme'
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

const navigationTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.appBackground,
  },
}

export type RootStackParamList = {
  Home: undefined
  Reminder: { id: undefined }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Main = (): JSX.Element => {
  const [state, setState] = useState()

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
              // @ts-expect-error Unable to find solution to this error
              setState(e.data?.state)
            },
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen
            name="Reminder"
            component={ReminderPage}
            initialParams={{ id: undefined }}
          />
        </Stack.Navigator>
        <AlertDialog />
        <BottomAppBar state={state} />
      </NavigationContainer>
    </Container>
  )
}

export default Main
