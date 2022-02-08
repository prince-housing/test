import * as React from 'react';
import { Text, View } from 'react-native';

import DeviceInfo from 'react-native-device-info';

import styles from './styles';

const DeviceInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Device Info screen.</Text>
      <Text>{`DeviceInfo.getUniqueId: ${DeviceInfo.getUniqueId()}`}</Text>
      <Text>{`DeviceInfo.getVersion: ${DeviceInfo.getVersion()}`}</Text>
    </View>
  );
};

export default DeviceInfoScreen;
