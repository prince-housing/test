import React, { useCallback, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Vibration } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, {
  Extrapolate,
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated';

import images from '../../../assets';
import GenericText from '../../common/GenericText';

import { giftCardStrings } from '../../../strings/giftCard';
import colors from '../../../styles/colors';
import { SCREEN_HEIGHT } from '../../../utils/deviceDimensions';
import { isIos } from '../../../utils/typeChecker';
import { isValidAmountToClaim } from '../../../utils/scratchGiftCard';

import Info from '../Info';
import AnimatedCoin from './AnimatedCoin/index';
import styles from './styles';
import OpenedGiftCard from '../OpenedGiftCard';

const coinDistFromBtm = 116;
const SlideInUpDuration = 500;
const SlideDownDuration = 400;
const enteringAnimationDelay = 500;
const TOP_VALUE = SCREEN_HEIGHT / 3;

export default function AnimatedBreakCard(props) {
  const { isModalVisible, onFinish, getGiftCardLayout } = props;
  const amount = 10;
  const [initialInfoVisible, setInitialInfo] = useState(true);
  const [isCoinHidden, setCoinHidden] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPrizeState, setShowPrizeState] = useState(false);
  const [bottomSheetAnimation, setBottomSheetAnimation] = useState(true);
  const bottomLottieAnimationStarted = useRef(true);
  const bottomLottieRef = useRef(null);
  const breakCardLottieRef = useRef(null);
  const confettiLottieRef = useRef(null);
  const bottomLottieSharedValue = useSharedValue(300);
  const breakCardLottieScale = useSharedValue(1);
  const openGiftCardScale = useSharedValue(0);
  const openGiftCardTranslateY = useSharedValue(0);
  const openGiftCardOpacity = useSharedValue(1);
  const bgImageOpacity = useSharedValue(1);

  const startInitialAnimation = useCallback(() => {
    bottomLottieSharedValue.value = withDelay(
      enteringAnimationDelay,
      withTiming(0, {
        duration: SlideInUpDuration,
      }),
    );
    bottomLottieRef.current?.play(0, 90);
  }, [bottomLottieSharedValue]);

  useEffect(() => {
    if (isModalVisible) {
      startInitialAnimation();
    }
  }, [isModalVisible, startInitialAnimation]);

  const handleCoinMove = useCallback(
    yValue => {
      if (yValue >= coinDistFromBtm) {
        if (bottomLottieAnimationStarted.current) {
          setBottomSheetAnimation(false);
          bottomLottieAnimationStarted.current = false;
          bottomLottieRef.current?.play(90, 180);
        }
      } else {
        setBottomSheetAnimation(true);
        bottomLottieAnimationStarted.current = true;
        bottomLottieRef.current?.play(0, 115);
      }
    },
    [setBottomSheetAnimation],
  );

  // Start the break card animation, as user release the COIN
  const handleCoinRelease = useCallback(() => {
    setBottomSheetAnimation(true);
    bottomLottieRef.current?.play(0, 115);
    setCoinHidden(true);
    breakCardLottieRef.current?.play();
    setInitialInfo(false);
    setShowPrizeState(true);
    setTimeout(() => {
      if (isIos) {
        Vibration.vibrate([300, 300, 300]);
      } else {
        Vibration.vibrate([400, 300, 400, 300, 400, 300]);
      }
    }, 100);
  }, [
    setShowPrizeState,
    setInitialInfo,
    setCoinHidden,
    setBottomSheetAnimation,
  ]);

  // Perform exit Animations here.
  const handleConfettiFinishAnimation = useCallback(() => {
    getGiftCardLayout().then(({ y }) => {
      bottomLottieSharedValue.value = withTiming(
        300,
        {
          duration: SlideDownDuration,
        },
        () => {
          breakCardLottieScale.value = withTiming(0, {
            duration: SlideDownDuration,
          });
          openGiftCardScale.value = withTiming(
            1,
            { duration: SlideDownDuration },
            () => {
              openGiftCardTranslateY.value = withTiming(
                y - TOP_VALUE,
                { duration: SlideDownDuration },
                () => {
                  openGiftCardOpacity.value = withTiming(0, {
                    duration: SlideDownDuration,
                  });
                  bgImageOpacity.value = withTiming(0, {
                    duration: SlideDownDuration,
                  });
                },
              );
            },
          );
        },
      );
      setTimeout(() => {
        onFinish();
      }, SlideDownDuration + SlideDownDuration + SlideDownDuration);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getGiftCardLayout, onFinish]);

  // Perform Tasks which are need to be done after Break-Card animation
  const handleBreakCardFinishAnimation = useCallback(() => {
    if (amount) {
      setShowConfetti(true);
      setTimeout(() => {
        confettiLottieRef.current?.play();
      }, 10);
    } else {
      handleConfettiFinishAnimation();
    }
  }, [handleConfettiFinishAnimation, setShowConfetti]);

  const bottomLottieContainerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bottomLottieSharedValue.value }],
  }));
  const breakCardLottieContainerStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      breakCardLottieScale.value,
      [1, 0],
      [1, 0],
      Extrapolate.EXTEND,
    ),
    transform: [{ scale: breakCardLottieScale.value }],
  }));
  const openGiftCardStyle = useAnimatedStyle(() => ({
    opacity: openGiftCardOpacity.value,
    top: interpolate(
      openGiftCardScale.value,
      [0, 1],
      [SCREEN_HEIGHT / 3, TOP_VALUE],
      Extrapolate.EXTEND,
    ),
    transform: [
      { scale: openGiftCardScale.value },
      {
        translateY: openGiftCardTranslateY.value,
      },
    ],
  }));
  const bgImageStyle = useAnimatedStyle(() => ({
    opacity: bgImageOpacity.value,
  }));
  const infoPropsSquareCard = {
    line1: isValidAmountToClaim(amount)
      ? giftCardStrings.openedGiftCard.title
      : giftCardStrings.openedGiftCardUnsuccess.title,
    line2: isValidAmountToClaim(amount)
      ? giftCardStrings.openedGiftCard.subTitle
      : giftCardStrings.openedGiftCardUnsuccess.subTitle,
    price: isValidAmountToClaim(amount)
      ? giftCardStrings.getPriceString(amount)
      : null,
  };
  const infoPropsRectangleCard = {
    line1: isValidAmountToClaim(amount)
      ? giftCardStrings.openedGiftCard.subTitle
      : giftCardStrings.openedGiftCardUnsuccess.title,
    line2: isValidAmountToClaim(amount)
      ? null
      : giftCardStrings.openedGiftCardUnsuccess.subTitle,
    price: isValidAmountToClaim(amount)
      ? giftCardStrings.getPriceString(amount)
      : null,
    extraInfo: isValidAmountToClaim(amount)
      ? giftCardStrings.animatedBreakCardScreen.afterBreakCardAnimationInfo
      : null,
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.Image
        entering={FadeIn}
        source={images.credPayDarkBg}
        style={[styles.bgImage, bgImageStyle]}
      />
      <View style={styles.breakCardContainer}>
        <Animated.View
          style={[styles.bottomLottieWrapper, bottomLottieContainerStyle]}>
          <LottieView
            loop={bottomSheetAnimation}
            ref={bottomLottieRef}
            style={styles.bottomLottie}
            source={images.giftCardBottomViewLottie}
          />
          <LottieView
            loop
            autoPlay
            style={styles.downArrowLottie}
            source={images.giftDownArrowLottie}
          />
          <View
            style={[
              styles.upArrowLottieContainer,
              // eslint-disable-next-line react-native/no-inline-styles
              { opacity: bottomSheetAnimation ? 0 : 1 },
            ]}>
            <LottieView
              loop
              autoPlay
              style={styles.upArrowLottie}
              source={images.giftDownArrowLottie}
            />
          </View>
        </Animated.View>
        {showPrizeState ? (
          <OpenedGiftCard
            {...infoPropsRectangleCard}
            containerStyle={[styles.openGiftCardStyle, openGiftCardStyle]}
          />
        ) : null}
        <Animated.View
          entering={ZoomIn.delay(
            enteringAnimationDelay + SlideInUpDuration,
          ).springify()}
          style={[
            styles.breakCardLottieWrapper,
            breakCardLottieContainerStyle,
          ]}>
          <LottieView
            loop={false}
            ref={breakCardLottieRef}
            style={styles.breakCardLottie}
            source={
              isValidAmountToClaim(amount)
                ? images.giftCardBreakLottie
                : images.giftCardBreakForInValidAmountLottie
            }
            onAnimationFinish={handleBreakCardFinishAnimation}
          />
          {initialInfoVisible ? (
            <Animated.View
              style={styles.initialInfoContainer}
              entering={FadeIn.delay(
                enteringAnimationDelay + SlideInUpDuration * 2,
              ).duration(300)}
              exiting={FadeOut.duration(300)}>
              <GenericText color={colors.Text.white} size={12}>
                {giftCardStrings.animatedBreakCardScreen.initialInfoText}
              </GenericText>
            </Animated.View>
          ) : null}
          {showPrizeState ? (
            <>
              <Info {...infoPropsSquareCard} />
              {isValidAmountToClaim(amount) ? (
                <Animated.View
                  style={styles.afterAnimationInfo}
                  entering={FadeIn.delay(
                    enteringAnimationDelay + SlideInUpDuration * 2,
                  ).duration(300)}>
                  <GenericText color={colors.Text.white} size={12}>
                    {
                      giftCardStrings.animatedBreakCardScreen
                        .afterBreakCardAnimationInfo
                    }
                  </GenericText>
                </Animated.View>
              ) : null}
            </>
          ) : null}
        </Animated.View>
        {showConfetti ? (
          <View style={styles.confettiContainer}>
            <LottieView
              loop={false}
              ref={confettiLottieRef}
              style={styles.confettiLottie}
              source={images.giftCardConfetti}
              onAnimationFinish={handleConfettiFinishAnimation}
            />
          </View>
        ) : null}
        {!isCoinHidden ? (
          <AnimatedCoin
            animationDuration={SlideInUpDuration}
            delay={enteringAnimationDelay}
            releasePosition={coinDistFromBtm}
            onCoinRelease={handleCoinRelease}
            onCoinMove={handleCoinMove}
          />
        ) : null}
      </View>
    </Animated.View>
  );
}

AnimatedBreakCard.propTypes = {
  getGiftCardLayout: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
};
