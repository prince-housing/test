import * as React from 'react';
import { Text, View, Button } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import styles from './styles';

function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  const handleButtonPress = () => {
    offset.value = withSpring(Math.random());
  };

  return (
    <View style={styles.animatedBox}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={handleButtonPress} title="Move" />
    </View>
  );
}

const Home = props => {
  const { handleTextPress } = props;
  return (
    <View style={styles.container}>
      <Text>This is home screen</Text>
      <Text onPress={handleTextPress}>Navigate to Device-info</Text>
      <Box />
    </View>
  );
};

export default Home;
