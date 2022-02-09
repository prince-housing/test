import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routesNames from '../../routes';

import HomeScreen from '../../routes/Home';
import DeviceInfoScreen from '../../routes/DeviceInfo';
import SliderExample from '../../routes/SliderExample';

const { Navigator, Screen } = createNativeStackNavigator();

function App() {
  return (
    <Navigator initialRouteName={routesNames.Home}>
      <Screen name={routesNames.Home} component={HomeScreen} />
      <Screen name={routesNames.DeviceInfo} component={DeviceInfoScreen} />
      <Screen name={routesNames.SliderExample} component={SliderExample} />
    </Navigator>
  );
}

export default App;
