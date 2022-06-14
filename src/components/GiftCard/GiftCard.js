import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { giftCardStrings } from '../../strings/giftCard';
import { isUnclaimed, isValidAmountToClaim } from '../../utils/scratchGiftCard';

import AnimatedBreakCard from './AnimatedBreakCard';

import styles from './styles';
import OpenedGiftCard from './OpenedGiftCard';
import NotOpenedGiftCard from './NotOpenedGiftCard';

function GiftCardComponent(props) {
  const { containerStyle, delay } = props;
  const giftCardRef = useRef(null);
  const amount = 10;
  const status = 'UNCLAIMED';
  const [isGiftCardModalOpen, setIsGiftCardModalOpen] = useState(false);
  const [isGiftCardOpened, setIsGiftCardOpened] = useState(false);
  const openedGiftCard = useSharedValue(0);

  const openGiftCard = useCallback(() => {
    setIsGiftCardOpened(true);
    openedGiftCard.value = withTiming(1);
  }, [openedGiftCard]);

  useEffect(() => {
    if (status && !isUnclaimed(status)) {
      openGiftCard();
    }
  }, [status, openGiftCard]);
  const getLayout = () =>
    new Promise(resolve => {
      giftCardRef?.current?.measureInWindow((x, y) => {
        resolve({ x, y });
      });
    });

  const openModal = useCallback(() => {
    setIsGiftCardModalOpen(true);
  }, [setIsGiftCardModalOpen]);

  const closeModal = useCallback(() => {
    setIsGiftCardModalOpen(false);
  }, []);

  const handleBreakCardFinish = useCallback(() => {
    openGiftCard();
    setTimeout(() => closeModal(), 500);
    // TO restart all things again to testing
    setTimeout(() => {
      setIsGiftCardOpened(false);
    }, 1500);
  }, [closeModal, openGiftCard]);

  const openedGiftStyle = useAnimatedStyle(() => ({
    opacity: openedGiftCard.value,
  }));

  const GiftCard = useMemo(() => {
    const infoProps = {
      line1: isValidAmountToClaim(amount)
        ? giftCardStrings.openedGiftCard.subTitle
        : giftCardStrings.openedGiftCardUnsuccess.title,
      line2: isValidAmountToClaim(amount)
        ? null
        : giftCardStrings.openedGiftCardUnsuccess.subTitle,
      price: isValidAmountToClaim(amount)
        ? giftCardStrings.getPriceString(amount)
        : null,
      extraInfo: isValidAmountToClaim(amount)
        ? giftCardStrings.animatedBreakCardScreen.afterBreakCardAnimationInfo
        : null,
    };

    if (!status) {
      return null;
    }
    if (!isGiftCardOpened && isUnclaimed(status)) {
      return <NotOpenedGiftCard onPress={openModal} delay={delay} />;
    }
    return <OpenedGiftCard {...infoProps} containerStyle={openedGiftStyle} />;
  }, [isGiftCardOpened, openedGiftStyle, openModal, delay]);

  return (
    <View
      style={containerStyle}
      ref={giftCardRef}
      // need to define this onLayout prop,
      // as measureInWindow method will return undefined if this props is not defined.
      onLayout={() => {}}>
      {GiftCard}
      <Modal
        transparent
        animationStyle="fade"
        visible={isGiftCardModalOpen}
        containerStyle={styles.modalContainer}
        onRequestClose={closeModal}>
        <AnimatedBreakCard
          getGiftCardLayout={getLayout}
          onFinish={handleBreakCardFinish}
          isModalVisible={isGiftCardModalOpen}
        />
      </Modal>
    </View>
  );
}

GiftCardComponent.defaultProps = {
  delay: 0,
  containerStyle: {},
};

GiftCardComponent.propTypes = {
  delay: PropTypes.number,
  containerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default GiftCardComponent;
