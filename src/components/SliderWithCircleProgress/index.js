import * as React from 'react';
import { View } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import CircularProgress from '../common/CircularProgress';

import styles, { HANDLE_WIDTH } from './styles';

const SliderExample = props => {
  const sliderWidth = useSharedValue(0);
  const progress = useSharedValue(0);

  const animatedHandleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: progress.value - HANDLE_WIDTH / 2 }],
    };
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      progress.value = withSpring(Math.random() * sliderWidth.value, {
        damping: 20,
        stiffness: 90,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [progress, sliderWidth.value]);

  const handleSliderLayout = React.useCallback(
    e => {
      sliderWidth.value = e.nativeEvent.layout.width;
    },
    [sliderWidth],
  );

  return (
    <View style={styles.container}>
      <CircularProgress progress={progress} total={sliderWidth} />
      <View style={styles.slider} onLayout={handleSliderLayout}>
        <Animated.View style={[styles.sliderHandle, animatedHandleStyle]} />
      </View>
    </View>
  );
};

export default SliderExample;
