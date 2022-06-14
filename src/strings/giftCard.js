export const giftCardStrings = {
  nonOpenedGiftCard: {
    title: 'Cashback Card',
    subTitle: 'Tap to see if you have won a cashback for this payment',
  },
  openedGiftCard: {
    title: 'Woohooo!',
    subTitle: 'You have won!!',
  },
  openedGiftCardUnsuccess: {
    title: 'Oops!',
    subTitle: 'Better luck next time!',
  },
  getPriceString: price => (price ? `\u20B9${price}` : null),
  animatedBreakCardScreen: {
    initialInfoText: 'To redeem it, pull down and break open the card',
    afterBreakCardAnimationInfo: 'This amount will be refunded within 10 days',
  },
};

export default giftCardStrings;
