import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing } from '../../styles';

export const HANDLE_WIDTH = 20;

export default StyleSheet.create({
  container: {
    padding: Spacing.size_16,
  },
  slider: {
    ...Layouts.selfCenter,
    width: '80%',
    height: 20,
    borderRadius: 5,
    backgroundColor: Colors.Generic.accentBlue,
    margin: Spacing.size_16,
  },
  sliderHandle: {
    ...Layouts.over,
    right: undefined,
    left: undefined,
    width: HANDLE_WIDTH,
    backgroundColor: Colors.Generic.red,
    borderRadius: 10,
    bottom: -10,
    top: -10,
  },
});
