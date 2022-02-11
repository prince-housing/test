import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing } from '../../styles';

export const Constants = {
  CTA_SIZE: {
    height: 40,
    width: 120,
  },
};

const ctaStyle = {
  ...Layouts.over,
  ...Layouts.centered,
  ...Constants.CTA_SIZE,
  left: undefined,
  borderRadius: 4,
};

export default StyleSheet.create({
  container: {
    ...Layouts.flexRow,
    ...Layouts.justifyEnd,
    height: Constants.CTA_SIZE.height,
    marginHorizontal: Spacing.size_24,
  },
  contactCta: {
    ...ctaStyle,
    backgroundColor: Colors.Generic.accentBlue,
  },
  heading: {
    margin: Spacing.size_08,
    fontSize: 14,
    fontWeight: 'bold',
  },
  phoneCta: {
    ...ctaStyle,
    right: Constants.CTA_SIZE.width + Spacing.size_08,
    backgroundColor: Colors.Generic.accentGold,
  },
});
