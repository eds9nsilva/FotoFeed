import React from 'react';
import ApplicationNavigator from './Navigator/Application';
import Toast from 'react-native-toast-notifications';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <ApplicationNavigator />
      <Toast
        ref={ref => ((global as any)['toast'] = ref)}
        placement="top"
        textStyle={{fontSize: 16}}
        successColor="#28a745"
        dangerColor="#d0383e"
        warningColor="#ffc107"
      />
    </>
  );
};

export default App;
