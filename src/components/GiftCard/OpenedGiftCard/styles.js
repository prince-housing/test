import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../../utils/deviceDimensions';

export const Constants = {
  bgImageSize: {
    width: SCREEN_WIDTH - 24 * 2,
    aspectRatio: 312 / 100,
    borderRadius: 12,
  },
};

export default StyleSheet.create({
  imageContainer: {
    ...Constants.bgImageSize,
    marginHorizontal: 24,
  },
  rewardTextWrapper: {
    flex: 1,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line2: {
    marginTop: 4,
    marginBottom: 8,
  },
  price: {
    marginTop: 4,
    marginBottom: 10,
  },
  extraInfo: {
    textAlign: 'center',
  },
});
