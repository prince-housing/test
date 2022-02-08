import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing } from '../../styles';

export default StyleSheet.create({
  animatedBox: {
    ...Layouts.container,
    marginTop: Spacing.size_16,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: Colors.Generic.accentBlue,
    margin: Spacing.size_16,
  },
  container: {
    ...Layouts.container,
  },
});
