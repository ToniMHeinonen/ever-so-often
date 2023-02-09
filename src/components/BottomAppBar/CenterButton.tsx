import { useNavigation } from '@react-navigation/native'
import { Route, StackNavigation } from '../../utils/types'
import IconButton from '../IconButton'
import { addButtonStyle } from './style'

interface Props {
  pathname: string
}

const CenterButton = ({ pathname }: Props): JSX.Element => {
  const navigation = useNavigation<StackNavigation>()

  const getProps = (): { name: string; onPress: () => void } => {
    switch (pathname) {
      case Route.Home:
        return {
          name: 'add',
          onPress: () => navigation.navigate(Route.Reminder, { id: undefined }),
        }
      default:
        return {
          name: 'arrow-back',
          onPress: () => navigation.goBack(),
        }
    }
  }

  return <IconButton style={addButtonStyle} size={24} {...getProps()} />
}

export default CenterButton
