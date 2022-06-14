import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';

export default function CoinStatusInfo(props) {
  const { status } = props;
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.Text style={[styles.coinStatus, animatedStyle]}>
      {status}
    </Animated.Text>
  );
}

CoinStatusInfo.defaultProps = {};

CoinStatusInfo.propTypes = {
  status: PropTypes.string.isRequired,
};
