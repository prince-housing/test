import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const App: () => Node = () => {
  React.useEffect(() => {
    console.log('here comes in debug mode.');
    console.log(DeviceInfo.isCameraPresentSync());
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>This is test app</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
