import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import images from '../../../../assets';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import CoinStatusInfo from './coinStatusInfo';
import { CoinStatus } from './constants';
import styles from './styles';

export default function AnimatedCoin(props) {
  const {
    releasePosition,
    onCoinRelease,
    delay,
    animationDuration,
    onCoinMove,
  } = props;
  const [status, setStatus] = useState(CoinStatus.Pull);
  const coinStatusPanY = useSharedValue(300);
  const panY = useSharedValue(300);

  useEffect(() => {
    panY.value = withDelay(
      delay,
      withTiming(0, {
        duration: animationDuration,
      }),
    );
    coinStatusPanY.value = withDelay(
      delay,
      withTiming(0, {
        duration: animationDuration,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const coinAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: panY.value }],
  }));

  const handleGestureEventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startY = panY.value;
      runOnJS(setStatus)(CoinStatus.Move);
    },
    onActive: (event, ctx) => {
      const dy = ctx.startY + event.translationY;
      let tempStatus = CoinStatus.Move;
      let yValue = dy;
      if (dy > releasePosition) {
        tempStatus = CoinStatus.Release;
        yValue = releasePosition;
      } else if (dy < 0) {
        yValue = 0;
      }
      panY.value = yValue;
      runOnJS(setStatus)(tempStatus);
      if (onCoinMove) {
        runOnJS(onCoinMove)(yValue);
      }
    },
    onEnd: (event, ctx) => {
      const dy = ctx.startY + event.translationY;
      if (dy >= releasePosition) {
        setStatus(CoinStatus.Move);
        runOnJS(onCoinRelease)();
      } else if (dy < 0 || dy < releasePosition) {
        runOnJS(setStatus)(CoinStatus.Pull);
        panY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: coinStatusPanY.value }],
  }));

  return (
    <>
      <Animated.View
        key="1"
        style={[styles.coinStatusContainer, animatedStyle]}>
        <CoinStatusInfo status={status} />
      </Animated.View>
      <PanGestureHandler key="2" onGestureEvent={handleGestureEventHandler}>
        <Animated.View style={[styles.giftCardCoinWrapper, coinAnimatedStyles]}>
          <Image source={images.giftCardCoin} style={styles.giftCardCoin} />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
}

AnimatedCoin.defaultProps = {
  onCoinRelease: () => {},
  onCoinMove: () => {},
  animationDuration: 500,
  delay: 500,
};

AnimatedCoin.propTypes = {
  animationDuration: PropTypes.number,
  delay: PropTypes.number,
  onCoinRelease: PropTypes.func,
  onCoinMove: PropTypes.func,
  releasePosition: PropTypes.number.isRequired,
};
