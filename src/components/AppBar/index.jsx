import { ScrollView } from 'react-native'
import AppBarTab from './AppBarTab'
import { Container } from './style'

const AppBar = () => {
  return (
    <Container>
      <ScrollView horizontal>
        <AppBarTab text="This Day" route="/" />
        <AppBarTab text="New Reminder" route="/new-reminder" />
      </ScrollView>
    </Container>
  )
}

export default AppBar
