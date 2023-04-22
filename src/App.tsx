import React from 'react'
import ApplicationNavigator from './Navigator/Application'
import Toast from 'react-native-toast-notifications'
import 'react-native-gesture-handler'
import { LogBox } from 'react-native'
import { Colors } from './Styles/Colors'
LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications

const App = () => {
  return (
    <>
      <ApplicationNavigator />
      <Toast
        ref={ref => ((global as any)['toast'] = ref)}
        placement="top"
        textStyle={{ fontSize: 16 }}
        successColor={Colors.successColor}
        dangerColor={Colors.dangerColor}
        warningColor={Colors.warningColor}
      />
    </>
  )
}

export default App
