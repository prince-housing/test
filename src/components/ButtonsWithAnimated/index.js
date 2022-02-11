import React from 'react';
import { View, Text, Animated } from 'react-native';

import styles, { Constants } from './styles';

const LayoutWidth = Constants.CTA_SIZE.width * 2.5;

const ButtonsWithAnimated = props => {
  const widthAnimation = React.useRef(new Animated.Value(LayoutWidth)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(widthAnimation, {
          toValue: Constants.CTA_SIZE.width,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(widthAnimation, {
          toValue: LayoutWidth,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Text style={styles.heading}>
        Buttons with Animated API of React-Native
      </Text>
      <View style={styles.container}>
        <View style={styles.phoneCta}>
          <Text>View Phone</Text>
        </View>
        <Animated.View style={[styles.contactCta, { width: widthAnimation }]}>
          <Text>Contact</Text>
        </Animated.View>
      </View>
    </>
  );
};

export default ButtonsWithAnimated;
