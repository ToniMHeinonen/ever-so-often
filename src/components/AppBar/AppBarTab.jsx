import { Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import Text from '../../styles/Text'
import { Tab } from './style'

const AppBarTab = ({ text, route, onPress }) => {
  const navigate = useNavigate()

  const handlePress = () => {
    if (onPress) onPress()
    if (route) navigate(route)
  }

  return (
    <Pressable onPress={handlePress}>
      {({ pressed }) => (
        <Tab pressed={pressed}>
          <Text tab>{text}</Text>
        </Tab>
      )}
    </Pressable>
  )
}

export default AppBarTab
