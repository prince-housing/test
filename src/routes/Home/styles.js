import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing } from '../../styles';

export default StyleSheet.create({
  animatedBox: {
    height: 200,
    width: '100%',
    marginVertical: Spacing.size_16,
    justifyContent: 'flex-end',
  },
  giftCardContainer: {
    marginVertical: Spacing.size_16,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.Generic.accentBlue,
    margin: Spacing.size_16,
  },
  container: {
    ...Layouts.container,
  },
});
