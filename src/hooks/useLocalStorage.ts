import { useContext } from 'react'
import StorageContext, { StorageContextProps } from '../contexts/StorageContext'
import LocalStorage from '../utils/localStorage'

const useLocalStorage = (): LocalStorage => {
  const { local } = useContext<StorageContextProps>(StorageContext)

  if (!local)
    throw Error('Context for LocalStorage was not initialized correctly!')

  return local
}

export default useLocalStorage
