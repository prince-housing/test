import { StyleSheet } from 'react-native';

export const Constants = {
  giftCardSq: {
    width: 288,
    height: 286,
  },
};

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    ...StyleSheet.absoluteFill,
    width: undefined,
    height: undefined,
  },
  breakCardContainer: {
    flex: 1,
  },
  giftCardSq: {
    ...Constants.giftCardSq,
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
  },
  upArrowLottieContainer: {
    ...StyleSheet.absoluteFill,
    transform: [{ rotate: '180deg' }],
    top: undefined,
    bottom: -100,
  },
  upArrowLottie: {
    width: '100%',
  },
  downArrowLottie: {
    ...StyleSheet.absoluteFill,
    top: undefined,
  },
  bottomLottie: {
    ...StyleSheet.absoluteFill,
    top: undefined,
  },
  bottomLottieWrapper: {
    ...StyleSheet.absoluteFill,
  },
  breakCardLottie: {},
  openGiftCardStyle: {
    position: 'absolute',
  },
  breakCardLottieWrapper: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confettiLottie: {},
  confettiContainer: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  afterAnimationInfo: {
    marginTop: 36,
    top: '-7%',
  },
  initialInfoContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
});
