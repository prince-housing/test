import PropTypes from 'prop-types';
import React from 'react';
import { Text, TextPropTypes } from 'react-native';

const GenericText = props => {
  const { callback, ...restProps } = props;
  return (
    <Text
      {...restProps}
      style={[
        {
          fontFamily: props.font,
          fontWeight: props.weight,
          fontSize: props.size,
          color: props.color,
          lineHeight: props.lineHeight,
          textAlign: props.align,
          letterSpacing: props.letterSpacing,
        },
        props.style,
      ]}
      ref={callback ? ref => callback(ref) : null}
    />
  );
};

GenericText.propTypes = {
  ...TextPropTypes,
  font: PropTypes.string,
  weight: PropTypes.oneOf([
    'normal',
    'bold',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]),
  size: PropTypes.number,
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  align: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
  allowFontScaling: PropTypes.bool,
  style: PropTypes.object,
  callback: PropTypes.func,
};

GenericText.defaultProps = {
  weight: 'normal',
  size: 14,
  color: 'black',
  lineHeight: 18,
  align: 'left',
  style: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  allowFontScaling: false,
  callback: () => {},
};

export default GenericText;
