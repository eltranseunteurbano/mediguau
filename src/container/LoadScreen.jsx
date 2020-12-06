import React, { useEffect } from 'react'

import { useMain } from '../hooks'

const LoadScreen = ({ children }) => {

  const { isLoading } = useMain();

  return isLoading ? (
    <p>Cargando...</p>
  ) : (
    <>{children}</>
  )
}

export default LoadScreen
