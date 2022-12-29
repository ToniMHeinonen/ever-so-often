import { ScrollView } from 'react-native'
import ReminderList from './ReminderList'
import { PageContainer } from './style'

const HomePage = () => {
  return (
    <ScrollView>
      <PageContainer>
        <ReminderList />
      </PageContainer>
    </ScrollView>
  )
}

export default HomePage
