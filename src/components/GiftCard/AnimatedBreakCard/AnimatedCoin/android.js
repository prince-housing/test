import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Animated, PanResponder } from 'react-native';

import images from '../../../../assets';

import styles from './styles';
import CoinStatusInfo from './coinStatusInfo';
import { CoinStatus } from './constants';

export default function AnimatedCoin(props) {
  const {
    releasePosition,
    onCoinRelease,
    delay,
    animationDuration,
    onCoinMove,
  } = props;
  const [status, setStatus] = useState(CoinStatus.Pull);
  const coinStatusPanY = useRef(new Animated.Value(300)).current;
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 300 })).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(coinStatusPanY, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: false,
        }),
        Animated.timing(pan, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePanResponderMove = useCallback(
    (e, gesture) => {
      const { dy } = gesture;
      let yValue = dy;
      let tempStatus = CoinStatus.Move;
      if (dy > releasePosition) {
        tempStatus = CoinStatus.Release;
        yValue = releasePosition;
      } else if (dy < 0) {
        yValue = 0;
      }
      setStatus(tempStatus);
      if (onCoinMove) {
        onCoinMove(yValue);
      }
      return Animated.event([null, { dy: pan.y, dx: pan.x }], {
        useNativeDriver: false,
      })(e, { ...gesture, dy: yValue });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onCoinMove],
  );

  const handleCoinRelease = useCallback(
    (_, gestureState) => {
      const { dy } = gestureState;
      if (dy >= releasePosition) {
        setStatus(CoinStatus.Move);
        onCoinRelease();
      } else if (dy < 0 || dy < releasePosition) {
        setStatus(CoinStatus.Pull);
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onCoinRelease],
  );

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => false,
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          y: pan.y._value,
        });
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handleCoinRelease,
      onPanResponderTerminate: (...args) => {
        handleCoinRelease(...args);
      },
    }),
  ).current;

  return (
    <>
      <Animated.View
        key="1"
        style={[
          styles.coinStatusContainer,
          {
            transform: [{ translateY: coinStatusPanY }],
          },
        ]}>
        <CoinStatusInfo status={status} />
      </Animated.View>
      <Animated.View
        key="2"
        style={[
          styles.giftCardCoinWrapper,
          {
            transform: [{ translateY: pan.y }],
          },
        ]}
        {...panResponder.panHandlers}>
        <Image source={images.giftCardCoin} style={styles.giftCardCoin} />
      </Animated.View>
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
