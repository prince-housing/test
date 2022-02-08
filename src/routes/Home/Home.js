import * as React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Home = props => {
  const { handleTextPress } = props;
  return (
    <View style={styles.container}>
      <Text>This is home screen</Text>
      <Text onPress={handleTextPress}>Navigate to Device-info</Text>
    </View>
  );
};

export default Home;
