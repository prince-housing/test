import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export const Constants = {
  coin: {
    aspectRatio: 65 / 67,
  },
};

export default StyleSheet.create({
  coinStatusContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 150 + 67 + 20,
  },
  coinStatus: {
    color: colors.Generic.accentBlue,
    fontSize: 18,
  },
  giftCardCoinWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 150,
  },
  giftCardCoin: {
    ...Constants.coin,
  },
});
