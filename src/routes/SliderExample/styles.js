import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing } from '../../styles';

export const HANDLE_WIDTH = 20;

export default StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.Generic.white,
    padding: Spacing.size_16,
  },
});
