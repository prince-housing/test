import * as React from 'react';
import { Text, View, Button } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  withSequence,
} from 'react-native-reanimated';

import GiftCard from '../../components/GiftCard';

import styles from './styles';

function Box() {
  const offset = useSharedValue(0.1);
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value * 255 },
        { scale: offset.value * 1 },
        { rotateZ: `${rotation.value}deg` },
      ],
    };
  });

  const handleButtonPress = () => {
    // offset.value = withSpring(
    //   Math.random(),
    //   {
    //     damping: 20,
    //     stiffness: 90,
    //   },
    // );
    offset.value = withTiming(Math.random(), {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
    rotation.value = withSequence(
      withTiming(-10, { duration: 50 }),
      withRepeat(withTiming(10, { duration: 100 }), 6, true),
      withTiming(0, { duration: 50 }),
    );
  };

  return (
    <View style={styles.animatedBox}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={handleButtonPress} title="Move" />
    </View>
  );
}

const Home = props => {
  const { handleDeviceInfoNavigate, handleSliderExampleNavigate } = props;
  return (
    <View style={styles.container}>
      <Box />
      <Text>This is home screen</Text>
      <Text onPress={handleDeviceInfoNavigate}>Navigate to Device-info</Text>
      <Text onPress={handleSliderExampleNavigate}>
        Navigate to Slider-example
      </Text>
      <GiftCard delay={300} containerStyle={styles.giftCardContainer} />
    </View>
  );
};

export default Home;
