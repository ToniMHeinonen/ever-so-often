import { useContext } from 'react'
import LocalStorageContext from '../contexts/LocalStorageContext'

const useLocalStorage = () => {
  return useContext(LocalStorageContext)
}

export default useLocalStorage
