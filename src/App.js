import React from 'react'
import AppRouter from './Router/AppRouter'
import { GlobalProvider } from './Context/GlobalContext'

const App = () => {
  return (
    <>
    <GlobalProvider>

      <AppRouter/>
    </GlobalProvider>
    </>
  )
}

export default App