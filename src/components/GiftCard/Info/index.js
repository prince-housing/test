import React from 'react';
import PropTypes from 'prop-types';

import Animated, { FadeIn } from 'react-native-reanimated';

import GenericText from '../../common/GenericText';
import colors from '../../../styles/colors';

import styles from './styles';

export default function Info(props) {
  const { line1, line2, price } = props;

  return (
    <Animated.View
      entering={FadeIn.delay(2000)}
      delay={2000}
      style={styles.container}>
      <GenericText size={28} lineHeight={28} color={colors.Generic.grey_82_1}>
        {line1}
      </GenericText>
      {line2 ? (
        <GenericText
          size={16}
          lineHeight={16}
          style={styles.line2}
          color={colors.Generic.grey_82_1}>
          {line2}
        </GenericText>
      ) : null}
      {price ? (
        <GenericText
          size={38}
          lineHeight={38}
          color={colors.Generic.grey_111_1}>
          {price}
        </GenericText>
      ) : null}
    </Animated.View>
  );
}

Info.defaultProps = {
  price: null,
};

Info.propTypes = {
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
