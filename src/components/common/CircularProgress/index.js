import * as React from 'react';
import { View, TextInput } from 'react-native';
import { Circle, Svg, G } from 'react-native-svg';

import Animated, {
  useAnimatedProps,
  interpolateColor,
  interpolate,
} from 'react-native-reanimated';

import { clamp } from '../../../utils/animations/clamp';

import styles, {
  CIRCLE_RADIUS,
  STROKE_WIDTH,
  CIRCLE_FILL_COLOR,
  CIRCLE_STOCK_COLOR,
  TEXT_ANIMATION_COLOR,
} from './styles';

const AnimatedInput = Animated.createAnimatedComponent(TextInput);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = props => {
  const {
    progress,
    total,
    radius = CIRCLE_RADIUS,
    strokeWidth = STROKE_WIDTH,
    fillColor = CIRCLE_FILL_COLOR,
    strokeColor = CIRCLE_STOCK_COLOR,
  } = props;
  const CIRCUMFERENCE = 2 * Math.PI * radius;
  const HALF_WIDTH = CIRCLE_RADIUS + STROKE_WIDTH;

  const animatedInputProps = useAnimatedProps(() => {
    const clampValue = clamp((progress.value || 0) / (total.value || 0), 0, 1);
    return {
      text: `${Math.round(clampValue * 100)}`,
      color: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        TEXT_ANIMATION_COLOR,
      ),
    };
  });

  const animatedCircleProps = useAnimatedProps(() => {
    const clampValue = clamp((progress.value || 0) / (total.value || 0), 0, 1);
    return {
      strokeDashoffset: (1 - (clampValue || 0)) * CIRCUMFERENCE,
      fillOpacity: interpolate(clampValue || 0, [0, 1], [0.3, 0.8]),
    };
  });

  return (
    <View style={styles.circleContainer}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`${-HALF_WIDTH} ${-HALF_WIDTH} ${2 * HALF_WIDTH} ${
          2 * HALF_WIDTH
        }`}>
        <G rotation="-90">
          <AnimatedCircle
            cx={0}
            cy={0}
            r={radius}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            animatedProps={animatedCircleProps}
            stroke={strokeColor}
            fill={fillColor}
          />
        </G>
      </Svg>
      <View style={styles.textInputWrapper}>
        <AnimatedInput
          editable={false}
          defaultValue="0"
          animatedProps={animatedInputProps}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default CircularProgress;
