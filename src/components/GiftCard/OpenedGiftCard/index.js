import React from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';

import colors from '../../../styles/colors';
import images from '../../../assets';
import GenericText from '../../common/GenericText';

import styles from './styles';

function OpenedGiftCard(props) {
  const { line1, line2, price, containerStyle, extraInfo } = props;

  return (
    <Animated.View style={containerStyle}>
      <ImageBackground
        source={
          price ? images.openGiftCardBg : images.openGiftCardInvlidAmountBg
        }
        style={styles.imageContainer}>
        <View style={styles.rewardTextWrapper}>
          <GenericText
            size={16}
            lineHeight={16}
            color={colors.Generic.grey_111_1}>
            {line1}
          </GenericText>
          {line2 ? (
            <GenericText
              size={14}
              lineHeight={14}
              style={styles.line2}
              color={colors.Generic.grey_111_1}>
              {line2}
            </GenericText>
          ) : null}
          {price ? (
            <GenericText
              size={22}
              lineHeight={22}
              color={colors.Generic.grey_111_1}
              style={!line2 && extraInfo ? styles.price : null}>
              {price}
            </GenericText>
          ) : null}
          {extraInfo ? (
            <GenericText
              size={12}
              lineHeight={12}
              color={colors.Generic.grey_111_1}
              style={styles.extraInfo}>
              {extraInfo}
            </GenericText>
          ) : null}
        </View>
      </ImageBackground>
    </Animated.View>
  );
}

OpenedGiftCard.defaultProps = {
  price: null,
  line2: null,
  extraInfo: null,
};

OpenedGiftCard.propTypes = {
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string,
  extraInfo: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  containerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default OpenedGiftCard;
