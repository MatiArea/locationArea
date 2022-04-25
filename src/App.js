import AppNavigation from './navigation'
import { Provider } from 'react-redux'
import React from 'react'
import {init} from './database';
import store from './store'

init()
  .then(() => {
    console.log('DB initialized')
  })
  .catch((err) => {
    console.log('DB initialization failed', err)
  })

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App
