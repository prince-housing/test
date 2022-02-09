import { StyleSheet } from 'react-native';

import { Colors, Layouts } from '../../../styles';

export const CIRCLE_RADIUS = 100;
export const STROKE_WIDTH = 10;
export const CIRCLE_FILL_COLOR = Colors.Generic.accentGold;
export const CIRCLE_STOCK_COLOR = Colors.Generic.alternateGold;
export const TEXT_ANIMATION_COLOR = [
  Colors.Text.primaryBlue,
  Colors.Text.secondaryBlue,
  Colors.Text.primaryBlue,
];

export default StyleSheet.create({
  circleContainer: {
    ...Layouts.centered,
  },
  textInputWrapper: {
    ...Layouts.over,
    ...Layouts.centered,
  },
  textInput: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
