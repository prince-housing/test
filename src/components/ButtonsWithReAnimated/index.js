import React from 'react';
import { View, Text } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import styles, { Constants } from './styles';

const LayoutWidth = Constants.CTA_SIZE.width * 2.5;

const ButtonsWithAnimated = props => {
  const buttonWidth = useSharedValue(LayoutWidth);
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      width: buttonWidth.value,
    };
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      buttonWidth.value = withTiming(
        Constants.CTA_SIZE.width,
        {
          duration: 1000,
        },
        () => {
          buttonWidth.value = withTiming(LayoutWidth, {
            duration: 1000,
          });
        },
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [buttonWidth]);

  return (
    <>
      <Text style={styles.heading}>Buttons with ReAnimated API</Text>
      <View style={styles.container}>
        <View style={styles.phoneCta}>
          <Text>View Phone</Text>
        </View>
        <Animated.View style={[styles.contactCta, animatedButtonStyle]}>
          <Text>Contact</Text>
        </Animated.View>
      </View>
    </>
  );
};

export default ButtonsWithAnimated;
