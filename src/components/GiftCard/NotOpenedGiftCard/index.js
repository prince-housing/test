import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Animated, { FadeInDown } from 'react-native-reanimated';
import colors from '../../../styles/colors';
import images from '../../../assets';
import GenericText from '../../common/GenericText';
import { giftCardStrings } from '../../../strings/giftCard';

import styles from './styles';

function NotOpenedGiftCard(props) {
  const { containerStyle, delay, onPress } = props;

  return (
    <Animated.View entering={FadeInDown.delay(delay)} style={containerStyle}>
      <ImageBackground source={images.giftCardBg} style={styles.imageContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.container}
          onPress={onPress}>
          <View style={styles.textWrapper}>
            <GenericText
              size={14}
              color={colors.Generic.black}
              lineHeight={20}
              style={styles.titleStyle}>
              {giftCardStrings.nonOpenedGiftCard.title}
            </GenericText>
            <GenericText
              size={12}
              color={colors.Generic.black}
              style={styles.subtitleStyle}>
              {giftCardStrings.nonOpenedGiftCard.subTitle}
            </GenericText>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </Animated.View>
  );
}

NotOpenedGiftCard.defaultProps = {
  delay: 0,
};

NotOpenedGiftCard.propTypes = {
  delay: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  containerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default NotOpenedGiftCard;
