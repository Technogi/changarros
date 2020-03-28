import React from 'react'
import Amplify from 'aws-amplify'
import { ThemeProvider } from '@material-ui/core'
import MainRoutes from './config/MainRoutes'
import NavigationBar from './layout/NavigationBar'
import theme from './config/theme'
import awsConfig from './aws-exports'

Amplify.configure(awsConfig)

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <NavigationBar />
          <main>
            <MainRoutes />
          </main>
        </>
      </ThemeProvider>
    </div>
  )
}

export default App
