import { useNavigate } from 'react-router-native'
import IconButton from '../IconButton'
import { addButtonStyle } from './style'

const CenterButton = ({ pathname }) => {
  const navigate = useNavigate()

  const getProps = () => {
    switch (pathname) {
      case '/':
        return { name: 'add', onPress: () => navigate('/new-reminder') }
      default:
        return { name: 'arrow-back', onPress: () => navigate('/') }
    }
  }

  return <IconButton style={addButtonStyle} size={24} {...getProps()} />
}

export default CenterButton
