import { useNavigation } from '@react-navigation/native'
import constants from '../../utils/constants'
import IconButton from '../IconButton'
import { addButtonStyle } from './style'

const CenterButton = ({ pathname }) => {
  const navigation = useNavigation()

  const getProps = () => {
    switch (pathname) {
      case constants.route.home:
        return {
          name: 'add',
          onPress: () => navigation.navigate(constants.route.reminder),
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
