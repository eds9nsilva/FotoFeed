import React from 'react'
import ApplicationNavigator from './Navigator/Application'
import Toast from 'react-native-toast-notifications'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './Store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
          <Toast
            ref={ref => ((global as any)['toast'] = ref)}
            placement="bottom"
            textStyle={{ fontSize: 16 }}
            successColor="#28a745"
            dangerColor="#d0383e"
            warningColor="#ffc107"
          />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
