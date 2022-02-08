import { StyleSheet } from 'react-native';

import { Layouts } from '../../styles';

export default StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.centered,
  },
});
