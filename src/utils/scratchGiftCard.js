export const MinAmountToRedeem = 2;

export const SCRATCH_CARD_STATUS = {
  CLAIMED: 'CLAIMED',
  UNCLAIMED: 'UNCLAIMED',
  REDEEMED: 'REDEEMED',
};

export const isUnclaimed = status => status === SCRATCH_CARD_STATUS.UNCLAIMED;
export const isClaimed = status => status === SCRATCH_CARD_STATUS.CLAIMED;
export const isRedeemed = status => status === SCRATCH_CARD_STATUS.REDEEMED;

export const isValidAmountToClaim = amount => amount >= MinAmountToRedeem;
