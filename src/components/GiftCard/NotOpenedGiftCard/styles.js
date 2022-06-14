import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
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
  container: {
    flex: 1,
  },
  subtitleStyle: {
    letterSpacing: 0.18,
    color: colors.Generic.white60,
  },
  titleStyle: {
    letterSpacing: 0.18,
    marginBottom: 8,
    color: colors.Text.white,
  },
  textWrapper: {
    flex: 1,
    padding: 16,
    marginLeft: 90,
    justifyContent: 'center',
  },
});
