import { StatusBar } from 'expo-status-bar'
import { Container, StatusBarStyle } from './style'
import theme from '../theme'
import HomePage from '../HomePage'
import ReminderPage from '../ReminderPage'
import AlertDialog from '../AlertDialog'
import BottomAppBar from '../BottomAppBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const navigationTheme = {
  dark: true,
  colors: {
    primary: theme.colors.primary,
    background: theme.colors.appBackground,
  },
}

const Main = () => {
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
            state: (e) => {
              setState(e.data.state)
            },
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen
            name="Reminder"
            component={ReminderPage}
            initialParams={{}}
          />
        </Stack.Navigator>
        <AlertDialog />
        <BottomAppBar state={state} />
      </NavigationContainer>
    </Container>
  )
}

export default Main
